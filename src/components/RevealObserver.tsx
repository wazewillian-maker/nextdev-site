import { useEffect } from 'react'

export function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return null
}
