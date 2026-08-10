import { motion } from 'framer-motion'

/**
 * Fades content up as it scrolls into view, once.
 *
 * Motion here is deliberately small — 12px and 500ms. In an editorial
 * layout the type does the work; animation that draws attention to
 * itself competes with it.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
