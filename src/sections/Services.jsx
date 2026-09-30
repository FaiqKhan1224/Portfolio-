import { services } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Services({ standalone = false }) {
  return (
    <section id="services" className={`section bg-bg2 ${standalone ? 'pt-36' : ''}`} aria-labelledby="services-h">
      <div className="wrap">
        <SectionHeading title={<span id="services-h">What I can build for you</span>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <Reveal key={s.title} delay={i * 0.05}><ServiceCard {...s} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
