import { Quote } from 'lucide-react'
import { expect, testimonials } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

// Shows real testimonials if you add them in content.js, otherwise "What you can expect".
export default function Expect() {
  const hasTestimonials = testimonials.length > 0
  return (
    <section id="expect" className="section bg-bg2" aria-labelledby="expect-h">
      <div className="wrap">
        <SectionHeading title={<span id="expect-h">{hasTestimonials ? 'Client feedback' : 'What you can expect'}</span>} />
        {hasTestimonials ? (
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <Reveal key={t.name}><figure className="card p-7"><Quote className="mb-3 text-accent" aria-hidden="true" />
                <blockquote className="text-lg">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-mute">{t.name}, {t.role}</figcaption></figure></Reveal>
            ))}
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expect.map(({ icon: Icon, title }, i) => (
              <Reveal as="li" key={title} delay={i * 0.04} className="card flex items-center gap-4 p-5">
                <Icon size={20} className="text-cyan" aria-hidden="true" /><span className="font-medium">{title}</span>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
