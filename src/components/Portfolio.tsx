import { SectionHeader } from './SectionHeader'
import { projects } from '../data/projects'

export function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="portfolio-heading"><SectionHeader tag="Projetos" title="Ideias que viram" accent="experiências" description="Soluções digitais pensadas para problemas reais e resultados concretos." /><span className="coming-soon">Portfólio Next Dev</span></div>
      <div className="project-grid">{projects.map((project, index) => (
        <article className={`project-card reveal${project.featured ? ' project-featured' : ''}`} key={project.id}>
          <div className={`project-preview ${project.visualClass}`}><span className="project-status">{project.status}</span><div className="project-no">0{index + 1}</div>{project.image ? <img className="project-image" src={project.image} alt={`Prévia do projeto ${project.title}`} /> : <div className="mockup"><div className="mockup-bar" /><div className="mockup-content"><i /><i /><i /></div></div>}</div>
          <div className="project-info"><div><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p>{project.showTechnologies && <ul className="project-technologies" aria-label={`Tecnologias do projeto ${project.title}`}>{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>}{project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.ctaLabel ?? 'Ver projeto'} ${project.title} em uma nova aba`}>{project.ctaLabel ?? 'Ver projeto'} <span>↗</span></a>}</div><span aria-hidden="true">↗</span></div>
        </article>
      ))}</div>
    </section>
  )
}
