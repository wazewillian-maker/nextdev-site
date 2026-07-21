import { useEffect, useState, type FormEvent } from 'react'
import { ArrowLeft, Bath, BedDouble, CalendarDays, Car, Check, CheckCircle2, ChevronLeft, ChevronRight, Copy, Heart, MapPin, Maximize2, MessageCircle, Send, Share2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { properties, getNeighborhood, getPriceCaption, getPropertyAreas, getPropertySlug, getPurposeLabel } from '../data/properties'
import { useProperties } from '../context/useProperties'
import { ImageWithSkeleton } from '../components/ImageWithSkeleton'

const maps: Record<string, string> = {
  Bombinhas: 'https://www.openstreetmap.org/export/embed.html?bbox=-48.5500%2C-27.1750%2C-48.4800%2C-27.1050&layer=mapnik&marker=-27.1382%2C-48.5146',
  'Porto Belo': 'https://www.openstreetmap.org/export/embed.html?bbox=-48.5900%2C-27.1800%2C-48.5300%2C-27.1200&layer=mapnik&marker=-27.1578%2C-48.5536',
  Itapema: 'https://www.openstreetmap.org/export/embed.html?bbox=-48.6500%2C-27.1300%2C-48.5700%2C-27.0500&layer=mapnik&marker=-27.0903%2C-48.6110',
}

export function PropertyDetails() {
  const { slug, id } = useParams()
  const property = properties.find((item) => getPropertySlug(item) === slug || item.id === Number(id))
  const [activeImage, setActiveImage] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [sent, setSent] = useState(false)
  const { favorites, toggleFavorite } = useProperties()

  useEffect(() => {
    if (!property) return
    const description = `${property.title} em ${property.location}. ${property.beds} quartos, ${property.parking} vagas e ${property.area} m².`
    document.title = `${property.title} | Prime Imóveis SC`
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', property.title)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description)
  }, [property])

  if (!property) return <main className="not-found"><h1>Imóvel não encontrado</h1><Link className="btn btn--navy" to="/#imoveis">Voltar aos imóveis</Link></main>

  const favorite = favorites.includes(property.id)
  const areas = getPropertyAreas(property)
  const purposeLabel = getPurposeLabel(property.purpose)
  const similar = properties.filter((item) => item.id !== property.id).sort((a, b) => Number(b.purpose === property.purpose) - Number(a.purpose === property.purpose) || Number(b.city === property.city) - Number(a.city === property.city)).slice(0, 3)
  const pageUrl = window.location.href
  const whatsappText = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${property.title}: ${pageUrl}`)
  const copyLink = async () => {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(pageUrl)
      else {
        const field = document.createElement('textarea'); field.value = pageUrl; field.style.position = 'fixed'; field.style.opacity = '0'; document.body.appendChild(field); field.select(); document.execCommand('copy'); field.remove()
      }
      setFeedback('Link copiado!')
    } catch { setFeedback('Não foi possível copiar. Use o endereço do navegador.') }
    window.setTimeout(() => setFeedback(''), 2600)
  }
  const share = async () => { if (navigator.share) { try { await navigator.share({ title: property.title, text: property.description, url: pageUrl }) } catch { /* cancelado */ } } else await copyLink() }
  const changeImage = (direction: number) => setActiveImage((current) => (current + direction + property.gallery.length) % property.gallery.length)
  const schedule = () => { document.getElementById('interest-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); window.setTimeout(() => document.querySelector<HTMLInputElement>('#interest-form input')?.focus(), 450) }
  const submitInterest = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset() }

  return <main className="details-page">
    <section className="details-hero"><div className="container"><Link className="back-link" to="/#imoveis"><ArrowLeft /> Voltar aos imóveis</Link><div className="details-hero__row"><div><span className={`tag details-tag ${property.purpose === 'locacao-mensal' ? 'tag--rent' : property.purpose === 'temporada' ? 'tag--season' : ''}`}>{purposeLabel}</span><h1>{property.title}</h1><p><MapPin /> {getNeighborhood(property)} — {property.city}</p></div><div className="details-price"><small>{getPriceCaption(property.purpose)}</small><strong>{property.price}</strong></div></div></div></section>
    <section className="details-content"><div className="container">
      <div className="gallery"><div className="gallery__main"><ImageWithSkeleton key={activeImage} src={property.gallery[activeImage]} alt={`${property.title} — imagem ${activeImage + 1}`} decoding="async" /><button className="gallery-arrow gallery-arrow--prev" onClick={() => changeImage(-1)} aria-label="Imagem anterior"><ChevronLeft /></button><button className="gallery-arrow gallery-arrow--next" onClick={() => changeImage(1)} aria-label="Próxima imagem"><ChevronRight /></button><span><Maximize2 /> Foto {activeImage + 1} de {property.gallery.length}</span></div><div className="gallery__thumbs">{property.gallery.map((image, index) => <button key={image} className={index === activeImage ? 'active' : ''} onClick={() => setActiveImage(index)} aria-label={`Ver imagem ${index + 1}`}><img src={image} alt="" loading="lazy" decoding="async" /></button>)}</div></div>
      <div className="details-actions"><button onClick={share}><Share2 /> Compartilhar</button><button onClick={copyLink}><Copy /> Copiar link</button><a href={`https://wa.me/5547999999999?text=${whatsappText}`} target="_blank" rel="noreferrer"><MessageCircle /> Enviar por WhatsApp</a>{feedback && <span role="status">{feedback}</span>}</div>
      <div className="details-layout"><article className="details-main">
        <div className="details-specs"><span><BedDouble /><strong>{property.beds}</strong> quartos</span><span><Bath /><strong>{property.baths}</strong> banheiros</span><span><Car /><strong>{property.parking}</strong> vagas</span><span><Maximize2 /><strong>{areas.built} m²</strong> área construída</span><span><Maximize2 /><strong>{areas.land} m²</strong> área do terreno</span></div>
        <div className="details-location"><span><small>Bairro</small>{getNeighborhood(property)}</span><span><small>Cidade</small>{property.city} — SC</span></div>
        <div className="details-block"><p className="eyebrow">Sobre o imóvel</p><h2>Conforto em cada detalhe</h2><p>{property.description}</p></div>
        <div className="details-block"><h2>Principais características</h2><div className="features-list">{property.features.map((feature) => <span key={feature}><Check /> {feature}</span>)}</div></div>
        <div className="property-map"><div><p className="eyebrow">Localização</p><h2>Conheça a região</h2><p>{getNeighborhood(property)}, {property.city} — Santa Catarina</p></div><iframe title={`Mapa de ${property.location}`} src={maps[property.city] ?? maps.Bombinhas} loading="lazy" /></div>
      </article><aside className="details-aside"><p className="eyebrow">Gostou deste imóvel?</p><h2>Agende uma visita</h2><p>Envie seus dados e um especialista entrará em contato para apresentar todos os detalhes.</p><button className="btn btn--navy schedule-button" onClick={schedule}><CalendarDays /> Agendar visita</button><form className="interest-form" id="interest-form" onSubmit={submitInterest}><label>Nome<input name="name" required minLength={2} placeholder="Seu nome" /></label><label>Telefone<input name="phone" required pattern="[0-9 ()+-]{10,}" placeholder="(47) 99999-9999" /></label><label>E-mail<input name="email" type="email" required placeholder="voce@email.com" /></label><label>Mensagem<textarea name="message" required defaultValue={`Tenho interesse no imóvel ${property.title}.`} /></label><button className="btn btn--gold" type="submit"><Send /> Enviar interesse</button></form>{sent && <p className="interest-success" role="status"><CheckCircle2 /> Interesse enviado com sucesso!</p>}<a className="btn btn--whatsapp" href={`https://wa.me/5547999999999?text=${whatsappText}`} target="_blank" rel="noreferrer"><MessageCircle /> Falar no WhatsApp</a><button className={`details-favorite ${favorite ? 'active' : ''}`} onClick={() => toggleFavorite(property.id)}><Heart fill={favorite ? 'currentColor' : 'none'} /> {favorite ? 'Salvo nos favoritos' : 'Adicionar aos favoritos'}</button></aside></div>
      <section className="similar-properties"><div className="section-heading"><div><p className="eyebrow">Outras oportunidades</p><h2>Imóveis semelhantes</h2></div><p>Selecionados na mesma região ou com características próximas.</p></div><div className="similar-properties__grid">{similar.map((item) => <Link key={item.id} to={`/imoveis/${getPropertySlug(item)}`}><ImageWithSkeleton src={item.image} alt={item.title} loading="lazy" decoding="async" /><span><small>{getPurposeLabel(item.purpose)} · {item.type} em {item.city}</small><strong>{item.title}</strong><em>{item.price}</em></span></Link>)}</div></section>
    </div></section>
  </main>
}
