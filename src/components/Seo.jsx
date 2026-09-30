import { useEffect } from 'react'
import site from '../data/site.js'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, image }) {
  useEffect(() => {
    const t = title ? `${title} | ${site.name}` : site.seo.title
    const d = description || site.seo.description
    const img = site.url + (image || site.seo.ogImage)
    document.title = t
    setMeta('name', 'description', d)
    setMeta('property', 'og:title', t)
    setMeta('property', 'og:description', d)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:url', site.url + window.location.pathname)
    setMeta('name', 'twitter:title', t)
    setMeta('name', 'twitter:description', d)
    setMeta('name', 'twitter:image', img)
  }, [title, description, image])
  return null
}
