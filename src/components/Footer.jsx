import { Link } from 'react-router-dom'
import { ArrowUp, Github, Linkedin, MessageCircle } from 'lucide-react'
import site from '../data/site.js'

const nav = [['Home', '/'], ['About', '/about'], ['Work', '/projects'], ['Services', '/services'], ['Contact', '/contact']]
const social = [['GitHub', site.github, Github], ['LinkedIn', site.linkedin, Linkedin], ['WhatsApp', site.whatsapp, MessageCircle]]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold">{site.brand}<span className="text-accent">.</span></p>
          <p className="mt-3 max-w-xs text-mute">{site.title} building modern digital experiences.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-3 text-sm font-semibold">Navigation</h2>
          <ul className="space-y-2 text-mute">{nav.map(([l, to]) => <li key={l}><Link className="hover:text-ink" to={to}>{l}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="mb-3 text-sm font-semibold">Social</h2>
          <ul className="space-y-2 text-mute">
            {social.map(([l, href, Icon]) => (
              <li key={l}><a className="inline-flex items-center gap-2 hover:text-ink" href={href} target="_blank" rel="noreferrer noopener"><Icon size={16} aria-hidden="true" />{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap flex items-center justify-between border-t border-line py-6 text-sm text-mute">
        <p>© 2026 {site.name}. All rights reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:border-white/25 hover:text-ink">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  )
}
