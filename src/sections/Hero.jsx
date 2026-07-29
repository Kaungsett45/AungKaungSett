import { motion } from 'framer-motion'
import { profile, socials } from '../data/content'
import Portrait from '../component/Portrait'
import star from '/star.svg'

// One shared entrance: each child fades up 16px, staggered by 80ms.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-12 md:pt-20"
    >
      {/* Type-led. The photo is a small identifying mark next to the role
          line, not the focal point — the name carries the section. */}
      <motion.div variants={item} className="flex items-center gap-4">
        <Portrait className="w-14 h-14 shrink-0 sm:w-16 sm:h-16" />

        <div className="min-w-0">
          <p className="eyebrow">{profile.role}</p>
          <p className="mt-1 meta">{profile.location}</p>
        </div>

        <motion.img
          src={star}
          alt=""
          aria-hidden="true"
          className="w-3 opacity-40 shrink-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.h1 variants={item} className="mt-8 display">
        {profile.name}
      </motion.h1>

      <motion.p variants={item} className="mt-7 lede max-w-[34ch]">
        {profile.lede}
      </motion.p>

      <motion.div
        variants={item}
        className="flex flex-wrap items-center mt-10 gap-x-3 gap-y-3"
      >
        <a
          className="button button-brand"
          href={profile.resume}
          target="_blank"
          rel="noreferrer noopener"
        >
          Résumé
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>

        {socials.map((s) => (
          <a
            key={s.label}
            className="button"
            href={s.href}
            target={s.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer noopener"
          >
            {s.label}
          </a>
        ))}
      </motion.div>
    </motion.header>
  )
}
