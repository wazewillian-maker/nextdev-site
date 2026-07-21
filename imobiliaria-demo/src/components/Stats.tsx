import { motion } from 'framer-motion'
const stats = [['250+', 'imóveis no portfólio'], ['12', 'anos de experiência'], ['480+', 'clientes atendidos'], ['98%', 'de satisfação']]
export function Stats() { return <section className="stats"><div className="container stats__grid">{stats.map(([number, label], i) => <motion.div key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><strong>{number}</strong><span>{label}</span></motion.div>)}</div></section> }
