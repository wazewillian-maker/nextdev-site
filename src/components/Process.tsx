import { SectionHeader } from './SectionHeader'

const steps = [
  ['◌', 'Conversamos sobre seu projeto', 'Entendemos seus objetivos, público e necessidades.'],
  ['◇', 'Planejamos a solução', 'Definimos a estratégia, o escopo e os próximos passos.'],
  ['✦', 'Criamos o design', 'Transformamos a estratégia em uma experiência visual.'],
  ['</>', 'Desenvolvemos', 'Construímos o produto com tecnologia moderna e segura.'],
  ['✓', 'Você aprova', 'Apresentamos, refinamos e validamos cada detalhe com você.'],
  ['↗', 'Publicamos e damos suporte', 'Colocamos tudo no ar e seguimos ao seu lado.'],
]

export function Process() {
  return <section className="section process" id="processo"><SectionHeader tag="Como trabalhamos" title="Como funciona nosso" accent="processo" description="Um caminho claro e colaborativo, da primeira conversa até o lançamento." align="center" /><ol className="process-timeline">{steps.map(([icon, title, text], index) => <li className="reveal" key={title}><div className="process-marker"><span>{icon}</span><small>0{index + 1}</small></div><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
}
