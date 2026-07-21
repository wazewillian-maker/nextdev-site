import { useMemo, useState, type ReactNode } from 'react'
import { initialFilters, PropertyContext } from './property-context'

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState(initialFilters)
  const [favorites, setFavorites] = useState<number[]>(() => {
    try { const saved: unknown = JSON.parse(localStorage.getItem('prime-favorites') ?? '[]'); return Array.isArray(saved) && saved.every((item) => typeof item === 'number') ? saved : [] } catch { return [] }
  })
  const toggleFavorite = (id: number) => setFavorites((current) => {
    const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    localStorage.setItem('prime-favorites', JSON.stringify(next)); return next
  })
  const value = useMemo(() => ({ filters, setFilters, clearFilters: () => setFilters(initialFilters), favorites, toggleFavorite }), [filters, favorites])
  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>
}
