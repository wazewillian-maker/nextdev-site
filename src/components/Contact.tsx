import { useState, type FormEvent } from 'react'
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER, WHATSAPP_URL } from '../constants/contact'

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', type: 'Site institucional', message: '' })
  const update = (field: keyof typeof form, value: string) => setForm(current => ({ ...current, [field]: value }))
  const submit = (event: FormEvent) => {
    event.preventDefault()
    const text = `${WHATSAPP_MESSAGE}\n\nNome: ${form.name.trim()}\nTelefone: ${form.phone.trim()}\nTipo de projeto: ${form.type}\nMensagem: ${form.message.trim()}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return <section className="section contact" id="contato"><div className="contact-glow" /><div className="contact-inner"><div className="contact-copy reveal"><span className="section-tag">Vamos conversar</span><h2>Vamos transformar sua ideia em um <em>projeto digital?</em></h2><p>Conte um pouco sobre o que você precisa e fale diretamente com a Next Dev.</p><div className="contact-links"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conversar com a Next Dev pelo WhatsApp"><span aria-hidden="true">◉</span><div><small>WhatsApp</small><strong>(47) 99668-0945</strong></div></a><a href="mailto:nextdev.oficial@gmail.com" aria-label="Enviar e-mail para a Next Dev"><span aria-hidden="true">@</span><div><small>E-mail</small><strong>nextdev.oficial@gmail.com</strong></div></a></div></div><form className="contact-form glass-card reveal" onSubmit={submit} aria-label="Formulário de solicitação de orçamento"><div className="form-row"><label>Nome<input required minLength={2} autoComplete="name" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Como podemos chamar você?" /></label><label>Telefone<input required minLength={8} type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(00) 00000-0000" /></label></div><label>Tipo de projeto<select value={form.type} onChange={e => update('type', e.target.value)}><option>Site institucional</option><option>Aplicativo</option><option>Sistema personalizado</option><option>Landing page</option><option>Outro</option></select></label><label>Mensagem<textarea required minLength={10} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Conte brevemente sobre a sua ideia" rows={4} /></label><button className="whatsapp-button" type="submit" aria-label="Enviar dados do orçamento pelo WhatsApp">Enviar pelo WhatsApp <span aria-hidden="true">↗</span></button></form></div></section>
}
