import { useState } from 'react'

const links = [
  ['Início', '#inicio'],
  ['Serviços', '#servicos'],
  ['Portfólio', '#portfolio'],
  ['Sobre', '#sobre'],
  ['Contato', '#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Next Dev — início">
        <span className="brand-mark">N</span>
        <span>Next <strong>Dev</strong></span>
      </a>
      <button className="menu-button" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav id="main-navigation" className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#contato">Solicitar orçamento <span>↗</span></a>
    </header>
  )
}
