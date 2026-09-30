import { stats } from '../data/content.js'
import Reveal from '../components/Reveal.jsx'

export default function Stats() {
  return (
    <section aria-label="Quick facts" className="border-y border-line bg-bg2 py-12">
      <dl className="wrap grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="flex flex-col-reverse">
            <dt className="mt-1 text-mute">{s.label}</dt>
            <dd className="font-display text-3xl font-bold sm:text-5xl">{s.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
