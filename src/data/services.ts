export interface Service {
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    index: "01",
    title: "Business Website Development",
    description:
      "Modern, responsive websites for businesses, brands, restaurants, clinics, and schools — built to present your offer clearly and earn the visitor's trust.",
    tags: ["Landing pages", "Company sites", "Responsive"],
  },
  {
    index: "02",
    title: "AI-Powered Web Applications",
    description:
      "Web applications with practical AI capabilities baked in — intelligent search, content workflows, and automated assistance that users actually benefit from.",
    tags: ["AI features", "Smart workflows", "Integrations"],
  },
  {
    index: "03",
    title: "AI Chatbot Integration",
    description:
      "Interactive AI chatbots for websites and customer-facing apps — answering questions, guiding visitors, and capturing leads around the clock.",
    tags: ["Chatbots", "Lead capture", "24/7 support"],
  },
  {
    index: "04",
    title: "Dashboard & Management Systems",
    description:
      "Custom admin dashboards and business management interfaces — records, workflows, and operational data organized into one clear view.",
    tags: ["Admin panels", "CRUD systems", "Operations"],
  },
  {
    index: "05",
    title: "SaaS Interface Development",
    description:
      "Modern SaaS dashboards and application interfaces with the polish your users expect — onboarding, settings, analytics, and subscription flows.",
    tags: ["Product UI", "Analytics", "App shells"],
  },
  {
    index: "06",
    title: "Custom Web Solutions",
    description:
      "Something specific in mind? Custom-built solutions scoped around your exact business requirements — nothing templated, nothing forced.",
    tags: ["Custom scope", "Consultation", "End-to-end"],
  },
];
