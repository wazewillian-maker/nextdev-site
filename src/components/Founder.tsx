const founderHighlights = [
  ['⌘', 'Desenvolvimento de Sites'],
  ['▣', 'Desenvolvimento de Aplicativos'],
  ['↗', 'Soluções Personalizadas'],
  ['◎', 'Atendimento Próximo'],
]

export function Founder() {
  return (
    <section className="section founder" id="fundador" aria-labelledby="founder-title">
      <div className="founder-visual reveal">
        <div className="founder-tech-grid" aria-hidden="true" />
        <span className="founder-tech-label label-code" aria-hidden="true">&lt;/&gt;</span>
        <span className="founder-tech-label label-next" aria-hidden="true">NEXT_01</span>
        <span className="founder-tech-dot dot-one" aria-hidden="true" />
        <span className="founder-tech-dot dot-two" aria-hidden="true" />
        <div className="founder-avatar glass-card">
          <img src="/images/willian.png.jpeg" alt="Willian Sebben, fundador da Next Dev" />
          <div className="founder-profile-caption">
            <strong>Willian Sebben</strong>
            <span>Founder &amp; Software Developer</span>
          </div>
        </div>
        <p className="founder-motto glass-card">“A tecnologia transformou o meu negócio. Agora quero ajudar a transformar o seu.”</p>
      </div>

      <div className="founder-copy reveal">
        <span className="section-tag">Conheça quem está por trás da Next Dev</span>
        <h2 id="founder-title">Olá! Eu sou o <em>Willian Sebben.</em></h2>
        <div className="founder-story">
          <p>Sou fundador da Next Dev e também empreendedor.</p>
          <p>A Next Dev nasceu da vontade de resolver problemas reais utilizando tecnologia.</p>
          <p>Antes mesmo de desenvolver sites para outras empresas, comecei criando um sistema para o meu próprio negócio: o Crystal Clear Pro, um aplicativo desenvolvido para organizar a gestão de uma empresa de manutenção de piscinas.</p>
          <p>Hoje aplico essa mesma dedicação para desenvolver sites, aplicativos e soluções digitais modernas para pequenas e médias empresas.</p>
          <p>Meu objetivo é criar projetos bonitos, rápidos, intuitivos e que realmente ajudem empresas a crescer.</p>
          <p>Acredito que tecnologia de qualidade deve ser acessível e gerar resultados reais para quem empreende.</p>
        </div>
        <div className="founder-highlights">{founderHighlights.map(([icon, label], index) => <div className="founder-highlight reveal" style={{ transitionDelay: `${index * 90}ms` }} key={label}><span aria-hidden="true">{icon}</span><strong>{label}</strong></div>)}</div>
        <div className="founder-stack" aria-label="Tecnologias e áreas de atuação"><span>React</span><span>TypeScript</span><span>Sites</span><span>Aplicativos</span><span>Sistemas</span></div>
        <blockquote className="founder-quote glass-card">“Cada projeto desenvolvido pela Next Dev recebe a mesma dedicação como se fosse criado para a minha própria empresa.”</blockquote>
      </div>
    </section>
  )
}
