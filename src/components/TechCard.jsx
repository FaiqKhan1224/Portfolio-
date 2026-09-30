export default function TechCard({ category, items }) {
  return (
    <div className="card p-6">
      <h3 className="mb-4 font-display text-lg font-bold">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((t) => (
          <li key={t} className="cursor-default rounded-lg border border-line bg-white/5 px-3.5 py-2 text-sm text-mute transition duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:text-ink">{t}</li>
        ))}
      </ul>
    </div>
  )
}
