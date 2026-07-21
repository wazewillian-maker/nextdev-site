import { useState, type FormEvent } from 'react'
import { Clock3, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'message', string>>

export function Contact() {
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setSuccess(false); const data = new FormData(event.currentTarget)
    const next: Errors = {}
    const name = String(data.get('name') ?? '').trim(), phone = String(data.get('phone') ?? '').trim(), email = String(data.get('email') ?? '').trim(), message = String(data.get('message') ?? '').trim()
    if (name.length < 2) next.name = 'Informe seu nome.'
    if (phone.replace(/\D/g, '').length < 10) next.phone = 'Informe um telefone válido.'
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Informe um e-mail válido.'
    if (message.length < 10) next.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
    setErrors(next)
    if (!Object.keys(next).length) { setSuccess(true); event.currentTarget.reset() }
  }
  return <section className="section contact" id="contato"><div className="container"><div className="contact__heading"><p className="eyebrow">Fale com a Prime</p><h2>Vamos encontrar o seu próximo lugar.</h2><p>Nossa equipe em Bombinhas está pronta para entender o que você procura e apresentar as melhores oportunidades da Costa Esmeralda.</p></div><div className="contact__grid"><motion.div className="contact__info" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div><Phone /><span><small>Telefone</small><a href="tel:+554733692480">(47) 3369-2480</a></span></div><div><Mail /><span><small>E-mail</small><a href="mailto:contato@primeimoveissc.com.br">contato@primeimoveissc.com.br</a></span></div><div><MapPin /><span><small>Endereço</small>Av. Vereador Manoel José dos Santos, 1450 — Centro, Bombinhas, SC</span></div><div><Clock3 /><span><small>Atendimento</small>Segunda a sexta, das 8h às 18h</span></div></motion.div><motion.form className="contact-form" onSubmit={submit} noValidate initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="form-row"><label>Nome<input name="name" type="text" placeholder="Seu nome completo" aria-invalid={!!errors.name} />{errors.name && <small>{errors.name}</small>}</label><label>Telefone<input name="phone" type="tel" placeholder="(47) 99999-9999" aria-invalid={!!errors.phone} />{errors.phone && <small>{errors.phone}</small>}</label></div><label>E-mail<input name="email" type="email" placeholder="voce@email.com" aria-invalid={!!errors.email} />{errors.email && <small>{errors.email}</small>}</label><label>Mensagem<textarea name="message" rows={5} placeholder="Conte-nos que tipo de imóvel você procura" aria-invalid={!!errors.message} />{errors.message && <small>{errors.message}</small>}</label><button className="btn btn--navy" type="submit"><Send /> Enviar mensagem</button>{success && <p className="form-success" role="status"><CheckCircle2 /> Mensagem enviada! Em breve entraremos em contato.</p>}</motion.form></div><div className="contact-map"><iframe title="Localização da Prime Imóveis SC em Bombinhas" src="https://www.openstreetmap.org/export/embed.html?bbox=-48.5500%2C-27.1750%2C-48.4800%2C-27.1050&amp;layer=mapnik&amp;marker=-27.1382%2C-48.5146" loading="lazy" /></div></div></section>
}
