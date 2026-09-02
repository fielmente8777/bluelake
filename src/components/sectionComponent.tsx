import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className = "",
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`w-full ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1370px] px-5 sm:px-8 lg:px-[52px] ${className}`}
    >
      {children}
    </div>
  );
}