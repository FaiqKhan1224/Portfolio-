import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Button({ to, href, variant = 'primary', arrow = true, className = '', children, ...rest }) {
  const cls = `group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
    variant === 'primary' ? 'bg-accent text-white hover:bg-[#8d70ff]' : 'border border-line text-ink hover:border-white/25 hover:bg-white/5'
  } ${className}`
  const inner = (<>{children}{arrow && <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />}</>)
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href?.startsWith('#')) return <a href={href} className={cls} {...rest}>{inner}</a>
  if (href) return <a href={href} target="_blank" rel="noreferrer noopener" className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
