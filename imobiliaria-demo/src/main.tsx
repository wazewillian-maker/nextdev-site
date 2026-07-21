import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { PropertyProvider } from './context/PropertyProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PropertyProvider><App /></PropertyProvider>
    </BrowserRouter>
  </StrictMode>,
)
