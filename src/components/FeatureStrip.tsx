import { featureItems } from "../data/content";
import {
  DiningIcon,
  EventsIcon,
  ExperiencesIcon,
  ExpertIcon,
  LakesideIcon,
  PremiumStayIcon,
} from "./icons";

const iconMap = {
  lakeside: LakesideIcon,
  premium: PremiumStayIcon,
  dining: DiningIcon,
  experiences: ExperiencesIcon,
  events: EventsIcon,
  expert: ExpertIcon,
};

export function FeatureStrip() {
  return (
    <section
      id="about"
      aria-labelledby="feature-strip-title"
      className="bg-white px-5 pt-[42px] pb-[65px] text-center sm:px-8 lg:px-[52px]"
    >
      {/* TOP LABEL */}
      <p className="m-0 flex items-center justify-center gap-3 font-sans text-[10px] leading-none font-bold tracking-[0.16em] text-gold uppercase">
        <span className="h-px w-[24px] bg-gold" />
        The Blue Lake Experience
        <span className="h-px w-[24px] bg-gold" />
      </p>

      {/* HEADING */}
      <h2
        id="feature-strip-title"
        className="mt-[16px] font-sans text-[34px] leading-[1.1] font-semibold text-navy-deep"
      >
        Nature. Comfort. Connection.
      </h2>

      {/* SUBTITLE */}
      <p className="mt-[10px] font-sans text-[13px] leading-[1.5] text-text-muted">
        Everything you need for a perfect escape.
      </p>

      {/* FEATURES */}
      <ul className="mt-[55px] grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
        {featureItems.map((item, i) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <li
              key={item.title}
              className={`
                relative
                flex
                min-h-[185px]
                flex-col
                items-center
                px-[18px]
                text-center

                ${i !== featureItems.length - 1
                  ? "border-b border-[rgba(11,37,69,0.10)] sm:border-b-0 sm:border-r"
                  : ""}
              `}
            >
              {/* ICON */}
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center">
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="h-[58px] w-[58px] text-navy-deep"
                  />
                )}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-[16px]
                  min-h-[24px]
                  w-full
                  font-sans
                  text-[11px]
                  leading-[1.25]
                  font-bold
                  tracking-[0.07em]
                  text-navy-deep
                  uppercase
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-[9px]
                  min-h-[55px]
                  max-w-[165px]
                  font-sans
                  text-[12px]
                  leading-[1.55]
                  text-text-muted
                "
              >
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}