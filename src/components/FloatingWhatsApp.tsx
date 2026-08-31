import { useEffect, useState } from "react";
import { site } from "../data/site";
import { waLink } from "../utils/whatsapp";
import { IconWhatsApp } from "./icons";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-[60] transition-all duration-500 sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={waLink(site.defaultWaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Fardeen on WhatsApp"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-mint text-ink shadow-[0_14px_40px_-10px_rgba(63,217,164,0.6)] transition-transform duration-300 hover:scale-108 active:scale-95"
      >
        <span className="pulse-dot absolute inset-0 rounded-full" aria-hidden="true" />
        <IconWhatsApp className="relative h-6 w-6" />
        <span className="pointer-events-none absolute right-full top-1/2 mr-3.5 hidden -translate-y-1/2 translate-x-1 whitespace-nowrap rounded border border-line bg-panel px-3 py-1.5 font-mono text-xs text-fog opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
