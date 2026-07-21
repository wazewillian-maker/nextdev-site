import { Building2 } from 'lucide-react'

export function Logo({ light = false }: { light?: boolean }) {
  return <span className={`logo ${light ? 'logo--light' : ''}`} aria-label="Prime Imóveis SC"><span className="logo__icon"><Building2 size={22} /></span><span><strong>PRIME</strong><small>IMÓVEIS SC</small></span></span>
}
