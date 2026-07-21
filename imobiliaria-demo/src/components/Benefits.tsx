import { BadgeCheck, Gem, Handshake, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
const items = [
  [Handshake, 'Atendimento personalizado', 'Entendemos seu momento para encontrar opções que realmente façam sentido.'],
  [ShieldCheck, 'Segurança na negociação', 'Transparência e assessoria jurídica em todas as etapas da sua negociação.'],
  [Gem, 'Imóveis selecionados', 'Um portfólio cuidadosamente avaliado nas melhores praias de Bombinhas e região.'],
  [BadgeCheck, 'Suporte completo', 'Da primeira visita à entrega das chaves, você conta com nosso time ao seu lado.'],
]
export function Benefits() { return <section className="section benefits"><div className="container"><div className="center-heading"><p className="eyebrow">Experiência Prime</p><h2>Por que escolher a Prime</h2><p>Mais que imóveis, entregamos tranquilidade para você tomar a melhor decisão.</p></div><div className="benefits__grid">{items.map(([Icon, title, text], i) => <motion.article key={String(title)} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span className="benefit-icon"><Icon size={25} /></span><h3>{String(title)}</h3><p>{String(text)}</p></motion.article>)}</div></div></section> }
