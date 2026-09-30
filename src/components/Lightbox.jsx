import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SafeImage from './SafeImage.jsx'

// images: string[], index: number|null, title: string
export default function Lightbox({ images, index, title, onClose, onChange }) {
  const open = index !== null
  const closeRef = useRef(null)
  const prev = () => onChange((index - 1 + images.length) % images.length)
  const next = () => onChange((index + 1) % images.length)

  useEffect(() => {
    if (!open) return
    const last = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.body.style.overflow = ''; last?.focus?.() }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index])

  const btn = 'absolute z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg2/80 text-ink hover:bg-white/10'
  return (
    <AnimatePresence>
      {open && (
        <motion.div role="dialog" aria-modal="true" aria-label={`${title} gallery`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 sm:p-10" onClick={onClose}>
          <button ref={closeRef} className={`${btn} right-4 top-4`} onClick={onClose} aria-label="Close gallery"><X size={20} /></button>
          {images.length > 1 && <>
            <button className={`${btn} left-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous image"><ChevronLeft /></button>
            <button className={`${btn} right-3 top-1/2 -translate-y-1/2`} onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next image"><ChevronRight /></button>
          </>}
          <motion.div key={index} initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="aspect-[16/10] max-h-full w-full max-w-5xl overflow-hidden rounded-xl" onClick={(e) => e.stopPropagation()}>
            <SafeImage src={images[index]} title={title} alt={`${title} screenshot ${index + 1} of ${images.length}`} eager imgClassName="!object-contain bg-black" />
          </motion.div>
          <p className="absolute bottom-4 text-sm text-mute" aria-live="polite">{index + 1} / {images.length}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
