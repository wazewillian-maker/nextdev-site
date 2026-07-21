import { useContext } from 'react'
import { PropertyContext } from './property-context'

export function useProperties() {
  const context = useContext(PropertyContext)
  if (!context) throw new Error('useProperties deve ser usado dentro de PropertyProvider')
  return context
}
