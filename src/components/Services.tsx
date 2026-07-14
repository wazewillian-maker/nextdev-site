import { SectionHeader } from './SectionHeader'

const services = [
  { icon: '◫', number: '01', title: 'Desenvolvimento de aplicativos', text: 'Apps rápidos, intuitivos e preparados para escalar com o seu negócio.', tags: ['Android', 'iOS'] },
  { icon: '◇', number: '02', title: 'Desenvolvimento de sites', text: 'Sites modernos, responsivos e otimizados para gerar resultados.', tags: ['React', 'TypeScript'] },
  { icon: 'ϟ', number: '03', title: 'Sistemas personalizados', text: 'Soluções inteligentes criadas para otimizar os seus processos.', tags: ['Automação', 'APIs'] },
  { icon: '↗', number: '04', title: 'Landing pages profissionais', text: 'Páginas estratégicas focadas em apresentar sua oferta e gerar contatos.', tags: ['Conversão', 'SEO'] },
]

export function Services() {
  return <section className="section services" id="servicos"><SectionHeader tag="O que fazemos" title="Soluções digitais para o" accent="seu negócio" description="Do conceito ao produto final, criamos experiências digitais que conectam marcas e pessoas." /><div className="service-grid">{services.map(s => <article className="service-card glass-card reveal" key={s.number}><div className="service-top"><span className="service-icon">{s.icon}</span><small>{s.number}</small></div><h3>{s.title}</h3><p>{s.text}</p><div className="tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div><a href="#contato" aria-label={`Saiba mais sobre ${s.title}`}>Saiba mais <span>↗</span></a></article>)}</div></section>
}
