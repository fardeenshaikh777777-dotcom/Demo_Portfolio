import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "../data/site";
import { waLink } from "../utils/whatsapp";
import { IconSend, IconSpark, IconWhatsApp } from "./icons";

interface ChatMsg {
  id: number;
  from: "bot" | "user";
  text: string;
  action?: { label: string; href: string };
}

interface QuickReply {
  label: string;
  reply: string;
  action?: { label: string; href: string };
}

const QUICK_REPLIES: QuickReply[] = [
  {
    label: "What do you build?",
    reply:
      "Websites, business management systems, dashboards, SaaS interfaces — and AI chatbots like me, wired into real products.",
  },
  {
    label: "AI chatbots?",
    reply:
      "Fardeen designs and integrates AI assistants for businesses — support bots, booking guides, lead capture. This panel is a scripted UI prototype; his production builds connect to live AI models.",
  },
  {
    label: "Request a demo",
    reply:
      "Good call. Explore the Selected Work below — every project has a one-tap demo request. Or message Fardeen directly and he'll walk you through anything live.",
    action: { label: "Message on WhatsApp", href: waLink(site.chatbotWaMessage) },
  },
];

/**
 * A clearly-labeled scripted chatbot UI prototype — demonstrates the kind of
 * assistant interface Fardeen builds for businesses. No fake AI claims.
 */
export function ChatDemo() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [typing, setTyping] = useState(false);
  const [used, setUsed] = useState<number[]>([]);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const nextId = () => ++idRef.current;

  const pushBot = (text: string, action?: ChatMsg["action"]) => {
    setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), from: "bot", text, action }]);
    }, 850);
    timersRef.current.push(t);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      pushBot(
        "Hey — I'm the demo assistant on Fardeen's portfolio. Tap a question below, or try typing anything."
      );
    }, 600);
    timersRef.current.push(t);
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const askQuick = (qr: QuickReply, index: number) => {
    if (used.includes(index) || typing) return;
    setMessages((prev) => [...prev, { id: nextId(), from: "user", text: qr.label }]);
    setUsed((prev) => [...prev, index]);
    pushBot(qr.reply, qr.action);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || typing) return;
    setMessages((prev) => [...prev, { id: nextId(), from: "user", text }]);
    setDraft("");
    pushBot(
      "I'm a scripted prototype, so my lines are fixed — but a real version of me could answer that. For a real answer today, message Fardeen on WhatsApp.",
      { label: "Continue on WhatsApp", href: waLink(site.defaultWaMessage) }
    );
  };

  const remaining = QUICK_REPLIES.filter((_, i) => !used.includes(i));

  return (
    <div className="relative">
      {/* offset technical frame */}
      <div
        className="absolute -inset-2 rounded-xl border border-line-soft"
        aria-hidden="true"
      />
      <div className="absolute -left-2 -top-2 z-10 font-mono text-xs text-dim" aria-hidden="true">
        +
      </div>
      <div className="absolute -bottom-2 -right-2 z-10 font-mono text-xs text-dim" aria-hidden="true">
        +
      </div>

      <div className="relative flex h-[480px] flex-col overflow-hidden rounded-lg border border-line bg-coal shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:h-[520px]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-line bg-panel px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint/60" />
            </span>
            <span className="font-mono text-xs font-medium text-mist">assistant.ui</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded border border-mint/25 bg-mint-deep px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mint">
            <IconSpark className="h-3 w-3" />
            Scripted demo
          </span>
        </div>

        {/* messages */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4" role="log" aria-live="polite">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`fade-in flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-md px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "rounded-br-sm border border-mint/25 bg-mint-deep text-fog"
                    : "rounded-tl-sm border border-line-soft bg-panel text-fog/90"
                }`}
              >
                <p>{m.text}</p>
                {m.action && (
                  <a
                    href={m.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-2 rounded bg-mint px-3 py-1.5 font-mono text-xs font-bold text-ink transition-colors hover:bg-mint-soft"
                  >
                    <IconWhatsApp className="h-3.5 w-3.5" />
                    {m.action.label}
                  </a>
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start" aria-hidden="true">
              <div className="flex items-center gap-1.5 rounded-md rounded-tl-sm border border-line-soft bg-panel px-4 py-3">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mint" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mint" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-mint" />
              </div>
            </div>
          )}
        </div>

        {/* quick replies */}
        <div className="flex flex-wrap gap-2 border-t border-line-soft px-4 pt-3">
          {remaining.map((qr) => {
            const index = QUICK_REPLIES.indexOf(qr);
            return (
              <button
                key={qr.label}
                type="button"
                onClick={() => askQuick(qr, index)}
                className="rounded border border-line bg-panel px-3 py-1.5 font-mono text-xs text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/50 hover:text-mint"
              >
                {qr.label}
              </button>
            );
          })}
          {remaining.length === 0 && (
            <a
              href={waLink(site.chatbotWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-mint/40 bg-mint-deep px-3 py-1.5 font-mono text-xs font-medium text-mint transition-colors hover:bg-mint hover:text-ink"
            >
              <IconWhatsApp className="h-3.5 w-3.5" />
              Message Fardeen directly
            </a>
          )}
        </div>

        {/* input */}
        <form onSubmit={onSubmit} className="flex items-center gap-2 px-4 py-3">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type anything…"
            aria-label="Type a message to the demo assistant"
            className="h-10 flex-1 rounded-md border border-line bg-ink px-3.5 text-sm text-fog placeholder:text-dim transition-colors focus:border-mint/60 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mint text-ink transition-all duration-300 hover:bg-mint-soft active:scale-95"
          >
            <IconSend className="h-4.5 w-4.5" />
          </button>
        </form>

        <p className="border-t border-line-soft px-4 py-2 font-mono text-[10px] leading-relaxed text-dim">
          UI prototype — responses are scripted, not live AI.{" "}
          <a
            href={waLink(site.chatbotWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line text-mint"
          >
            Want this for your business?
          </a>
        </p>
      </div>
    </div>
  );
}
