import { createContext } from 'react'

export type PropertyFilters = { purpose: 'venda' | 'locacao-mensal' | 'temporada'; neighborhood: string; bedrooms: string; type: string; price: string }
export const initialFilters: PropertyFilters = { purpose: 'venda', neighborhood: 'Todos os bairros', bedrooms: 'Qualquer quantidade', type: 'Todos', price: 'Qualquer valor' }
export type PropertyContextValue = { filters: PropertyFilters; setFilters: (filters: PropertyFilters) => void; clearFilters: () => void; favorites: number[]; toggleFavorite: (id: number) => void }
export const PropertyContext = createContext<PropertyContextValue | null>(null)
