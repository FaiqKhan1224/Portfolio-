import Reveal from './Reveal.jsx'

export default function SectionHeading({ title, sub, className = '' }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${className}`}>
      <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-lg text-mute">{sub}</p>}
    </Reveal>
  )
}
