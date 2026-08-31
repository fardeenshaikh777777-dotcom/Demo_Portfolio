import { ChatDemo } from "../components/ChatDemo";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { IconArrowRight, IconWhatsApp } from "../components/icons";
import { site } from "../data/site";
import { useScramble } from "../hooks/useScramble";
import { waLink } from "../utils/whatsapp";

const META = [
  { label: "Build", value: "Websites · Dashboards · AI apps" },
  { label: "Speciality", value: "AI chatbot integration" },
  { label: "Model", value: "Freelance — direct collaboration" },
];

export function Hero() {
  const line1 = useScramble("FARDEEN", 250);
  const line2 = useScramble("SHAIKH", 650);
  const year = new Date().getFullYear();

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — identity */}
          <div className="lg:col-span-7">
            <Reveal className="flex items-center justify-between gap-4">
              <p className="inline-flex items-center gap-2.5 rounded border border-line bg-coal/70 px-3.5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-fog/85">
                <span className="pulse-dot h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
                Open for new projects
              </p>
              <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-dim sm:block">
                Portfolio — {year}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                aria-label="Fardeen Shaikh"
                className="mt-8 font-display font-bold leading-[0.95] tracking-tight"
              >
                <span
                  aria-hidden="true"
                  className="block text-[clamp(3rem,10vw,5.6rem)] text-fog"
                >
                  {line1}
                </span>
                <span
                  aria-hidden="true"
                  className="text-outline block text-[clamp(3rem,10vw,5.6rem)]"
                >
                  {line2}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className="font-display text-lg font-semibold text-fog/90 sm:text-xl">
                  AI-Software &amp; Web Developer
                </span>
                <span className="rounded border border-mint/35 bg-mint-deep px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-mint">
                  AI Chatbot Specialist
                </span>
              </div>
            </Reveal>

            <Reveal delay={230}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                {site.tagline}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button
                  href={waLink(site.heroWaMessage)}
                  external
                  size="lg"
                  icon={<IconWhatsApp className="h-5 w-5" />}
                >
                  Request a Demo
                </Button>
                <Button
                  href="#projects"
                  variant="ghost"
                  size="lg"
                  iconAfter
                  icon={<IconArrowRight className="h-4.5 w-4.5" />}
                >
                  View Projects
                </Button>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <a
                href={waLink(site.defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-xs text-dim transition-colors hover:text-mint"
              >
                <IconWhatsApp className="h-3.5 w-3.5" />
                Prefer chat? Message me directly on WhatsApp
                <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal delay={420}>
              <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-7 sm:grid-cols-3 sm:gap-8">
                {META.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-dim">
                      {m.label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-fog/85">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right — chatbot demo panel */}
          <div className="lg:col-span-5">
            <Reveal delay={260}>
              <ChatDemo />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
