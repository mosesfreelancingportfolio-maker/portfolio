import { Reveal } from "@/components/shared/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <Reveal>
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground leading-tight">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl font-sans text-base text-muted-foreground leading-relaxed">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}