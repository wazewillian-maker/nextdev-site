import { SectionHeader } from './SectionHeader'

const items = [
  ['✦', 'Design moderno', 'Interfaces intuitivas e pensadas em cada detalhe.'],
  ['▣', 'Responsividade', 'Experiência consistente em qualquer tamanho de tela.'],
  ['ϟ', 'Alto desempenho', 'Produtos rápidos, leves e cuidadosamente otimizados.'],
  ['◇', 'Segurança', 'Boas práticas para proteger dados e usuários.'],
  ['</>', 'Código organizado', 'Estrutura sólida, escalável e fácil de evoluir.'],
  ['◎', 'Suporte próximo', 'Comunicação transparente em todas as etapas.'],
]

export function Differentials() {
  return <section className="section differentials" id="diferenciais"><SectionHeader tag="Nossos diferenciais" title="Qualidade em cada" accent="detalhe" description="Estratégia, design e engenharia trabalhando juntos para entregar produtos melhores." align="center" /><div className="differential-grid">{items.map(([icon, title, text]) => <article className="reveal" key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
}
