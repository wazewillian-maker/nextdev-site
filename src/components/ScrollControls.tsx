import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../constants/contact'

export function ScrollControls() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  return <div className="scroll-controls"><a className="float-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com a Next Dev no WhatsApp">◉</a><button type="button" className={visible ? 'back-top visible' : 'back-top'} onClick={scrollToTop} aria-label="Voltar ao topo" aria-hidden={!visible} tabIndex={visible ? 0 : -1}>↑</button></div>
}
