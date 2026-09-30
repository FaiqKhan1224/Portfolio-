export default function ProjectFilter({ filters, active, onChange }) {
  return (
    <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
      {filters.map((f) => (
        <button key={f} onClick={() => onChange(f)} aria-pressed={active === f}
          className={`min-h-[40px] rounded-full border px-5 text-sm transition-colors ${active === f ? 'border-accent bg-accent text-white' : 'border-line text-mute hover:border-white/25 hover:text-ink'}`}>
          {f}
        </button>
      ))}
    </div>
  )
}
