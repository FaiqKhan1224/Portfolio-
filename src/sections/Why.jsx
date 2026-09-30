import { why } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Why() {
  return (
    <section id="why" className="section" aria-labelledby="why-h">
      <div className="wrap">
        <SectionHeading title={<span id="why-h">More than just code.</span>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => <Reveal key={w.title} delay={i * 0.05}><ServiceCard {...w} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
