import { useState, type ImgHTMLAttributes } from 'react'
import { ImageOff } from 'lucide-react'

export function ImageWithSkeleton({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  return <span className={`image-loader ${loaded || failed ? 'is-loaded' : ''} ${className}`}><span className="image-skeleton" aria-hidden="true" />{failed ? <span className="image-fallback" role="img" aria-label={props.alt || 'Imagem indisponível'}><ImageOff /><small>Imagem indisponível</small></span> : <img {...props} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}</span>
}
