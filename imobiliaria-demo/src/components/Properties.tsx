import { Bath, BedDouble, Car, Heart, MapPin, SearchX } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getNeighborhood, getPropertySlug, getPurposeLabel, properties, type Property } from '../data/properties'
import { useProperties } from '../context/useProperties'
import { ImageWithSkeleton } from './ImageWithSkeleton'

const priceRules: Record<string, { max?: number; min?: number }> = {
  'Até R$ 500.000': { max: 500000 }, 'Até R$ 800.000': { max: 800000 }, 'Até R$ 1.000.000': { max: 1000000 }, 'Até R$ 1.500.000': { max: 1500000 }, 'Acima de R$ 1.500.000': { min: 1500000 },
  'Até R$ 2.000/mês': { max: 2000 }, 'Até R$ 3.500/mês': { max: 3500 }, 'Até R$ 5.000/mês': { max: 5000 }, 'Até R$ 8.000/mês': { max: 8000 }, 'Acima de R$ 8.000/mês': { min: 8000 },
  'Até R$ 300/dia': { max: 300 }, 'Até R$ 500/dia': { max: 500 }, 'Até R$ 800/dia': { max: 800 }, 'Até R$ 1.200/dia': { max: 1200 }, 'Acima de R$ 1.200/dia': { min: 1200 },
}

const propertyMatchesPrice = (value: number, option: string) => {
  const rule = priceRules[option]
  if (!rule) return true
  return (rule.max === undefined || value <= rule.max) && (rule.min === undefined || value > rule.min)
}

function PropertyCard({ item }: { item: Property }) {
  const { favorites, toggleFavorite } = useProperties()
  const favorite = favorites.includes(item.id)
  const url = `/imoveis/${getPropertySlug(item)}`
  return <motion.article className="property-card" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .55 }}><Link className="property-card__overlay" to={url} aria-label={`Ver detalhes de ${item.title}`} /><div className="property-card__image"><ImageWithSkeleton src={item.image} alt={item.title} loading="lazy" decoding="async" /><span className={`tag ${item.purpose === 'locacao-mensal' ? 'tag--rent' : item.purpose === 'temporada' ? 'tag--season' : ''}`}>{getPurposeLabel(item.purpose)}</span><button className={`favorite ${favorite ? 'favorite--active' : ''}`} onClick={() => toggleFavorite(item.id)} aria-pressed={favorite} aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}><Heart size={19} fill={favorite ? 'currentColor' : 'none'} /></button></div><div className="property-card__body"><strong className="property-card__price">{item.price}</strong><h3>{item.title}</h3><p className="property-card__location"><MapPin size={15} /> {item.location}</p><div className="property-card__meta"><span><BedDouble size={18} /> {item.beds} quartos</span><span><Bath size={18} /> {item.baths} banhos</span><span><Car size={18} /> {item.parking} vagas</span></div><Link className="property-card__link" to={url}>Ver detalhes <span>→</span></Link></div></motion.article>
}

export function Properties() {
  const reduceMotion = useReducedMotion()
  const { filters, clearFilters } = useProperties()
  const filtered = properties.filter((item) => {
    const neighborhoodMatch = filters.neighborhood === 'Todos os bairros' || getNeighborhood(item) === filters.neighborhood
    const bedroomsMatch = filters.bedrooms === 'Qualquer quantidade' || item.beds >= Number(filters.bedrooms)
    return item.purpose === filters.purpose && neighborhoodMatch && bedroomsMatch && (filters.type === 'Todos' || item.type === filters.type) && propertyMatchesPrice(item.priceValue, filters.price)
  })
  const hasFilters = filters.purpose !== 'venda' || filters.neighborhood !== 'Todos os bairros' || filters.bedrooms !== 'Qualquer quantidade' || filters.type !== 'Todos' || filters.price !== 'Qualquer valor'
  return <section className="section properties" id="imoveis"><div className="container"><motion.div className="section-heading" initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }}><div><p className="eyebrow">Seleção especial</p><h2>Imóveis em destaque</h2></div><div className="properties__intro"><p>{filtered.length} {filtered.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'} para você.</p>{hasFilters && <button className="clear-filters" onClick={clearFilters}>Limpar filtros</button>}</div></motion.div>{filtered.length ? <motion.div className="properties__grid" key={JSON.stringify(filters)} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : .09 } } }} initial="hidden" animate="visible">{filtered.map((item) => <PropertyCard key={item.id} item={item} />)}</motion.div> : <motion.div className="empty-state" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}><SearchX /><h3>Nenhum imóvel encontrado</h3><p>Tente ajustar os filtros para descobrir outras oportunidades.</p><button className="btn btn--navy" onClick={clearFilters}>Limpar filtros</button></motion.div>}<div className="section-action"><button className="btn btn--outline-navy" onClick={clearFilters}>Ver todos os imóveis <span>→</span></button></div></div></section>
}
