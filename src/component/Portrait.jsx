import { profile } from '../data/content'

/**
 * Head-and-shoulders crop taken out of a much wider original.
 *
 * `object-fit` alone can only crop to the container's aspect ratio — it
 * cannot zoom past that, and the source here is a full standing shot in
 * a landscape frame. So this scales the image up (`photoZoom`) and then
 * slides it until the face lands in the window (`photoPosition`). Both
 * values live in content.js so the framing is tunable without touching
 * this file.
 */
export default function Portrait({ className = '' }) {
  return (
    <div
      role="img"
      aria-label={profile.name}
      className={`bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${profile.photo})`,
        backgroundSize: profile.photoZoom,
        backgroundPosition: profile.photoPosition,
      }}
    />
  )
}
