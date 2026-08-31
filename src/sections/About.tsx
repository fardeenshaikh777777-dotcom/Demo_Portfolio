import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { IconDiamond } from "../components/icons";

const CAPABILITIES = [
  {
    title: "Modern websites",
    desc: "Marketing sites and brand experiences that load fast and read clearly.",
  },
  {
    title: "Business management systems",
    desc: "Records, workflows, and daily operations in one structured place.",
  },
  {
    title: "SaaS dashboards",
    desc: "Product interfaces with analytics, settings, and subscription flows.",
  },
  {
    title: "AI-powered applications",
    desc: "Web apps where AI does real, visible work inside the product.",
  },
  {
    title: "AI chatbot integrations",
    desc: "Assistants that answer, guide, and capture leads around the clock.",
  },
  {
    title: "Business automation interfaces",
    desc: "Front ends that turn manual routines into guided digital flows.",
  },
  {
    title: "Client-focused digital solutions",
    desc: "Scoped around your business and your users — not around a template.",
  },
];

const PRINCIPLES = [
  "Clear scope before code — you know what's being built and why.",
  "Working demos, not promises — you can click through everything I show.",
  "Direct communication — you talk to the developer, not a middleman.",
  "Honest about technology — I'll tell you when AI helps and when it doesn't.",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Practical software for real business problems."
          description="I'm Fardeen — an AI-software and web developer focused on building things businesses actually use: modern websites, management systems, SaaS dashboards, and AI-powered applications, with a specialization in AI chatbot integration."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Principles — sticky column */}
          <div className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-28">
              <Reveal>
                <div className="rounded-lg border border-line bg-coal/60 p-6 sm:p-7">
                  <p className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-mint">
                    <span aria-hidden="true">//</span> How I work
                  </p>
                  <ul className="mt-5 space-y-4">
                    {PRINCIPLES.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-fog/85">
                        <IconDiamond className="mt-1.5 h-1.5 w-1.5 shrink-0 text-mint" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div className="rounded-lg border border-line bg-coal/60 p-6 sm:p-7 font-mono text-xs">
                  {[
                    ["Focus", "AI chatbots & business software"],
                    ["Stack", "React · Vite · Tailwind · Supabase"],
                    ["Pipeline", "Git → GitHub → Vercel"],
                  ].map(([k, v]) => (
                    <p key={k} className="flex items-baseline justify-between gap-4 border-b border-line-soft py-2.5 last:border-0">
                      <span className="uppercase tracking-[0.18em] text-dim">{k}</span>
                      <span className="text-right text-fog/85">{v}</span>
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Capabilities list */}
          <div className="lg:col-span-8">
            <ul>
              {CAPABILITIES.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 60}>
                  <div className="group flex gap-5 border-b border-line-soft py-5 transition-colors duration-300 first:border-t hover:border-mint/35 sm:gap-8">
                    <span className="w-9 shrink-0 pt-1 font-mono text-xs font-medium text-dim transition-colors duration-300 group-hover:text-mint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-fog transition-colors duration-300 group-hover:text-mint-soft sm:text-xl">
                        {c.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-mist">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
