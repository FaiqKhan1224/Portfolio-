import { techStack } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import TechCard from '../components/TechCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function TechStack() {
  return (
    <section id="skills" className="section bg-bg2" aria-labelledby="skills-h">
      <div className="wrap">
        <SectionHeading title={<span id="skills-h">Tools I use to build</span>} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((g, i) => <Reveal key={g.category} delay={i * 0.05}><TechCard {...g} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
