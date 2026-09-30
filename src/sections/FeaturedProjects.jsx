import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import projects from '../data/projects.js'
import { projectFilters } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectFilter from '../components/ProjectFilter.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Button from '../components/Button.jsx'

export default function FeaturedProjects({ standalone = false }) {
  const [filter, setFilter] = useState('All')
  const list = useMemo(() => {
    const base = standalone ? projects : projects.filter((p) => p.featured)
    return filter === 'All' ? base : base.filter((p) => p.filters.includes(filter))
  }, [filter, standalone])

  return (
    <section id="work" className={`section ${standalone ? 'pt-36' : ''}`} aria-labelledby="work-h">
      <div className="wrap">
        <SectionHeading title={<span id="work-h">Selected work</span>} sub="A selection of digital products and applications I've designed and developed." />
        <ProjectFilter filters={projectFilters} active={filter} onChange={setFilter} />
        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </AnimatePresence>
        </div>
        {!standalone && projects.some((p) => !p.featured) && (
          <div className="mt-12 text-center"><Button to="/projects" variant="ghost">View all projects</Button></div>
        )}
        {list.length === 0 && <p className="text-mute">No projects in this category yet.</p>}
      </div>
    </section>
  )
}
