const founderHighlights = [
  'Sites Responsivos',
  'Aplicativos Personalizados',
  'Sistemas Sob Medida',
  'Suporte e Atualizações',
]

export function Founder() {
  return (
    <section className="section founder" id="fundador" aria-labelledby="founder-title">
      <div className="founder-visual reveal">
        <div className="founder-photo-frame">
          <img
            src="/images/fundador-next-dev.jpeg"
            alt="Fundador da Next Dev em seu ambiente de trabalho"
          />
        </div>
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

        <div className="founder-highlights" aria-label="Serviços e diferenciais">
          {founderHighlights.map((label, index) => (
            <div
              className="founder-highlight reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
              key={label}
            >
              <span aria-hidden="true">✓</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
