import { WHATSAPP_URL } from '../constants/contact'

export function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="hero-content reveal">
        <div className="eyebrow"><span /> Tecnologia que impulsiona negócios</div>
        <h1>Transformamos ideias em <span>aplicativos e sites</span> profissionais.</h1>
        <p>Criamos soluções digitais modernas para empresas que desejam crescer.</p>
        <div className="hero-actions">
          <a className="button primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp">Solicitar orçamento <span>↗</span></a>
          <a className="button secondary" href="#servicos">Ver serviços <span>↓</span></a>
        </div>
        <div className="hero-proof">
          <div><strong>100%</strong><span>Soluções sob medida</span></div>
          <i />
          <div><strong>∞</strong><span>Possibilidades digitais</span></div>
        </div>
      </div>
      <div className="hero-visual reveal" aria-hidden="true">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="code-card glass-card">
          <div className="window-bar"><span /><span /><span /></div>
          <div className="code-line short" /><div className="code-line" /><div className="code-line medium" />
          <div className="code-block"><span>&lt;/&gt;</span></div>
          <div className="code-line medium" /><div className="code-line short" />
        </div>
        <div className="floating-badge badge-top"><span>◆</span><div><small>Performance</small><strong>98/100</strong></div></div>
        <div className="floating-badge badge-bottom"><span>✓</span><div><small>Projeto</small><strong>Online</strong></div></div>
      </div>
    </section>
  )
}
