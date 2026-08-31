import { useEffect, useState } from "react";
import { site } from "../data/site";
import { waLink } from "../utils/whatsapp";
import { IconClose, IconMenu, IconWhatsApp } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Fardeen Shaikh — back to top"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-mint/40 bg-mint-deep font-mono text-sm font-bold text-mint transition-colors duration-300 group-hover:bg-mint group-hover:text-ink">
              FS
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-[15px] font-bold leading-tight tracking-tight text-fog">
                Fardeen Shaikh
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
                AI · Software · Web
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "text-mint"
                    : "text-mist hover:bg-panel hover:text-fog"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(site.defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-mint px-4.5 py-2.5 font-display text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-soft sm:inline-flex"
            >
              <IconWhatsApp className="h-4 w-4" />
              Let&rsquo;s Talk
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fog transition-colors hover:border-mint/50 hover:text-mint lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink/97 px-6 pt-24 pb-10 backdrop-blur-lg transition-all duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {site.nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 border-b border-line-soft py-4 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              tabIndex={open ? 0 : -1}
            >
              <span className="font-mono text-xs text-mint">0{i + 1}</span>
              <span className="font-display text-3xl font-bold tracking-tight text-fog">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-4">
          <a
            href={waLink(site.defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2.5 rounded-md bg-mint px-5 py-4 font-display text-base font-semibold text-ink transition-colors hover:bg-mint-soft"
          >
            <IconWhatsApp className="h-5 w-5" />
            Let&rsquo;s Talk on WhatsApp
          </a>
          <p className="text-center font-mono text-xs text-dim">
            {site.email}
          </p>
        </div>
      </div>
    </>
  );
}
