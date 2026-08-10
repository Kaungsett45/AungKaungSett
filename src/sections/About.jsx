import Section from '../component/Section'
import Reveal from '../component/Reveal'
import { profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" label="Intro">
      <Reveal>
        <div className="space-y-5 prose">
          {profile.about.map((paragraph, i) => (
            <p key={i} className={i === 0 ? 'text-ink' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
