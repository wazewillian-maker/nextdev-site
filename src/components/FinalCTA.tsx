import { WHATSAPP_URL } from '../constants/contact'

export function FinalCTA() {
  return <section className="final-cta"><div className="final-cta-grid" /><div className="final-cta-content reveal"><span className="section-tag">Vamos criar juntos</span><h2>Pronto para levar sua empresa para o <em>próximo nível?</em></h2><p>Transforme sua ideia em uma solução digital profissional, moderna e preparada para crescer.</p><a className="button primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp">Solicitar orçamento <span>↗</span></a></div></section>
}
