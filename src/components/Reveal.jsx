import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay, ease: 'easeOut' }}>
      {children}
    </M>
  )
}
