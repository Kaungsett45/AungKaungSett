import { motion } from 'framer-motion'
import { profile } from '../data/content'
import Portrait from '../component/Portrait'

/**
 * A brief hold on the name, then out of the way. The parent owns the
 * timing — this component only draws.
 */
export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid bg-paper place-items-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-hidden="true"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Portrait className="w-12 h-12 mx-auto mb-6" />
        </motion.div>

        <motion.p
          className="font-display text-[clamp(2rem,7vw,3.25rem)] leading-none text-ink"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.name}
        </motion.p>

        <motion.div
          className="h-px mx-auto mt-5 origin-left bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: 'clamp(140px, 30vw, 240px)' }}
        />

        <motion.p
          className="mt-4 eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          {profile.role}
        </motion.p>
      </div>
    </motion.div>
  )
}
