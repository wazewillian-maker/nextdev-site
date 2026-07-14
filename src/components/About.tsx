import { Differentials } from './Differentials'

const indicators = ['Soluções personalizadas', 'Design responsivo', 'Suporte próximo', 'Tecnologia moderna']

export function About() {
  return <><section className="section about" id="sobre"><div className="about-visual reveal" aria-hidden="true"><div className="about-orbit"><span>N</span></div><i className="about-dot dot-a" /><i className="about-dot dot-b" /></div><div className="about-copy reveal"><span className="section-tag">Sobre a Next Dev</span><h2>Tecnologia acessível para empresas que <em>querem crescer</em></h2><p>A Next Dev desenvolve sites, aplicativos e sistemas personalizados com foco em design moderno, facilidade de uso e resultados reais. Nosso objetivo é ajudar pequenas e médias empresas a construírem uma presença digital profissional e aproveitarem melhor a tecnologia em seus negócios.</p><div className="indicator-grid">{indicators.map(item => <div key={item}><span>✓</span>{item}</div>)}</div></div></section><Differentials /></>
}
