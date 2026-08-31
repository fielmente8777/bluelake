/**
 * PhotoPlaceholder
 * ------------------------------------------------------------------
 * The reference design is built entirely around proprietary resort
 * photography (drone shots of the property, room interiors, guest
 * activity photos). Those images can't be extracted from a screenshot,
 * so every photo slot in this build renders as a labeled placeholder
 * at the EXACT crop ratio and position used in the reference layout.
 *
 * To go live: pass a real `src`. The label/caption disappears
 * automatically once a src is provided, and object-fit/position are
 * preserved so the real photo will crop identically to the reference.
 * ------------------------------------------------------------------
 */

interface PhotoPlaceholderProps {
  src?: string;
  alt: string;
  ratio?: string; // e.g. "16 / 9"
  objectPosition?: string;
  className?: string;
}

export function PhotoPlaceholder({
  src,
  alt,
  ratio = "4 / 3",
  objectPosition = "center",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[linear-gradient(135deg,#cfd9df_0%,#a9c1c9_45%,#7f9aa3_100%)] ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={alt}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-white/35 px-3 py-2 text-center text-[11px] leading-[1.4] tracking-[0.02em] text-[rgba(11,37,69,0.65)]"
        >
          {alt}
        </span>
      )}
    </div>
  );
}
