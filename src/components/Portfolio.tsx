import { SectionHeader } from './SectionHeader'

const projects = [
  { category: 'Aplicativo mobile', name: 'Fintech App', copy: 'Experiência financeira simples e inteligente.', className: 'project-fintech' },
  { category: 'Website institucional', name: 'Nexus Studio', copy: 'Presença digital premium para uma marca criativa.', className: 'project-studio' },
  { category: 'Sistema web', name: 'Flow Dashboard', copy: 'Gestão clara para decisões mais rápidas.', className: 'project-dashboard' },
]

export function Portfolio() {
  return <section className="section portfolio" id="portfolio"><div className="portfolio-heading"><SectionHeader tag="Projetos" title="Ideias que viram" accent="experiências" description="Uma prévia do tipo de produto que podemos criar juntos." /><span className="coming-soon">Novos cases em breve</span></div><div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.name}><div className={`project-preview ${p.className}`}><div className="project-no">0{i + 1}</div><div className="mockup"><div className="mockup-bar" /><div className="mockup-content"><i /><i /><i /></div></div></div><div className="project-info"><div><small>{p.category}</small><h3>{p.name}</h3><p>{p.copy}</p></div><span>↗</span></div></article>)}</div></section>
}
