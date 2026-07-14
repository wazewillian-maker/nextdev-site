type Props = { tag: string; title: string; accent: string; description: string; align?: 'left' | 'center' }

export function SectionHeader({ tag, title, accent, description, align = 'left' }: Props) {
  return <div className={`section-header ${align}`}><span className="section-tag">{tag}</span><h2>{title} <em>{accent}</em></h2><p>{description}</p></div>
}
