import { useState } from "react";
import { Button } from "../components/Button";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { IconWhatsApp } from "../components/icons";
import { projects, type Project } from "../data/projects";
import { site } from "../data/site";
import { waLink } from "../utils/whatsapp";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="04"
            eyebrow="Selected Work"
            title="Demo projects you can explore."
            description="Every project below is a working demonstration of what I can build for a business. Click through the details — then request a live walkthrough on WhatsApp."
          />
          <Reveal delay={200}>
            <p className="mb-2 rounded border border-line bg-coal/60 px-4 py-2.5 font-mono text-xs text-mist">
              <span className="text-mint">{String(projects.length).padStart(2, "0")}</span>{" "}
              showcase projects
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-6">
          <Reveal>
            <ProjectCard
              project={featured}
              onOpen={setSelected}
              featured
              eager
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 90}>
                <ProjectCard project={p} onOpen={setSelected} />
              </Reveal>
            ))}

            {/* Conversion tile completing the grid */}
            <Reveal delay={90}>
              <div className="flex h-full min-h-[300px] flex-col justify-between rounded-lg border border-dashed border-line bg-coal/30 p-7 transition-colors duration-400 hover:border-mint/50 sm:p-8">
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-dim">
                    Next project
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-fog sm:text-3xl">
                    Could be yours.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
                    Have a website, dashboard, or AI assistant in mind? Tell me what your
                    business needs — I&rsquo;ll tell you what it takes to build it.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    href={waLink(site.defaultWaMessage)}
                    external
                    icon={<IconWhatsApp className="h-4.5 w-4.5" />}
                  >
                    Start on WhatsApp
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
