import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Differentials } from './components/Differentials'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
