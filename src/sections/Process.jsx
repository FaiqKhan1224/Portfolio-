import { process } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-h">
      <div className="wrap">
        <SectionHeading title={<span id="process-h">How I work</span>} />
        <ol className="relative ml-4 border-l border-line sm:ml-6">
          {process.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.04} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/60 bg-bg font-display text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-1 max-w-xl text-mute">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
