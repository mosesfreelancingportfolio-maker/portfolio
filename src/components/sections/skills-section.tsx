import { Reveal } from "@/components/shared/reveal";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section>
      <Reveal>
        <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border pb-4">
          Skills &amp; Technologies
        </p>
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-tight">
          What I work with
        </h2>
      </Reveal>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04}>
            <div className="border border-border bg-muted p-4 sm:p-6">
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
                  >
                    <span className="size-1.5 text-secondary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}