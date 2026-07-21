import { Quote, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const reviews = [
  ['Mariana & Rafael', 'Bombas, Bombinhas', 'Queríamos um apartamento perto da Praia de Bombas e a equipe encontrou exatamente o que imaginávamos. Todo o processo foi leve, transparente e muito seguro.'],
  ['Carlos Eduardo', 'Porto Belo, SC', 'Profissionalismo impecável e conhecimento real da Costa Esmeralda. Encontrei um excelente investimento em Porto Belo e tive suporte em cada detalhe.'],
  ['Fernanda Lima', 'Mariscal, Bombinhas', 'Da primeira visita em Mariscal até a entrega das chaves, senti que minhas prioridades vinham em primeiro lugar. Recomendo de olhos fechados!'],
]

export function Testimonials() { return <section className="section testimonials" id="depoimentos"><div className="container"><div className="center-heading center-heading--light"><p className="eyebrow eyebrow--light">Histórias reais</p><h2>O que nossos clientes dizem</h2><p>Relacionamentos construídos com confiança são o nosso maior patrimônio.</p></div><Swiper className="testimonials-slider" modules={[Navigation, Pagination, A11y]} navigation pagination={{ clickable: true }} spaceBetween={24} slidesPerView={1} breakpoints={{ 760: { slidesPerView: 2 }, 1050: { slidesPerView: 3 } }}>{reviews.map(([name, city, review]) => <SwiperSlide key={name}><article><Quote className="quote" size={30} /><div className="stars" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}</div><p>“{review}”</p><div className="reviewer"><span>{name.charAt(0)}</span><div><strong>{name}</strong><small>{city}</small></div></div></article></SwiperSlide>)}</Swiper></div></section> }
