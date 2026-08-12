import Section from '../component/Section'
import Reveal from '../component/Reveal'
import StackDiagram from '../component/StackDiagram'
import RequestTrace from '../component/RequestTrace'
import { projects } from '../data/content'

function ExternalLink({ href, children }) {
  return (
    <a
      className="inline-flex items-center gap-1.5 text-meta text-ink-faint hover:text-accent transition-colors"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="link-wipe">{children}</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  )
}

export default function Projects() {
  return (
    <Section id="work" label="Featured Projects">
      <ol className="grid grid-cols-1 p-0 m-0 list-none gap-y-24 md:gap-y-32">
        {projects.map((project, i) => {
          // Every second project puts the mockup on the left instead.
          const flipped = i % 2 === 1

          return (
            <li key={project.title}>
              <Reveal>
                <article className="grid items-center gap-8 project md:grid-cols-2 md:gap-16">
                  <div className={flipped ? 'md:order-2' : undefined}>
                    <span className="project-number" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-baseline justify-between gap-4 mt-5">
                      <h3 className="title">{project.title}</h3>
                      <span className="meta shrink-0">{project.year}</span>
                    </div>

                    <span className="project-title-rule" aria-hidden="true" />

                    <p className="mt-5 prose">{project.description}</p>

                    <div className="flex flex-wrap items-center gap-2 mt-6">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center mt-7 gap-x-6 gap-y-2">
                      {project.code && (
                        <ExternalLink href={project.code}>View code</ExternalLink>
                      )}
                      {project.demo && (
                        <ExternalLink href={project.demo}>Live demo</ExternalLink>
                      )}
                    </div>
                  </div>

                  <div className={flipped ? 'md:order-1' : undefined}>
                    {project.buildFlow ? (
                      <RequestTrace
                        intro={project.buildFlow.intro}
                        stages={project.buildFlow.stages}
                      />
                    ) : (
                      <div className="flex items-start justify-between gap-6">
                        <StackDiagram tiers={project.architecture} />

                        {project.image && (
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            className="object-contain w-20 h-20 project-mockup shrink-0 md:w-24 md:h-24"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
