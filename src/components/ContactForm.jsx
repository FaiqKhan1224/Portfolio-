import { useState } from 'react'
import site from '../data/site.js'
import Button from './Button.jsx'

const types = ['Full-Stack Web App', 'Business Website', 'E-commerce Store', 'AI Integration', 'Admin Dashboard', 'Other']
const field = 'w-full rounded-xl border border-line bg-bg2 px-4 py-3 text-ink placeholder:text-mute/60 focus:border-accent'

// Two modes (see site.js -> formEndpoint):
//  - empty endpoint: opens the visitor's email app with a pre-filled message (mailto:)
//  - Formspree-style endpoint: POSTs JSON and reports the real result
export default function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  async function onSubmit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    if (!site.formEndpoint) {
      const body = `Name: ${d.name}\nEmail: ${d.email}\nProject type: ${d.type}\n\n${d.message}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry: ${d.type}`)}&body=${encodeURIComponent(body)}`
      setStatus({ state: 'info', msg: 'Your email app should open with the message ready to send. Nothing is sent until you press send there.' })
      return
    }
    setStatus({ state: 'loading', msg: '' })
    try {
      const res = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
      if (!res.ok) throw new Error()
      e.currentTarget.reset()
      setStatus({ state: 'success', msg: 'Message sent. I will get back to you soon.' })
    } catch {
      setStatus({ state: 'error', msg: `Something went wrong. Please email ${site.email} directly.` })
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">Name<input required name="name" autoComplete="name" className={`${field} mt-2`} placeholder="Your name" /></label>
        <label className="block text-sm">Email<input required type="email" name="email" autoComplete="email" className={`${field} mt-2`} placeholder="you@company.com" /></label>
      </div>
      <label className="block text-sm">Project Type
        <select name="type" className={`${field} mt-2`} defaultValue={types[0]}>{types.map((t) => <option key={t}>{t}</option>)}</select>
      </label>
      <label className="block text-sm">Message<textarea required name="message" rows={5} className={`${field} mt-2 resize-y`} placeholder="Tell me about your project..." /></label>
      <Button type="submit" disabled={status.state === 'loading'}>{status.state === 'loading' ? 'Sending...' : 'Send Message'}</Button>
      {status.msg && <p role="status" className={`text-sm ${status.state === 'error' ? 'text-red-400' : 'text-mute'}`}>{status.msg}</p>}
    </form>
  )
}
