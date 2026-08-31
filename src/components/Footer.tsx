import { site } from "../data/site";
import { emailLink, waLink } from "../utils/whatsapp";
import { IconArrowUpRight, IconGitHub, IconInstagram, IconMail, IconWhatsApp } from "./icons";

const socials = [
  { label: "WhatsApp", value: site.phoneDisplay, href: waLink(site.defaultWaMessage), icon: IconWhatsApp },
  { label: "Email", value: site.email, href: emailLink, icon: IconMail },
  { label: "Instagram", value: site.instagram.handle, href: site.instagram.url, icon: IconInstagram },
  { label: "GitHub", value: site.github.handle, href: site.github.url, icon: IconGitHub },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-coal/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-mint/40 bg-mint-deep font-mono text-sm font-bold text-mint">
                FS
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-fog">
                {site.name}
              </span>
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-mint">
              {site.title}
              <br />
              {site.specialty}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Websites, business software, and AI-powered products — designed to solve real
              business problems, not to collect dust.
            </p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded border border-line bg-panel px-3.5 py-2 font-mono text-xs text-fog/80">
              <span className="pulse-dot h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
              Available for new projects
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-dim">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav
                .filter((n) => n.id !== "home")
                .map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="link-line text-sm text-mist transition-colors hover:text-fog">
                      {n.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-dim">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-3 text-sm text-mist transition-colors hover:text-fog"
                  >
                    <s.icon className="h-4.5 w-4.5 text-dim transition-colors group-hover:text-mint" />
                    <span className="truncate">{s.value}</span>
                    <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line-soft pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-dim">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-dim">
            React · Vite · Tailwind — designed &amp; built by Fardeen
          </p>
        </div>
      </div>
    </footer>
  );
}
