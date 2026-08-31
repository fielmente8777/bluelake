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
      className="bg-white px-5 pt-[34px] pb-[58px] text-center sm:px-8"
    >
      {/* TOP LABEL */}
      <p className="m-0 flex items-center justify-center gap-2 text-[9px] leading-none font-bold tracking-[0.14em] text-gold uppercase">
        <span className="h-px w-5 bg-gold" />
        The Blue Lake Experience
        <span className="h-px w-5 bg-gold" />
      </p>

      {/* HEADING */}
      <h2
        id="feature-strip-title"
        className="mt-[15px] font-display text-[32px] leading-[1.1] font-medium text-navy-deep sm:text-[34px]"
      >
        Nature. Comfort. Connection.
      </h2>

      {/* SUBTITLE */}
      <p className="mt-[9px] text-[12px] leading-[1.4] text-text-muted">
        Everything you need for a perfect escape.
      </p>

      {/* FEATURES */}
      <ul className="mt-[42px] grid w-full grid-cols-6">
        {featureItems.map((item, i) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <li
              key={item.title}
              className={`
                relative
                flex
                min-h-[170px]
                flex-col
                items-center
                px-[10px]
                text-center

                ${i !== featureItems.length - 1
                  ? "border-r border-[rgba(11,37,69,0.10)]"
                  : ""}
              `}
            >
              {/* ICON */}
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center">
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="h-[50px] w-[50px] text-navy-deep"
                  />
                )}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-[13px]
                  h-[24px]
                  w-full
                  text-center
                  font-body
                  text-[10px]
                  leading-[1.2]
                  font-bold
                  tracking-[0.06em]
                  text-navy-deep
                  uppercase
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-[8px]
                  min-h-[52px]
                  max-w-[150px]
                  text-center
                  text-[11px]
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