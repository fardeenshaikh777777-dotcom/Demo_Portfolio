export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  capabilities: string[];
  tech: string[];
  image: string;
  alt: string;
  overview: string;
  purpose: string;
  features: string[];
  uxDecisions: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    category: "E-Commerce",
    summary:
      "A modern storefront focused on clear product presentation, a smooth browsing flow, and a checkout experience designed around conversion.",
    capabilities: ["Product catalog & search", "Cart & checkout flow", "Responsive storefront UI"],
    tech: ["React", "Vite", "Tailwind CSS", "REST API"],
    image: "https://image.qwenlm.ai/generated-images/57e37653-52f7-404e-a235-fc9a39d4b75f/_result.png",
    alt: "Dark-themed e-commerce storefront interface with product grid and cart panel",
    overview:
      "A complete storefront demo covering the journey from landing to checkout: product discovery, filtering, detail views, cart management, and a clean purchase flow.",
    purpose:
      "Many small businesses lose sales because their online shop feels slow, cluttered, or confusing. This demo shows how a focused storefront — where the product and the price do the talking — can guide visitors toward purchase without friction.",
    features: [
      "Product listing with category browsing",
      "Product detail pages with variant selection",
      "Cart management with live totals",
      "Step-by-step checkout flow",
      "Fully responsive across devices",
      "Fast, component-driven front end",
    ],
    uxDecisions: [
      "Product imagery and price dominate the hierarchy — no visual noise between the visitor and the buy decision",
      "Cart is always one tap away, with a persistent summary on mobile",
      "Touch-friendly targets and a thumb-reachable checkout on small screens",
    ],
  },
  {
    id: "dental-clinic",
    title: "Dental Clinic Website",
    category: "Healthcare",
    summary:
      "A trust-focused healthcare website with clear service presentation, an appointment flow, and an integrated AI chatbot assistant for patient questions.",
    capabilities: ["Appointment & contact flow", "Service presentation", "AI chatbot assistant"],
    tech: ["React", "Tailwind CSS", "AI Chatbot Integration", "REST API"],
    image: "https://image.qwenlm.ai/generated-images/854c4d08-33ef-4c86-8933-6c3865ed9f6d/_result.png",
    alt: "Dental clinic website interface with appointment booking panel and service cards",
    overview:
      "A professional clinic website demo combining calm, trust-building design with practical tools: treatment information, doctor profiles, and a guided appointment flow — plus an AI assistant that answers common patient questions instantly.",
    purpose:
      "Patients choose clinics that feel credible and make booking easy. This demo demonstrates how structured content, a visible booking path, and an always-on AI assistant reduce missed calls and turn website visits into appointments.",
    features: [
      "Treatment and service presentation",
      "Doctor and clinic profile sections",
      "Appointment request flow",
      "AI chatbot for FAQs and booking guidance",
      "Contact and location information",
      "Accessible, calm healthcare UI",
    ],
    uxDecisions: [
      "Reassuring whitespace and a clear visual hierarchy to reduce patient anxiety",
      "The appointment action stays visible at every scroll depth",
      "The chatbot answers pricing, timing, and procedure questions without forcing a phone call",
    ],
  },
  {
    id: "school-management",
    title: "School Management Website",
    category: "Education",
    summary:
      "A centralized platform concept for school administration — students, staff, records, and day-to-day operational workflows in one interface.",
    capabilities: ["Student & staff records", "Admin workflows", "Centralized dashboard"],
    tech: ["React", "Supabase (concepts)", "Authentication concepts", "Dashboard UI"],
    image: "https://image.qwenlm.ai/generated-images/e1c0a8c3-ee7e-4119-8ebe-4e988fa69cbf/_result.png",
    alt: "School management dashboard with student records table and attendance overview",
    overview:
      "A structured management platform demo covering the administrative side of running a school: student and staff records, attendance views, fee tracking, and operational information organized behind a clean dashboard shell.",
    purpose:
      "Schools often juggle registers, spreadsheets, and paper records. This concept shows how a single centralized interface can replace scattered information with structured, searchable, role-aware workflows.",
    features: [
      "Student and staff record management",
      "Attendance and class overview",
      "Fee and dues tracking views",
      "Role-based dashboard layout",
      "Search and filter across records",
      "Clean data tables and forms",
    ],
    uxDecisions: [
      "High-density but legible tables — administrators scan, they don't read",
      "Consistent CRUD patterns so every module behaves predictably",
      "Key operational numbers surface first; details live one click deeper",
    ],
  },
  {
    id: "factory-management",
    title: "Factory Management Website",
    category: "Industry",
    summary:
      "An operations-focused management interface for production visibility — records, workflows, and dashboards that keep business information organized.",
    capabilities: ["Operations dashboard", "Records & workflows", "Production visibility"],
    tech: ["React", "Dashboard UI", "Data Visualization", "REST API"],
    image: "https://image.qwenlm.ai/generated-images/90bae70f-b997-4356-adba-e2d15c29cc46/_result.png",
    alt: "Factory operations dashboard with production metrics, machine status, and shift records",
    overview:
      "A business-oriented factory management demo: production tracking, machine and shift status, inventory records, and management dashboards that present operational data clearly for decision-making.",
    purpose:
      "Factory owners often see their operation through delayed reports and phone calls. This interface demonstrates how live, organized visibility — shifts, output, inventory — lets management act on today's numbers instead of last week's.",
    features: [
      "Production and output tracking",
      "Machine and line status views",
      "Shift and workforce records",
      "Inventory and stock modules",
      "KPI dashboards with charts",
      "Organized record management",
    ],
    uxDecisions: [
      "Status colors used sparingly — exceptions stand out immediately",
      "Dashboard-first navigation: the floor overview is the home screen",
      "Forms are short and structured for fast data entry on the floor",
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant Website",
    category: "Hospitality",
    summary:
      "A brand-forward restaurant site built around menu presentation, location and contact details, and turning hungry visitors into reservations.",
    capabilities: ["Menu presentation", "Brand identity", "Reservation & contact flow"],
    tech: ["React", "Tailwind CSS", "Responsive Design", "Contact Flow"],
    image: "https://image.qwenlm.ai/generated-images/c1c61b62-7b17-4b5d-bdc1-3b72a2b36fff/_result.png",
    alt: "Restaurant website with food photography hero, menu section, and reservation panel",
    overview:
      "A modern restaurant website demo where the menu is the hero: categorized dishes with imagery, an atmosphere-driven brand section, and a direct reservation and contact flow.",
    purpose:
      "Most restaurant traffic is mobile and hungry-now. This demo focuses on what converts that traffic: an appetizing menu, instant location and hours information, and the shortest possible path to a table or an order.",
    features: [
      "Categorized menu with imagery",
      "Brand story and atmosphere section",
      "Reservation and contact flow",
      "Location, hours, and directions block",
      "Mobile-first responsive layout",
      "Fast-loading image strategy",
    ],
    uxDecisions: [
      "Food photography leads every viewport — appetite is the conversion driver",
      "Call, directions, and reserve actions are always within reach on mobile",
      "Menu reads like a physical menu: scannable, grouped, priced clearly",
    ],
  },
  {
    id: "ai-saas",
    title: "AI-SaaS Dashboard",
    category: "SaaS / AI",
    summary:
      "A SaaS product interface demonstrating AI-oriented workflows — analytics, usage controls, and data visualization in a professional product shell.",
    capabilities: ["Analytics & charts", "AI workflow UI", "Application controls"],
    tech: ["React", "Charting", "AI Integration UI", "Component Architecture"],
    image: "https://image.qwenlm.ai/generated-images/59c49aeb-5fc8-4203-9c6b-5afabed9001a/_result.png",
    alt: "AI SaaS dashboard with analytics charts, usage metrics, and an AI assistant panel",
    overview:
      "A modern SaaS dashboard concept built as a complete product shell: sidebar navigation, analytics and usage charts, AI-assisted workflow panels, settings, and billing-style application controls.",
    purpose:
      "AI products live or die on their interface — users need to trust what the model is doing. This demo shows how to present AI outputs, usage, and controls in a way that feels transparent, professional, and ready for real customers.",
    features: [
      "Analytics dashboards with charts",
      "AI assistant and prompt workflow panels",
      "Usage and quota monitoring",
      "Team and settings modules",
      "Consistent component system",
      "Dark, data-dense product UI",
    ],
    uxDecisions: [
      "AI outputs are always labeled and reviewable — no black-box UI",
      "Dense data stays readable through spacing, not box-drawing",
      "The shell (sidebar, topbar, panels) is reusable for any future module",
    ],
  },
];
