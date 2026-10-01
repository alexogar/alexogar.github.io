export const profile = {
  name: "Alexey Ogarkov",
  role: "Principal Software Engineer",
  focus: "Frontend & Developer Platforms",
  location: "Berlin, Germany",
  email: "alexey.ogarkov@gmail.com",
  github: "https://github.com/alexogar",
  linkedin: "https://www.linkedin.com/in/alexeyogarkov/",
  summary:
    "I build shared platforms that make engineering teams more effective — from the first implementation to capabilities hundreds of teams can use.",
  cvSummary:
    "Hands-on technical leader focused on frontend and developer platforms. I identify systemic engineering problems, build the first implementation, prove the pattern and turn it into reusable, self-service capabilities.",
};

export const operatingModel = [
  {
    title: "Find the friction",
    text: "Identify the systemic problem behind repeated work, fragile systems or disconnected experiences.",
  },
  {
    title: "Build the first version",
    text: "Get close to the code. Personally implement the foundation and prove that the approach works.",
  },
  {
    title: "Make it a platform",
    text: "Turn the proven pattern into a useful, self-service capability. Help teams adopt it and build on it.",
  },
];

export const impact = [
  {
    value: "~300",
    label: "engineering teams",
    detail: "Using the Autobahn platform",
  },
  {
    value: "100+",
    label: "connected applications",
    detail: "Through Plexus Interop at Deutsche Bank",
  },
  {
    value: "20+",
    label: "engineer organization",
    detail:
      "Across web, mobile, desktop and common services; ~6 direct reports",
  },
  {
    value: "10",
    label: "GitHub repositories",
    detail: "Personally migrated; ~100 in the next wave with the wider team",
  },
];

export const promotions = [
  { role: "Assistant Vice President", dates: "Feb 2012 – Jan 2017" },
  { role: "Vice President", dates: "Jan 2017 – Mar 2020" },
  { role: "Director", dates: "Mar 2020 – Present" },
];

export const autobahn = {
  introduction:
    "I joined Deutsche Bank in February 2012, leading a small indicative market-data application team. About nine months later, I moved to Autobahn: a critical access point to the bank’s applications, then serving around four applications.",
  foundation:
    "When the unstable platform transferred to our team, I worked directly across its backend and frontend, contributing substantial refactoring and stabilization. Over time, I became one of its central technical leaders. Today, Autobahn is used by approximately 300 engineering teams.",
  scope:
    "Alongside architecture and implementation, I have people-management responsibility across 20+ engineers in web, mobile, desktop and common services, with approximately six direct reports. That includes hiring, performance reviews, promotions and career progression.",
};

export const platformWork = [
  {
    title: "A frontend platform teams choose to use",
    tag: "React · Design systems · Accessibility",
    text: "Drove the shift from heterogeneous .NET, Java and older web UI approaches toward React as the primary UI framework. Adoption grows through self-service and useful shared capabilities.",
    detail:
      "The shared React application framework and design system connect Figma variables to components, with CDN delivery, authentication, consolidated regulatory and compliance concerns, user settings and state, logging and client diagnostics, alerts and user notifications, and application interoperability.",
    principle:
      "WCAG compliance is a platform requirement: a problem in a shared component propagates to every application. Bundle size and performance are equally material for global users on constrained networks.",
    cv: "Drove React modernization through a self-service application framework and design system, including Figma variables, CDN delivery, authentication, compliance, shared state, diagnostics and notifications. Made WCAG accessibility and bundle-size discipline platform requirements.",
  },
  {
    title: "Composable applications, connected experiences",
    tag: "Microfrontends · Architecture & delivery",
    text: "Defined the microfrontend architecture, wrote its foundational implementation and owned delivery. Teams can decompose monolithic applications into reusable blocks, render them in different contexts and access platform APIs with isolated JavaScript and CSS.",
    detail:
      "Originated and advanced the architectural direction to bring dozens of separate Corporate Bank payment and transaction portals into a unified client portal using microfrontends. This transformation is ongoing.",
    cv: "Defined and implemented the microfrontend foundation, with platform APIs and JavaScript/CSS isolation. Originated the ongoing architectural transformation toward a unified Corporate Bank client portal from dozens of payment and transaction portals.",
  },
  {
    title: "Build once. Give the next team a head start.",
    tag: "GitHub · CI/CD · GitOps",
    text: "Driving Autobahn’s migration to GitHub. Personally migrated the first 10 repositories, establishing patterns for source control, CI/CD, code review, security and Deutsche Bank-wide SDLC controls.",
    detail:
      "Reusable GitHub Actions and workflows give tenant teams a starting point. Approximately 100 repositories are in the next wave, supported by the wider team. I also deployed the first Argo CD projects to establish reusable GitOps deployment patterns.",
    cv: "Personally migrated the first 10 repositories to GitHub and established reusable Actions/workflows integrating CI/CD, review, security and bank-wide SDLC controls. ~100 repositories form the next wave with the wider team. Deployed the first Argo CD projects to establish GitOps patterns.",
  },
  {
    title: "The original mobile foundation",
    tag: "iOS · Objective-C",
    text: "Personally developed the original Autobahn iOS container in Objective-C, establishing the shared base for client-facing and internal mobile applications, including the Autobahn FX mobile suite.",
    detail:
      "Other engineers later rewrote the container in Swift. The contribution was the original production foundation and shared-platform approach.",
    cv: "Developed the original Objective-C Autobahn iOS container, the shared base for client-facing and internal apps including Autobahn FX. Later rewritten in Swift by other engineers.",
  },
];

export const aiWork = {
  title: "Exploring the next source of developer leverage",
  text: "When urgent platform problems allow, I experiment with ways to improve developer effectiveness: AI skills for text → Figma → code, grounded in the bank’s design-system components and UX rules.",
  pilot:
    "Autobahn Project Memory is my personal pilot combining graph-based knowledge and RAG. It brings together fragmented context across code, servers, infrastructure, firewalls and network configuration. It is a pilot, not a production-wide capability.",
  cv: "Experimenting with design-system-grounded AI skills for text → Figma → code. Personally piloting Autobahn Project Memory: graph-based knowledge and RAG across code, infrastructure and network context.",
};

export const projects = [
  {
    id: "plexus",
    title: "Plexus Interop",
    label: "Platform engineering · Open source",
    role: "Web architect & developer",
    status: "Historical FINOS contribution",
    text: "Applications built with different technologies, working together. I architected, developed and delivered the web implementation, enabling connected UI workflows across 100+ Deutsche Bank applications.",
    detail:
      "Open-sourced through FINOS. The upstream project is now archived; this is a historical contribution, with no claim of active upstream maintenance.",
    tags: ["TypeScript", "Interoperability", "Connected workflows"],
    url: "https://github.com/finos/plexus-interop",
    link: "Explore the archived project",
    cv: "Architected, developed and delivered the web implementation of Plexus Interop, connecting 100+ Deutsche Bank applications across technologies. Open-sourced through FINOS; upstream is now archived.",
  },
  {
    id: "lorely",
    title: "Lorely",
    label: "Independent product · Public beta",
    role: "Founder & sole developer",
    status: "Public beta",
    text: "A native iOS reading product, designed and built end-to-end. I own the app, backend, AI enrichment pipelines, infrastructure, observability, deployment and product decisions.",
    detail:
      "Built with Swift and SwiftUI. I use AI coding agents and Codex extensively as an engineering multiplier, while owning the design, implementation and technical decisions.",
    tags: ["Swift / SwiftUI", "AI pipelines", "Product ownership"],
    url: "https://getlorely.com",
    link: "Visit Lorely",
    cv: "Founder and sole developer of Lorely, a native iOS reading product in public beta. Own Swift/SwiftUI app, backend, AI enrichment, infrastructure, observability, deployment and product decisions. Use AI coding agents/Codex as an engineering multiplier.",
  },
];

export const expertise = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Kotlin", "Java", "Swift", "Python"],
  },
  {
    title: "Frontend & platform",
    items: [
      "React",
      "Microfrontends",
      "Design systems",
      "WCAG accessibility",
      "Performance & bundle size",
      "Application interoperability",
    ],
  },
  {
    title: "Mobile",
    items: ["Swift", "SwiftUI", "Objective-C (historical production)"],
  },
  {
    title: "Developer infrastructure",
    items: [
      "GitHub Actions",
      "CI/CD",
      "Argo CD",
      "GitOps",
      "CDN delivery",
      "Authentication integration",
      "Logging & diagnostics",
    ],
  },
  {
    title: "AI engineering",
    items: [
      "AI coding agents",
      "AI skills & tooling",
      "RAG",
      "Graph-based knowledge systems",
    ],
  },
];

export const career = [
  {
    company: "Deutsche Bank",
    role: "Director · Principal Software Engineer",
    dates: "Feb 2012 – Present",
    text: "Hands-on platform engineering and technical leadership for Autobahn, from stabilization to shared frontend and developer capabilities used by approximately 300 engineering teams.",
    bullets: [
      "Joined leading a small indicative market-data application team; moved to Autobahn approximately nine months later.",
      "People-management responsibility across 20+ engineers and ~6 direct reports, including hiring, performance reviews, promotions and career progression.",
    ],
  },
  {
    company: "Sperasoft",
    role: "Team Lead",
    dates: "Nov 2008 – Feb 2012",
    text: "Led about seven engineers while remaining primarily hands-on in full-stack engineering, with client-facing planning and requirements discussions.",
    bullets: [
      "BioWare / EA client work: REST services for guilds and items in Star Wars: The Old Republic.",
      "Automated test orchestration for a Sony portal and engineering on an MMO project for children.",
    ],
  },
  {
    company: "YumaSoft",
    role: "Java Developer",
    dates: "Sep 2007 – Nov 2008",
    text: "Worked on client project Laplink EveryWhere, enabling web and mobile access to a user’s local Outlook/Exchange data and calendar.",
    bullets: ["Java, JavaScript and some Flex across the product."],
  },
];

export const education = {
  school: "Saint Petersburg State University",
  faculty: "Faculty of Mathematics and Mechanics",
  subject: "Computer Science and Applied Mathematics",
  dates: "2004 – 2009",
};
