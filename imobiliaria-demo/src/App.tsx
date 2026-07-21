import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Properties } from './components/Properties'
import { Stats } from './components/Stats'
import { Benefits } from './components/Benefits'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { BackToTop } from './components/BackToTop'

const PropertyDetails = lazy(() => import('./pages/PropertyDetails').then((module) => ({ default: module.PropertyDetails })))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
    }, 0)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])
  useEffect(() => {
    if (pathname !== '/') return
    document.title = 'Prime Imóveis SC | Imóveis em Bombinhas e região'
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = 'Imóveis selecionados em Bombinhas, Porto Belo e Itapema. Encontre casas, apartamentos e coberturas na Costa Esmeralda.'
  }, [pathname])
  return null
}

function Home() {
  return <main><Hero /><Properties /><Stats /><Benefits /><About /><Testimonials /><Contact /></main>
}

export default function App() {
  return <><ScrollManager /><Header /><Suspense fallback={<main className="route-loading" aria-label="Carregando página"><span /></main>}><Routes><Route path="/" element={<Home />} /><Route path="/imoveis/:slug" element={<PropertyDetails />} /><Route path="/imovel/:id" element={<PropertyDetails />} /><Route path="*" element={<Home />} /></Routes></Suspense><Footer /><WhatsAppButton /><BackToTop /></>
}
