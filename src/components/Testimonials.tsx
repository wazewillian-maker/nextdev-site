import { SectionHeader } from './SectionHeader'
import { testimonials } from '../data/testimonials'

export function Testimonials() {
  return <section className="section testimonials"><SectionHeader tag="Depoimentos" title="Resultados que contam" accent="histórias" description="Esta área receberá experiências reais de clientes e parceiros da Next Dev." align="center" /><div className="testimonial-grid">{testimonials.map((message, index) => <article className="glass-card reveal" key={message}><span aria-hidden="true">“</span><p>{message}</p><small>Em breve · 0{index + 1}</small></article>)}</div></section>
}
