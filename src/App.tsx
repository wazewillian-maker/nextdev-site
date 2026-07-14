import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { ScrollControls } from './components/ScrollControls'
import { RevealObserver } from './components/RevealObserver'
import { Process } from './components/Process'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Founder } from './components/Founder'

function App() {
  return (
    <div className="site-shell">
      <RevealObserver />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Founder />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollControls />
    </div>
  )
}

export default App
