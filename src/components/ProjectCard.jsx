import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, ExternalLink, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import SafeImage from './SafeImage.jsx'

const small = 'inline-flex min-h-[40px] items-center gap-2 rounded-full border border-line px-4 text-sm text-mute transition hover:border-white/25 hover:text-ink'

export default function ProjectCard({ project: p, index }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="group card overflow-hidden transition-colors duration-300 hover:border-accent/50">
      <Link to={`/projects/${p.slug}`} className="block aspect-[16/10] overflow-hidden bg-bg2" aria-label={`View case study: ${p.title}`} tabIndex={-1}>
        <SafeImage src={p.image} title={p.title} alt={`${p.title} project screenshot`} imgClassName="transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between text-sm text-mute">
          <span className="font-display text-accent">{String(index + 1).padStart(2, '0')}</span>
          <span>{p.category}</span>
        </div>
        <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          <Link to={`/projects/${p.slug}`} className="inline-flex items-center gap-2 hover:text-accent">
            {p.title}
            <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </h3>
        <p className="mt-3 text-mute">{p.shortDescription}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">{p.technologies.map((t) => <li key={t} className="badge">{t}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={`/projects/${p.slug}`} className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white hover:bg-[#8d70ff]">View Case Study</Link>
          {p.liveDemo && <a className={small} href={p.liveDemo} target="_blank" rel="noreferrer noopener"><ExternalLink size={14} aria-hidden="true" />Live Demo</a>}
          {p.video && <a className={small} href={p.video} target="_blank" rel="noreferrer noopener"><Play size={14} aria-hidden="true" />Watch Video</a>}
          {p.github && <a className={small} href={p.github} target="_blank" rel="noreferrer noopener"><Github size={14} aria-hidden="true" />GitHub</a>}
        </div>
      </div>
    </motion.article>
  )
}
