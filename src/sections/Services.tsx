import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { Tag } from "../components/Tag";
import { IconArrowUpRight, IconWhatsApp } from "../components/icons";
import { services } from "../data/services";
import { waLink } from "../utils/whatsapp";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Services"
            title="What you can hire me to build."
            description="Every engagement starts with a business problem, not a tech stack. Here's where I create the most value."
          />
          <Reveal delay={200}>
            <p className="mb-2 rounded border border-line bg-coal/60 px-4 py-2.5 font-mono text-xs text-mist">
              <span className="text-mint">06</span> ways we can work together
            </p>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-line-soft overflow-hidden rounded-lg border border-line bg-coal/40">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 60}>
              <div className="group grid gap-4 p-6 transition-colors duration-300 hover:bg-panel sm:p-7 md:grid-cols-[72px_1fr_auto] md:items-center md:gap-8">
                <span className="font-mono text-sm font-medium text-dim transition-colors duration-300 group-hover:text-mint">
                  /{s.index}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-fog transition-colors duration-300 group-hover:text-mint-soft sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mist">
                    {s.description}
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <Tag key={t} dot={false}>
                        {t}
                      </Tag>
                    ))}
                  </div>
                </div>
                <a
                  href={waLink(
                    `Hello Fardeen, I'm interested in your "${s.title}" service. Here's what I have in mind: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start font-mono text-xs font-medium text-mist transition-all duration-300 hover:gap-3 hover:text-mint md:self-center"
                >
                  Discuss
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-lg border border-dashed border-line bg-coal/30 p-6 sm:p-7 lg:flex-row lg:items-center">
            <div>
              <p className="font-display text-xl font-bold tracking-tight text-fog">
                Not sure which one fits?
              </p>
              <p className="mt-1.5 font-mono text-xs text-mist">
                Describe your idea in two lines — I&rsquo;ll reply with a straight answer, not a sales pitch.
              </p>
            </div>
            <Button
              href={waLink(
                "Hello Fardeen, I'm not sure exactly what I need yet. Here's my idea: "
              )}
              external
              icon={<IconWhatsApp className="h-4.5 w-4.5" />}
            >
              Describe your idea
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
