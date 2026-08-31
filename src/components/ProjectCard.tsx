import type { Project } from "../data/projects";
import { projectDemoMessage, waLink } from "../utils/whatsapp";
import { IconArrowRight, IconArrowUpRight, IconDiamond, IconWhatsApp } from "./icons";
import { Tag } from "./Tag";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  featured?: boolean;
  eager?: boolean;
}

export function ProjectCard({ project, onOpen, featured = false, eager = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex overflow-hidden rounded-lg border border-line bg-coal transition-all duration-500 hover:border-mint/45 hover:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.85)] ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      {/* Visual */}
      <figure
        className={`relative shrink-0 overflow-hidden ${
          featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[380px] lg:w-[52%]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={project.image}
          alt={project.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-60" />
        <figcaption className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded border border-mint/40 bg-ink/80 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mint backdrop-blur">
            Demo Project
          </span>
        </figcaption>
        <span className="absolute right-4 top-4 rounded border border-line bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist backdrop-blur">
          {project.category}
        </span>
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`View details of ${project.title}`}
          className="absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-mint"
        />
      </figure>

      {/* Content */}
      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-6"}`}>
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-display font-bold tracking-tight text-fog transition-colors duration-300 group-hover:text-mint-soft ${
              featured ? "text-2xl sm:text-[1.7rem]" : "text-xl sm:text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <IconArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint" />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-mist sm:text-[15px]">{project.summary}</p>

        <ul className={`mt-5 space-y-2 ${featured ? "sm:columns-2 sm:gap-6 sm:space-y-2" : ""}`}>
          {project.capabilities.map((c) => (
            <li key={c} className="flex items-center gap-2.5 font-mono text-xs text-fog/75">
              <IconDiamond className="h-1.5 w-1.5 shrink-0 text-mint" />
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t} dot={false}>
              {t}
            </Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <a
            href={waLink(projectDemoMessage(project.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-mint px-4.5 py-2.5 font-display text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-soft"
          >
            <IconWhatsApp className="h-4 w-4" />
            Request Demo
          </a>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="group/d inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-display text-sm font-semibold text-fog transition-all duration-300 hover:border-mint/50 hover:text-mint-soft"
          >
            Details
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/d:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}
