import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'

const links = [['Início', 'inicio'], ['Imóveis', 'imoveis'], ['Sobre', 'sobre'], ['Depoimentos', 'depoimentos'], ['Contato', 'contato']]

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])
  const solid = scrolled || pathname !== '/'
  return <header className={`header ${solid ? 'header--scrolled' : ''}`}>
    <div className="container header__inner">
      <Link to="/#inicio"><Logo light /></Link>
      <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
        {links.map(([label, id]) => <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}
        <a className="btn btn--gold nav__cta" href="https://wa.me/5547999999999" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar com corretor</a>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}
