/**
 * Vertical architecture diagram: one tier per row, hung off a teal rail.
 *
 * Renders whatever tiers it is given, so a two-tier project and a
 * four-tier one both work without touching this file.
 */
export default function StackDiagram({ tiers }) {
  if (!tiers?.length) return null

  return (
    <figure className="m-0 stack-diagram">
      {tiers.map((tier) => (
        <div key={tier.tier} className="stack-tier">
          <p className="eyebrow eyebrow-quiet">{tier.tier}</p>
          <div className="flex flex-wrap gap-2 mt-2.5">
            {tier.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </figure>
  )
}
