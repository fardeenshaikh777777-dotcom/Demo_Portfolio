import { Fragment } from "react";
import { IconDiamond } from "../components/icons";

const ITEMS = [
  "Business Websites",
  "AI Chatbots",
  "SaaS Dashboards",
  "E-Commerce",
  "Admin Panels",
  "AI Integrations",
  "Management Systems",
  "Landing Pages",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-8 pr-8"
      aria-hidden={hidden || undefined}
    >
      {ITEMS.map((item) => (
        <Fragment key={item}>
          <span className="whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.24em] text-mist">
            {item}
          </span>
          <IconDiamond className="h-1.5 w-1.5 shrink-0 text-mint/50" />
        </Fragment>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <section aria-label="Things I build" className="ticker mt-20 overflow-hidden border-y border-line bg-coal/60 py-4 sm:mt-24">
      <div className="ticker-track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
