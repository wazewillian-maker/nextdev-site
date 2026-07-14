import { WHATSAPP_URL } from '../constants/contact'

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="#inicio"><span className="brand-mark">N</span><span>Next <strong>Dev</strong></span></a>
          <p>Soluções digitais modernas para empresas que querem crescer.</p>
        </div>
        <div><h3>Links rápidos</h3><a href="#inicio">Início</a><a href="#processo">Processo</a><a href="#portfolio">Portfólio</a><a href="#sobre">Sobre</a><a href="#faq">FAQ</a><a href="#contato">Contato</a></div>
        <div><h3>Serviços</h3><a href="#servicos">Aplicativos</a><a href="#servicos">Sites</a><a href="#servicos">Sistemas</a><a href="#servicos">Landing pages</a></div>
        <div><h3>Fale conosco</h3><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conversar com a Next Dev pelo WhatsApp">WhatsApp · (47) 99668-0945</a><a href="mailto:nextdev.oficial@gmail.com">nextdev.oficial@gmail.com</a></div>
      </div>
      <div className="footer-bottom"><p>© 2026 Next Dev. Todos os direitos reservados.</p><span>Desenvolvido por Next Dev</span></div>
    </footer>
  )
}
