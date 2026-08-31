import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import {
  IconArrowUpRight,
  IconGitHub,
  IconInstagram,
  IconMail,
  IconWhatsApp,
} from "../components/icons";
import { site } from "../data/site";
import { emailLink, waLink } from "../utils/whatsapp";

const CHANNELS = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    hint: "Fastest — straight to my phone",
    href: waLink(site.defaultWaMessage),
    external: true,
    icon: IconWhatsApp,
  },
  {
    label: "Email",
    value: site.email,
    hint: "For detailed briefs",
    href: emailLink,
    external: false,
    icon: IconMail,
  },
  {
    label: "Instagram",
    value: site.instagram.handle,
    hint: "Behind the scenes",
    href: site.instagram.url,
    external: true,
    icon: IconInstagram,
  },
  {
    label: "GitHub",
    value: site.github.handle,
    hint: "Code and experiments",
    href: site.github.url,
    external: true,
    icon: IconGitHub,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-lg border border-line bg-coal">
          {/* ambient panel glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(640px circle at 12% 0%, rgba(63,217,164,0.10), transparent 62%), radial-gradient(500px circle at 100% 100%, rgba(63,217,164,0.05), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-60" aria-hidden="true" />

          <div className="relative grid gap-14 p-7 sm:p-12 lg:grid-cols-2 lg:gap-10 lg:p-16">
            <div>
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-mist">
                  <span className="text-mint">[ 05 ]</span> Contact
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.03] tracking-tight text-fog sm:text-5xl lg:text-[3.4rem]">
                  <span className="mask-line">
                    <span>Have a project</span>
                  </span>
                  <span className="mask-line">
                    <span>
                      in <span className="text-mint">mind?</span>
                    </span>
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-mist sm:text-lg">
                  Let&rsquo;s discuss your idea and turn it into a modern web or AI-powered
                  solution. One message is enough to start.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Button
                    href={waLink(site.defaultWaMessage)}
                    external
                    size="lg"
                    icon={<IconWhatsApp className="h-5 w-5" />}
                  >
                    Chat on WhatsApp
                  </Button>
                  <Button
                    href={emailLink}
                    variant="ghost"
                    size="lg"
                    icon={<IconMail className="h-5 w-5" />}
                  >
                    Send Email
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={330}>
                <p className="mt-7 font-mono text-xs text-dim">
                  <span className="text-mint">//</span> Direct line — no forms, no middlemen.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal delay={150}>
                <ul className="divide-y divide-line-soft border-y border-line-soft">
                  {CHANNELS.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center justify-between gap-4 px-2 py-5 transition-colors duration-300 hover:bg-panel/70 sm:px-4"
                      >
                        <span className="flex min-w-0 items-center gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-panel text-mist transition-all duration-300 group-hover:border-mint/40 group-hover:text-mint">
                            <c.icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-dim">
                              {c.label} — {c.hint}
                            </span>
                            <span className="mt-1 block truncate text-sm font-semibold text-fog transition-colors duration-300 group-hover:text-mint-soft sm:text-[15px]">
                              {c.value}
                            </span>
                          </span>
                        </span>
                        <IconArrowUpRight className="h-4.5 w-4.5 shrink-0 text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-6 font-mono text-xs leading-relaxed text-dim">
                  <span className="text-mint">$</span> tip: mention which demo project caught
                  your eye — I&rsquo;ll bring the walkthrough to the conversation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
