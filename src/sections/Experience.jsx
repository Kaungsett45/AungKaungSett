import Section from '../component/Section'
import Reveal from '../component/Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" label="Experiences" align="right">
      {experience.length === 0 ? (
        <p className="prose text-ink-faint">Nothing listed yet.</p>
      ) : (
        <ol className="grid grid-cols-1 gap-12 p-0 m-0 list-none">
          {experience.map((job, i) => (
            <li key={`${job.org}-${job.role}`}>
              <Reveal delay={i * 0.06}>
                <article>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <div className="min-w-0">
                      {job.logo && (
                        <img
                          src={job.logo}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          style={{ '--logo-h': job.logoHeight }}
                          className="mb-4 org-logo"
                        />
                      )}

                      <h3 className="title">{job.org}</h3>
                      <p className="mt-1 font-medium text-accent text-meta">
                        {job.role}
                      </p>
                    </div>

                    <span className="meta shrink-0">
                      {job.from} — {job.to ?? 'Present'}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 prose">
                        <span aria-hidden="true" className="text-[var(--brand)] pt-[0.6em] shrink-0">
                          <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor">
                            <circle cx="2.5" cy="2.5" r="2.5" />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      )}
    </Section>
  )
}
