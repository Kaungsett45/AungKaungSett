import Reveal from './Reveal'
import star from '/star.svg'
import { motion } from 'framer-motion'

/**
 * The shell every section shares: the gradient heading and a slowly
 * turning star. Sections are separated by space alone — no rules.
 *
 * `align="right"` mirrors the heading, the way the old Experience
 * section did.
 */
export default function Section({ id, label, children, align = 'left' }) {
  return (
    <section id={id} className="relative scroll-mt-24 pt-section">
      <Reveal>
        <div
          className={`flex items-center gap-3 ${
            align === 'right' ? 'justify-end' : ''
          }`}
        >
          <h2 className="heading-brand">{label}</h2>
          <motion.img
            src={star}
            alt=""
            aria-hidden="true"
            className="w-3.5 opacity-50 shrink-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </Reveal>

      <div className="mt-8">{children}</div>
    </section>
  )
}
