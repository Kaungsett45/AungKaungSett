import Reveal from '../component/Reveal'
import Section from '../component/Section'
import { contact, profile, socials } from '../data/content'

export default function SiteFooter() {
  const links = [
    ...socials.filter((s) => !s.href.startsWith('mailto:')),
    ...contact.extra,
  ]

  return (
    <>
      <Section id="contact" label="Contact">
        <Reveal>
          {/* No preamble — the email is the message. */}
          <a
            href={`mailto:${contact.email}`}
            className="block font-display font-bold text-ink hover:text-accent transition-colors leading-[1.1] tracking-tight text-[clamp(1.6rem,1rem+3.4vw,3.4rem)] break-words"
          >
            {contact.email}
          </a>

          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="inline-block mt-4 transition-colors meta hover:text-accent"
          >
            {contact.phone}
          </a>

          <ul className="flex flex-wrap gap-3 p-0 m-0 mt-10 list-none">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="button"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-8 pb-10 mt-24">
        <p className="meta">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="transition-colors meta hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </>
  )
}
