import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { IconDiamond } from "../components/icons";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="The toolkit behind the work."
          description="Organized the way I actually use it — and labeled honestly. Depth matters more than a long list."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal
              key={group.index}
              delay={gi * 80}
              className={gi === 0 || gi === 3 ? "lg:col-span-2" : ""}
            >
              <article className="group h-full rounded-lg border border-line bg-coal/50 p-6 transition-all duration-400 hover:border-mint/40 hover:bg-coal sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-dim">
                      Group {group.index}
                    </p>
                    <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-fog transition-colors duration-300 group-hover:text-mint-soft sm:text-2xl">
                      {group.title}
                    </h3>
                  </div>
                  {group.badge && (
                    <span
                      className={`shrink-0 rounded border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${
                        group.badge === "Specialization"
                          ? "border-mint/40 bg-mint-deep text-mint"
                          : "border-line bg-panel text-mist"
                      }`}
                    >
                      {group.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{group.note}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded border border-line bg-panel px-3 py-1.5 text-[13px] font-medium text-fog/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/50 hover:text-mint-soft"
                    >
                      {gi === 0 && <IconDiamond className="h-1 w-1 text-mint" />}
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-8 rounded-lg border border-line bg-ink p-5 font-mono text-xs sm:p-6 sm:text-sm">
            <p>
              <span className="text-mint">fardeen@dev</span>
              <span className="text-dim">:~$</span>{" "}
              <span className="text-fog/85">currently exploring</span>
            </p>
            <p className="mt-2 text-mist">
              → agentic AI workflows, voice-assistant interfaces, and smarter business
              automations
              <span className="caret-blink ml-1 text-mint" aria-hidden="true">
                ▊
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
