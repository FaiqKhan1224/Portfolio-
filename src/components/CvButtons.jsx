import { useEffect, useState } from 'react'
import { Download, FileText } from 'lucide-react'
import site from '../data/site.js'

// Shows CV buttons only when the PDF really exists in /public (so no dead links).
export default function CvButtons({ className = '' }) {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    fetch(site.cv, { method: 'HEAD' })
      .then((r) => setOk(r.ok && (r.headers.get('content-type') || '').includes('pdf')))
      .catch(() => setOk(false))
  }, [])
  if (!ok) return null
  const cls = 'inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold text-ink transition-colors hover:border-white/25 hover:bg-white/5'
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={site.cv} target="_blank" rel="noreferrer noopener" className={cls}><FileText size={16} aria-hidden="true" />View CV</a>
      <a href={site.cv} download className={cls}><Download size={16} aria-hidden="true" />Download CV</a>
    </div>
  )
}
