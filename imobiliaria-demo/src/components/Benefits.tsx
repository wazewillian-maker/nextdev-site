import { CalendarDays, HandCoins, Handshake, Home, KeyRound } from 'lucide-react'
import { motion } from 'framer-motion'
const items = [
  [Handshake, 'Atendimento personalizado', 'Entendemos seu momento para encontrar opções que realmente façam sentido.'],
  [HandCoins, 'Compra e venda', 'Assessoria completa e negociação segura para compradores e proprietários.'],
  [KeyRound, 'Locação anual', 'Gestão cuidadosa para contratos tranquilos e relações duradouras.'],
  [CalendarDays, 'Temporada', 'Imóveis selecionados para viver Bombinhas com conforto em cada estadia.'],
  [Home, 'Avaliação de imóveis', 'Análise criteriosa de mercado para definir o melhor posicionamento do seu patrimônio.'],
]
export function Benefits() { return <section className="section benefits"><div className="container"><div className="center-heading"><p className="eyebrow">Experiência Prime</p><h2>Por que escolher a Prime</h2><p>Mais que imóveis, entregamos tranquilidade para você tomar a melhor decisão.</p></div><div className="benefits__grid">{items.map(([Icon, title, text], i) => <motion.article key={String(title)} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span className="benefit-icon"><Icon size={25} /></span><h3>{String(title)}</h3><p>{String(text)}</p></motion.article>)}</div></div></section> }
