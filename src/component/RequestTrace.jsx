/**
 * Compact "how it works" trace: one real request followed through every
 * layer, in place of a screenshot. Reuses the stack-diagram rail so it
 * sits visually alongside projects that show an architecture diagram.
 */
export default function RequestTrace({ intro, stages }) {
  if (!stages?.length) return null

  return (
    <figure className="m-0 request-trace">
      {intro && <figcaption className="request-trace-intro">{intro}</figcaption>}
      <ol className="p-0 mt-3 m-0 list-none stack-diagram">
        {stages.map((stage) => (
          <li key={`${stage.layer}-${stage.title}`} className="stack-tier">
            <p className="eyebrow eyebrow-quiet">
              {stage.layer}
              {stage.tech && <span className="request-trace-tech"> · {stage.tech}</span>}
            </p>
            <p className="mt-1 request-trace-title">{stage.title}</p>
            {stage.code && <code className="request-trace-code">{stage.code}</code>}
          </li>
        ))}
      </ol>
    </figure>
  )
}
