import { site } from "../data/site";

/** Build a real wa.me deep link with a URL-encoded prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Per-project demo request message. */
export function projectDemoMessage(projectTitle: string): string {
  return `Hello Fardeen, I visited your portfolio and I'm interested in the ${projectTitle} demo. I'd like to know more about this project and discuss something similar for my business.`;
}

export const emailLink = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project inquiry — from your portfolio"
)}&body=${encodeURIComponent(
  "Hello Fardeen,\n\nI visited your portfolio and I'd like to discuss a project.\n\nWhat I need:\n\nTimeline:\n\nBudget range:\n\n— sent from fardeenshaikh.dev"
)}`;

export const chatbotDemoMessage = (projectTitle: string) =>
  `Hello Fardeen, I just explored the ${projectTitle} demo on your portfolio. I'd like an AI chatbot like this for my business.`;
