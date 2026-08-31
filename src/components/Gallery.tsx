import { galleryImages } from "../data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-off-white px-5 pt-[42px] pb-10 sm:px-9 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 md:grid-cols-[285px_1fr]">
        <div>
          <p className="m-0 flex items-center gap-2 text-[10px] leading-[1.2] font-bold tracking-[0.12em] text-gold uppercase before:block before:h-px before:w-5 before:bg-gold">
            Gallery
          </p>
          <h2
            id="gallery-title"
            className="mt-5 font-display text-[clamp(28px,3vw,34px)] leading-[1.05] font-medium text-navy-deep"
          >
            A Glimpse of Paradise
          </h2>
          <p className="mt-4 text-xs leading-[1.5] text-text-muted">
            See the beauty, feel the calm.
          </p>
          <a
            href="#gallery-full"
            className="mt-6 inline-flex h-[41px] min-w-[176px] items-center justify-center bg-navy-deep text-[10px] font-bold tracking-[0.06em] !text-white uppercase"
          >
            View Full Gallery
          </a>
        </div>

        <ul className="grid grid-cols-4 gap-[9px]">
          {galleryImages.map((img) => (
            <li key={img.alt} className="h-[216px] overflow-hidden rounded-[7px] bg-white">
              <PhotoPlaceholder alt={img.alt} ratio="3 / 4" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
