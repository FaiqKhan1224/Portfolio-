import { techStrip } from '../data/content.js'

export default function TechStrip() {
  const items = [...techStrip, ...techStrip]
  return (
    <div className="overflow-hidden border-y border-line bg-bg2 py-5" aria-label="Technologies I work with">
      <ul className="marquee flex w-max gap-12 px-6">
        {items.map((t, i) => (
          <li key={i} aria-hidden={i >= techStrip.length} className="font-display text-sm font-medium tracking-[0.2em] text-mute">{t}</li>
        ))}
      </ul>
    </div>
  )
}
