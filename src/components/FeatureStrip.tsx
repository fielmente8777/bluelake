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
      className="flex flex-col gap-2 text-center sm:px-8 lg:px-[52px]"
    >
      {/* TOP LABEL */}
      <p className="m-0 flex items-center justify-center gap-3 font-sans text-[14px] font-bold tracking-[0.15em] text-gold uppercase sm:text-[24px]">
        <span className="h-px w-[24px] bg-gold" />
        The Blue Lake Experience
        <span className="h-px w-[24px] bg-gold" />
      </p>

      {/* HEADING */}
      <h2
        id="feature-strip-title"
        className="mt-[15px] font-sans text-[20px] font-semibold leading-[1.15] text-navy-deep sm:text-[40px]"
      >
        Nature. Comfort. Connection.
      </h2>

      {/* SUBTITLE */}
      <p className="mt-[10px] font-sans text-[14px] text-text-muted sm:text-[16px]">
        Everything you need for a perfect escape.
      </p>

      {/* FEATURES */}
      <ul className="mt-6 grid w-full grid-cols-2 sm:mt-[55px] lg:grid-cols-5">
        {featureItems.map((item, i) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <li
              key={item.title}
              className={`
                relative
                flex
                min-h-[155px]
                flex-col
                items-center
                justify-start
                px-3
                py-4
                text-center
                sm:min-h-[190px]
                sm:px-[18px]
                sm:py-0
                ${i === 4 ? "col-span-2 lg:col-span-1" : ""}
                ${
                  i !== featureItems.length - 1
                    ? "border-b border-[rgba(11,37,69,0.10)] lg:border-b-0 lg:border-r"
                    : ""
                }
                ${
                  i % 2 === 0 && i !== 4
                    ? "border-r border-[rgba(11,37,69,0.10)]"
                    : ""
                }
              `}
            >
              {/* ICON */}
              <div className="flex h-[48px] w-full items-center justify-center sm:h-[62px]">
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="h-[40px] w-[40px] text-navy-deep sm:h-[52px] sm:w-[52px]"
                  />
                )}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-2
                  w-full
                  font-sans
                  text-[13px]
                  font-bold
                  leading-[1.3]
                  tracking-[0.06em]
                  text-navy-deep
                  uppercase
                  sm:mt-[14px]
                  sm:min-h-[28px]
                  sm:text-[16px]
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-1.5
                  w-full
                  max-w-[220px]
                  font-sans
                  text-[12px]
                  leading-[1.45]
                  text-text-muted
                  sm:mt-[8px]
                  sm:text-[13px]
                  sm:leading-[1.55]
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