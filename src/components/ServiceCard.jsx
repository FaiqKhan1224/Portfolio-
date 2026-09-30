export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <div className="group card h-full p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/5 text-cyan transition-colors group-hover:border-accent/50">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-mute">{text}</p>
    </div>
  )
}
