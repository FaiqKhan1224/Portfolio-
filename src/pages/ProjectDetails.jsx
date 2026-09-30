import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, ExternalLink, Github, Play } from 'lucide-react'
import projects from '../data/projects.js'
import Seo from '../components/Seo.jsx'
import SafeImage from '../components/SafeImage.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'

const Block = ({ title, children }) => (
  <Reveal as="section" className="border-t border-line py-10 sm:py-14">
    <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
    <div className="mt-4 max-w-3xl text-lg text-mute">{children}</div>
  </Reveal>
)

export default function ProjectDetails() {
  const { slug } = useParams()
  const [lb, setLb] = useState(null)
  const i = projects.findIndex((p) => p.slug === slug)
  const p = projects[i]

  if (!p) {
    return (
      <div className="wrap section pt-40 text-center">
        <Seo title="Project not found" />
        <h1 className="h-display text-4xl">Project not found</h1>
        <div className="mt-8"><Button to="/projects">Back to projects</Button></div>
      </div>
    )
  }
  const next = projects[(i + 1) % projects.length]

  return (
    <article className="wrap pb-20 pt-32 sm:pt-40">
      <Seo title={p.title} description={p.shortDescription} image={p.image} />
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-mute hover:text-ink"><ArrowLeft size={16} aria-hidden="true" />All projects</Link>
      <p className="text-accent">{p.category}</p>
      <h1 className="h-display mt-2 text-5xl sm:text-7xl">{p.title}</h1>
      <p className="mt-5 max-w-2xl text-xl text-mute">{p.shortDescription}</p>

      <div className="card mt-10 aspect-[16/9] overflow-hidden">
        <SafeImage src={p.image} title={p.title} alt={`${p.title} main screenshot`} eager />
      </div>

      <Block title="Overview"><p>{p.description}</p></Block>
      <Block title="The Challenge"><p>{p.challenge}</p></Block>
      <Block title="The Solution"><p>{p.solution}</p></Block>
      <Block title="Key Features">
        <ul className="grid gap-3 sm:grid-cols-2">{p.features.map((f) => <li key={f} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-cyan" aria-hidden="true" />{f}</li>)}</ul>
      </Block>
      <Block title="Technology Stack"><ul className="flex flex-wrap gap-2">{p.technologies.map((t) => <li key={t} className="badge !text-sm !text-ink">{t}</li>)}</ul></Block>

      {p.gallery?.length > 0 && (
        <Reveal as="section" className="border-t border-line py-10 sm:py-14">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Gallery</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.gallery.map((src, n) => (
              <li key={src}>
                <button onClick={() => setLb(n)} aria-label={`Open ${p.title} image ${n + 1} in full size`} className="group card block aspect-[16/10] w-full overflow-hidden transition-colors hover:border-accent/50">
                  <SafeImage src={src} title={p.title} alt={`${p.title} screenshot ${n + 1}`} imgClassName="transition-transform duration-500 group-hover:scale-105" />
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <Block title="My Role"><p>{p.role}</p></Block>
      {(p.liveDemo || p.github || p.video) && (
        <Block title="Project Links">
          <div className="flex flex-wrap gap-3">
            {p.liveDemo && <Button href={p.liveDemo}><ExternalLink size={16} aria-hidden="true" />Live Demo</Button>}
            {p.video && <Button href={p.video} variant="ghost"><Play size={16} aria-hidden="true" />Watch Demo Video</Button>}
            {p.github && <Button href={p.github} variant="ghost"><Github size={16} aria-hidden="true" />GitHub</Button>}
          </div>
        </Block>
      )}

      <Link to={`/projects/${next.slug}`} className="group card mt-6 flex items-center justify-between p-6 transition-colors hover:border-accent/50 sm:p-8">
        <span><span className="block text-sm text-mute">Next project</span><span className="font-display text-2xl font-bold sm:text-4xl">{next.title}</span></span>
        <span className="text-2xl transition-transform group-hover:translate-x-2" aria-hidden="true">→</span>
      </Link>

      <Lightbox images={p.gallery || []} index={lb} title={p.title} onClose={() => setLb(null)} onChange={setLb} />
    </article>
  )
}
