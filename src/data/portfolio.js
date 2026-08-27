// Portfolio Data - Oruno Awhie (Up to date)

export const personal = {
  name: "Orunor Awhie",
  firstName: "Orunor",
  lastName: "Awhie",
  role: "Full-Stack Web Developer",
  specialty: "React & Python Specialist",
  tagline: "Bridging intuitive, high-performance UI/UX with scalable backend architectures.",
  bio: "Results-driven Web Developer and WaaS Specialist with over 2 years of experience crafting modern, responsive web applications. Expert in engineering interactive user interfaces with React.js and Tailwind CSS, paired with robust backend integrations using Python, Django, and cloud APIs.",
  location: "Nigeria",
  locationNote: "Open to Remote & Hybrid (Lagos)",
  email: "oruno.awhie@gmail.com",
  phone: "+234 915 554 1159",
  website: "https://www.drakemarho.com",
  websiteDisplay: "www.drakemarho.com",
  github: "https://github.com/runo25",
  githubHandle: "github.com/runo25",
  linkedin: "https://www.linkedin.com/in/orunor-awhie-b07b171a7/",
  twitter: "https://x.com/AwhieOruno",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "JavaScript (ES6+) & TypeScript", level: 92 },
    { name: "Tailwind CSS & Modern CSS", level: 94 },
    { name: "Progressive Web Apps (PWA)", level: 88 },
    { name: "Component-Driven Architecture", level: 92 },
    { name: "Responsive UI/UX & Web Vitals", level: 95 },
  ],
  backend: [
    { name: "Python", level: 90 },
    { name: "Django & FastAPI", level: 86 },
    { name: "RESTful API Integration", level: 92 },
    { name: "Firebase (Auth / Firestore)", level: 82 },
    { name: "SQL & Relational Databases", level: 80 },
    { name: "C# & .NET Core", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub Workflows", level: 90 },
    { name: "Figma to Pixel-Perfect Code", level: 94 },
    { name: "Vite & Modern Build Tools", level: 90 },
    { name: "CI/CD & Cloud Deployments (Render / PythonAnywhere)", level: 85 },
    { name: "Postman & API Testing", level: 88 },
  ],
};

export const categoriesPills = [
  "Automotive & Luxury",
  "Social Platforms",
  "Fintech",
  "PWA Development",
  "SaaS",
  "E-Commerce",
  "Document Automation",
  "Hospitality",
  "Component Libraries",
];

export const allSkillsTicker = [
  "React.js", "Python", "Tailwind CSS", "TypeScript", "Django", "PWA Architecture",
  "REST APIs", "FastAPI", "Firebase", "Figma", "Vite", "JavaScript (ES6+)",
  "WeasyPrint", "State Management", "Git & CI/CD", "Responsive UI/UX", "Node.js", "C# .NET"
];

export const experience = [
  {
    id: 1,
    role: "Front-End & PWA Developer",
    company: "Remina App",
    period: "2025 — Present",
    type: "Full-Time",
    description: "Spearheaded front-end development of a Progressive Web Application (PWA) dedicated to seamless photo management and real-time media sharing.",
    highlights: [
      "Engineered highly responsive, app-like user interface in React.js with sub-100ms UI response times.",
      "Optimized media rendering, client-side caching, and state management for cross-device performance.",
      "Integrated secure backend APIs for instantaneous file synchronization and authenticated access.",
    ],
    tech: ["React.js", "PWA", "JavaScript ES6+", "REST APIs", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Founder & Lead Developer",
    company: "Code and Canvas",
    companyNote: "WaaS Agency",
    period: "Jun 2024 — Present",
    type: "Agency",
    description: "Established a productized Website-as-a-Service (WaaS) offering targeting SMEs, managing end-to-end delivery from discovery to deployment.",
    highlights: [
      "Architected a modular, reusable React component library and theme system, cutting site delivery time by 50%.",
      "Maintained live deployments, automated workflows, and continuous monitoring on Render & PythonAnywhere.",
      "Delivered high-converting, mobile-first web platforms for diverse business verticals.",
    ],
    tech: ["React.js", "Python", "Django", "Render", "Firebase"],
  },
  {
    id: 3,
    role: "Full-Stack Web Developer",
    company: "Independent Contracts",
    period: "Mar 2024 — Dec 2024",
    type: "Freelance",
    description: "Delivered bespoke web applications, interactive portals, and automated business tools for regional businesses.",
    highlights: [
      "Responsible for end-to-end design, full-stack development, database architecture, and hosting.",
      "Applied Figma and Adobe Photoshop design assets to produce cohesive digital branding with 98+ Lighthouse scores.",
      "Integrated custom booking flows, client management dashboards, and dynamic content.",
    ],
    tech: ["React.js", "Python", "Tailwind CSS", "REST APIs", "Figma"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Penxxaflor Atelier",
    subtitle: "Luxury Automotive Restoration & Motorsport Engineering Platform",
    url: "https://penxxaflor-atelier-main.vercel.app/",
    description: "Bespoke digital platform for a luxury coachbuilding and race-engineering atelier in Buenos Aires. Features live RPM/Lambda telemetry HUDs, interactive SVG dyno curve visualizers, a 6-stage build tracking portal with CMM micrometer tolerance ledgers, and a real-time commission configurator.",
    tech: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Telemetry HUD"],
    type: "Featured Platform",
    tag: "Luxury / Automotive",
    featured: true,
    badge: "Live Production App",
  },
  {
    id: 2,
    name: "Visible App",
    subtitle: "AI-Powered Social Copilot & Discovery Platform",
    url: "https://visibleapp.co/",
    description: "A verified AI-powered social platform for college students to connect with roommates, discover campus events, and access paid brand gigs with interactive RSVP flows and face-verified profile onboarding.",
    tech: ["React.js", "Interactive UI", "REST APIs", "PWA", "Tailwind CSS"],
    type: "Featured Platform",
    tag: "Social / AI",
    featured: true,
    badge: "Live Platform",
  },
  {
    id: 3,
    name: "Remina App",
    subtitle: "Progressive Web App for Photo & Media Management",
    url: "https://remina-app.com/",
    description: "Progressive Web App engineered for high-speed media organization, smart asset management, and seamless cross-device synchronization with offline support.",
    tech: ["React.js", "PWA", "State Management", "Tailwind CSS"],
    type: "Progressive Web App",
    tag: "PWA / Media",
    featured: true,
    badge: "Production App",
  },
  {
    id: 3,
    name: "Lois Braid",
    subtitle: "Dynamic E-Commerce & Service Booking Platform",
    url: "https://www.loisbraid.com",
    description: "Full-stack web application featuring an interactive React frontend, custom scheduling endpoints, high Lighthouse scores, and a scalable Django backend.",
    tech: ["React", "Tailwind CSS", "Python", "Django REST"],
    type: "Full-Stack Web App",
    tag: "E-Commerce / Booking",
    featured: true,
    badge: "Live Client Site",
  },
  {
    id: 4,
    name: "Enterprise Document Automation Engine",
    subtitle: "High-Precision Financial PDF & Contract Compiler",
    url: "https://github.com/runo25/format",
    description: "Dynamic document automation pipeline capable of transforming raw JSON data into legally compliant, pixel-perfect contracts and invoices with automated tax calculations and multi-currency formatting.",
    tech: ["Python", "JSON", "Jinja2", "WeasyPrint", "FastAPI"],
    type: "Backend Tool",
    tag: "Automation / FinTech",
    featured: false,
    badge: "Internal Engine",
  },
  {
    id: 5,
    name: "Modular Hospitality Platform",
    subtitle: "Multi-Tenant Hospitality & Reservation System",
    url: "https://github.com/runo25",
    description: "Scalable web platform for hotels and eateries featuring multi-tenant templates, real-time booking flows, and an admin dashboard for rapid property onboarding.",
    tech: ["React", "Firebase", "Firestore", "Auth"],
    type: "Web App",
    tag: "Hospitality / SaaS",
    featured: false,
    badge: "SaaS Platform",
  },
  {
    id: 6,
    name: "Prime Portfolio Platform",
    subtitle: "Dynamic Content-Managed Portfolio Generator",
    url: "https://primeportfolio.pythonanywhere.com",
    description: "Dynamic portfolio generation platform allowing users to securely update content, manage projects, and switch theme layouts in real time.",
    tech: ["React", "Tailwind CSS", "Django", "PythonAnywhere"],
    type: "Web App",
    tag: "CMS / Platform",
    featured: false,
    badge: "Live App",
  },
];

export const stats = [
  { value: 98, suffix: "%", label: "Client Satisfaction", desc: "Delivering reliable, pixel-perfect code on time" },
  { value: 50, suffix: "%", label: "Faster Build Times", desc: "Through reusable modular React component systems" },
  { value: 2, suffix: "+", label: "Years Experience", desc: "Building scalable production applications" },
  { value: 95, suffix: "%", label: "Process Time Saved", desc: "With automated document generation engines" },
];

export const services = [
  {
    id: 1,
    title: "Brand Identity & Design",
    desc: "We create cohesive brand identities mirroring your vision, from logos and design tokens to complete color schemes.",
    category: "Design",
  },
  {
    id: 2,
    title: "App & Frontend Design",
    desc: "We specialize in designing intuitive, highly responsive mobile and web interfaces tailored directly to your business goals.",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    desc: "Robust web applications built on modern React.js frontends and secure, high-throughput Python and Django APIs.",
    category: "Engineering",
  },
  {
    id: 4,
    title: "Interactive Prototyping",
    desc: "We develop functional, clickable interactive prototypes in code to validate and visualize complex workflows before launch.",
    category: "Prototyping",
  },
  {
    id: 5,
    title: "UI/UX & Design Systems",
    desc: "Our UI/UX design services focus on crafting elegant, accessible, and visually stunning digital products that convert.",
    category: "UI/UX",
  },
  {
    id: 6,
    title: "Website-as-a-Service (WaaS)",
    desc: "Productized web infrastructure for SMEs, featuring rapid onboarding, continuous maintenance, and zero downtime.",
    category: "Solutions",
  },
];

export const education = {
  degree: "Diploma in Computer Science",
  school: "Petroleum Training Institute",
  period: "Sep 2021 — May 2025",
  location: "Delta State, Nigeria",
};
