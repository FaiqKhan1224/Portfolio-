import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'
import site from '../data/site.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Reveal from '../components/Reveal.jsx'

const links = [
  ['Email', site.email, `mailto:${site.email}`, Mail],
  ['GitHub', 'View profile', site.github, Github],
  ['LinkedIn', 'View profile', site.linkedin, Linkedin],
  ['WhatsApp', 'Send a message', site.whatsapp, MessageCircle],
]

export default function Contact({ standalone = false }) {
  return (
    <section id="contact" className={`section ${standalone ? 'pt-36' : ''}`} aria-labelledby="contact-h">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading title={<span id="contact-h">Have an idea? Let's build it.</span>} sub="Tell me what you're trying to build and let's turn the idea into a real digital product." />
          <ul className="space-y-3">
            {links.map(([label, text, href, Icon]) => (
              <li key={label}>
                <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer noopener"
                  className="group card flex min-h-[56px] items-center gap-4 p-4 transition-colors hover:border-accent/50">
                  <Icon size={20} className="shrink-0 text-cyan" aria-hidden="true" />
                  <span className="min-w-0"><span className="block text-sm text-mute">{label}</span><span className="block truncate">{text}</span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </section>
  )
}
