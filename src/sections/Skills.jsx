import Section from '../component/Section'
import Reveal from '../component/Reveal'
import { skills, techIcons } from '../data/content'

export default function Skills() {
  // Rendered twice — the CSS scrolls the track by exactly -50%, so the
  // second copy is what makes the loop seamless.
  const track = [...techIcons, ...techIcons]

  return (
    <Section id="skills" label="Skill Sets">
      <Reveal>
        <div className="py-2">
          <div className="marquee">
            <div className="marquee-track">
              {track.map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="skill-icon"
                  title={tech.name}
                  aria-hidden={i >= techIcons.length}
                >
                  <img
                    src={tech.src}
                    alt={i < techIcons.length ? tech.name : ''}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <dl className="grid grid-cols-1 gap-x-10 gap-y-6 mt-10 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <dt className="mb-3 eyebrow">
                {group.group}
              </dt>
              <dd className="flex flex-wrap gap-2 m-0">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
