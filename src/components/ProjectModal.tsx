import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { chatbotDemoMessage, projectDemoMessage, waLink } from "../utils/whatsapp";
import { IconArrowUpRight, IconClose, IconDiamond, IconWhatsApp } from "./icons";
import { Tag } from "./Tag";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function Label({ children }: { children: string }) {
  return (
    <p className="mb-3 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-mint">
      <span aria-hidden="true">//</span>
      {children}
    </p>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div
        className="fade-in absolute inset-0 bg-ink/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="modal-in relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-lg border border-line bg-coal shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:max-h-[86vh] sm:rounded-lg">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-md border border-line bg-ink/80 text-mist backdrop-blur transition-colors hover:border-mint/60 hover:text-mint"
        >
          <IconClose />
        </button>

        <div className="overflow-y-auto">
          <figure className="relative aspect-[16/8] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/20 to-transparent" />
            <figcaption className="absolute bottom-4 left-5 flex items-center gap-2 sm:left-8">
              <span className="rounded border border-mint/40 bg-ink/80 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mint backdrop-blur">
                Demo Project
              </span>
              <span className="rounded border border-line bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist backdrop-blur">
                {project.category}
              </span>
            </figcaption>
          </figure>

          <div className="space-y-9 p-6 sm:p-9">
            <div>
              <h3
                id={`project-title-${project.id}`}
                className="font-display text-2xl font-bold tracking-tight text-fog sm:text-3xl"
              >
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-mist">{project.summary}</p>
            </div>

            <div>
              <Label>Overview</Label>
              <p className="leading-relaxed text-fog/85">{project.overview}</p>
            </div>

            <div>
              <Label>Why it exists</Label>
              <p className="leading-relaxed text-fog/85">{project.purpose}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <Label>Key features</Label>
                <ul className="space-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-fog/85">
                      <IconDiamond className="mt-1.5 h-1.5 w-1.5 shrink-0 text-mint" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Label>UI / UX decisions</Label>
                <ol className="space-y-3.5">
                  {project.uxDecisions.map((u, i) => (
                    <li key={u} className="flex items-start gap-3 text-sm leading-relaxed text-fog/85">
                      <span className="mt-0.5 font-mono text-xs font-bold text-mint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {u}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div>
              <Label>Technology</Label>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-line bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs leading-relaxed text-mist">
                <span className="text-mint">STATUS</span> — This is a showcase demo. A live
                walkthrough is available on request — Fardeen will share the running project
                personally and answer questions about adapting it to your business.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waLink(projectDemoMessage(project.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-md bg-mint px-6 py-3 font-display text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-soft"
                >
                  <IconWhatsApp className="h-4.5 w-4.5" />
                  Request Demo on WhatsApp
                </a>
                <a
                  href={waLink(chatbotDemoMessage(project.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 font-display text-[15px] font-semibold text-fog transition-all duration-300 hover:border-mint/50 hover:text-mint-soft"
                >
                  Ask a question
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
