import { SectionHeader } from './SectionHeader'

const items = [
  ['✦', 'Design moderno', 'Interfaces bonitas, intuitivas e pensadas em cada detalhe.'],
  ['ϟ', 'Alto desempenho', 'Produtos rápidos e otimizados em qualquer dispositivo.'],
  ['◇', 'Segurança', 'Boas práticas para proteger seus dados e seus usuários.'],
  ['◎', 'Suporte próximo', 'Acompanhamento transparente em todas as etapas.'],
  ['</>', 'Código limpo', 'Estrutura sólida, escalável e fácil de evoluir.'],
]

export function Differentials() {
  return <section className="section differentials" id="diferenciais"><SectionHeader tag="Por que a Next Dev" title="Tecnologia com" accent="propósito" description="Combinamos estratégia, design e engenharia para construir produtos digitais que fazem a diferença." align="center" /><div className="differential-grid">{items.map(([icon, title, text]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
}
