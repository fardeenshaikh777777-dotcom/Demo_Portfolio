export interface SkillGroup {
  index: string;
  title: string;
  note: string;
  badge?: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Core Development",
    note: "Daily drivers — where most of my building happens.",
    badge: "Primary",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "UI/UX Implementation",
      "Component Architecture",
    ],
  },
  {
    index: "02",
    title: "AI & Automation",
    note: "The specialization — AI that ships inside real products.",
    badge: "Specialization",
    items: [
      "AI-Powered Web Apps",
      "AI Chatbot Integration",
      "AI SaaS Interfaces",
      "Prompt Engineering",
      "AI Workflow Integration",
      "AI-Assisted Development",
      "AI Business Solutions",
    ],
  },
  {
    index: "03",
    title: "Backend & Integration",
    note: "Working knowledge — enough to connect, authenticate, and ship complete products, and honest about where my depth sits.",
    badge: "Working knowledge",
    items: [
      "REST API Integration",
      "Supabase",
      "Authentication Flows",
      "Database-Backed Apps",
      "Third-Party Web Integrations",
    ],
  },
  {
    index: "04",
    title: "Tools & Workflow",
    note: "The shipping pipeline — versioned, reviewed, deployed.",
    items: ["Git", "GitHub", "Vercel", "VS Code", "AI Coding Tools"],
  },
];
