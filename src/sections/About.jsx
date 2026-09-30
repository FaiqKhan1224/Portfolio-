import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import site from '../data/site.js'
import { aboutPoints } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import CvButtons from '../components/CvButtons.jsx'

export default function About({ standalone = false }) {
  return (
    <section id="about" className={`section ${standalone ? 'pt-36' : ''}`} aria-labelledby="about-h">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading title={<span id="about-h">A developer who builds with purpose.</span>} />
          <Reveal className="max-w-2xl space-y-4 text-lg text-mute">
            <p>I'm a Software Engineering student and Full-Stack Web Developer focused on building modern web applications for real businesses, from online stores and booking platforms to admin dashboards and AI-assisted tools.</p>
            <p>I care about clean interfaces, organized code and solutions that fit the way a business actually works.</p>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap items-center gap-3"><Button to="/contact" variant="ghost">Work with me</Button><CvButtons /></Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="card p-7">
            <p className="font-display text-2xl font-bold">{site.name}</p>
            <p className="text-mute">{site.title} · {site.location}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-mute"><Check size={16} className="shrink-0 text-cyan" aria-hidden="true" />{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
