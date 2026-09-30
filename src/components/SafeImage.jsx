import { useState } from 'react'

// Shows a premium placeholder instead of a broken image when the file is missing.
export default function SafeImage({ src, alt, title, label = 'Project Preview', className = '', imgClassName = '', eager = false, ...rest }) {
  const [failed, setFailed] = useState(!src)
  if (failed) {
    return (
      <div role="img" aria-label={alt || `${title} preview`}
        className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-card via-bg2 to-card p-6 text-center ${className}`}>
        <span className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</span>
        <span className="text-xs uppercase tracking-widest text-mute">{label}</span>
      </div>
    )
  }
  return (
    <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width="1280" height="800"
      onError={() => setFailed(true)} className={`h-full w-full object-cover ${imgClassName}`} {...rest} />
  )
}
