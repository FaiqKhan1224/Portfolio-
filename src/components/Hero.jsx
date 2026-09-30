import { motion } from 'framer-motion'
import site from '../data/site.js'
import Button from './Button.jsx'
import CvButtons from './CvButtons.jsx'
import SafeImage from './SafeImage.jsx'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="wrap grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          {site.available && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-sm text-mute">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" /> Available for freelance projects
            </motion.p>
          )}
          <h1 className="h-display text-[2.6rem] leading-[1] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
            {['Building digital products', 'that turn ideas', 'into reality.'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>{line}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-7 max-w-xl text-lg text-mute">
            {site.title} specializing in modern web applications, MERN development, AI integration, e-commerce and custom digital products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-9 flex flex-wrap gap-3">
            <Button href="#work">View My Work</Button>
            <Button href="#contact" variant="ghost">Let's Work Together</Button>
          </motion.div>
          <CvButtons className="mt-4" />
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative mx-auto w-full max-w-sm px-4 sm:px-0" >
          <div className="card overflow-hidden shadow-2xl shadow-black/50">
            <div className="aspect-[4/5] w-full bg-bg2">
              <SafeImage src={site.photo} title={site.name} label="Profile Photo" alt={`Portrait of ${site.name}`} eager imgClassName="object-top" />
            </div>
            <div className="border-t border-line p-5">
              <p className="font-display text-xl font-bold">{site.name}</p>
              <p className="text-sm text-mute">{site.title} · {site.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
