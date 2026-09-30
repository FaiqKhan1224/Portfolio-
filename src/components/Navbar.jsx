import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import site from '../data/site.js'
import { navItems } from '../data/content.js'
import Button from './Button.jsx'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Scroll-spy on the home page
  useEffect(() => {
    if (!isHome) return
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [isHome])

  const isActive = (n) => (isHome ? active === n.id : n.path !== '/' && !n.path.includes('#') && pathname.startsWith(n.path))

  const go = (e, n) => {
    if (isHome && document.getElementById(n.id)) {
      e.preventDefault()
      document.getElementById(n.id).scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    } else if (n.id === 'hero') {
      return
    } else {
      e.preventDefault()
      navigate(n.path.startsWith('/#') ? n.path : n.path)
    }
  }

  const links = navItems.map((n) => (
    <Link key={n.id} to={n.path} onClick={(e) => go(e, n)} aria-current={isActive(n) ? 'page' : undefined}
      className={`relative py-2 text-sm transition-colors hover:text-ink ${isActive(n) ? 'text-ink' : 'text-mute'}`}>
      {n.label}
      {isActive(n) && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-accent" />}
    </Link>
  ))

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent'}`}>
      <nav aria-label="Main" className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-wide" aria-label={`${site.name} home`}>
          {site.brand}<span className="text-accent">.</span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">{links}</div>
        <div className="hidden lg:block"><Button href="#contact" onClick={(e) => { if (!isHome) { e.preventDefault(); navigate('/contact') } }} className="!py-2">Let's Talk</Button></div>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-line lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line lg:hidden">
            <div className="wrap flex flex-col gap-1 py-4 [&_a]:py-3 [&_a]:text-base">{links}
              <Button to="/contact" className="mt-3">Let's Talk</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
