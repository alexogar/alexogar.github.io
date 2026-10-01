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
    "Hands-on technical leader building resilient, connected frontend and developer platforms. I identify systemic engineering problems, implement foundations and turn successful patterns into reusable capabilities for other teams.",
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
    value: "~100",
    label: "microfrontend applications",
    detail: "Across ~20 teams using the foundation I architected and built",
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
    "When the unstable platform transferred to our team, I worked directly across its backend and frontend. I originated its safe-mode approach and contributed to the architecture and implementation that improved stability. Today, Autobahn serves approximately 300 development teams, with 250 external applications and 1,000 internal applications.",
  scope:
    "Alongside architecture and implementation, I have people-management responsibility across 20+ engineers in web, mobile, desktop and common services, with approximately six direct reports. That includes hiring, performance reviews, promotions and career progression.",
};

export const platformWork = [
  {
    title: "One design language, many applications",
    cvTitle: "Design system",
    tag: "React · Design systems · Accessibility",
    text: "Drove the shift from heterogeneous .NET, Java and older web UI approaches toward React. I lead design-system architecture and adoption, personally implemented the Figma integration, and guide React component development by engineers on the team.",
    detail:
      "Applications now look like members of the same family. UX and engineering work with the same design language, with Figma variables integrated into React components. Shared framework capabilities also cover authentication and consolidated regulatory and compliance concerns.",
    principle:
      "Adoption grows through self-service and capabilities that solve real problems for application teams.",
    cv: "Led React design-system architecture and adoption, personally implemented Figma integration, and guided component development. Unified application UI and established a shared design language between UX and engineering.",
  },
  {
    title: "Composable applications, connected experiences",
    cvTitle: "Microfrontends",
    tag: "Microfrontends · Architecture & delivery",
    text: "Defined the architecture, wrote the foundational implementation and owned delivery. Approximately 100 applications across 20 teams now use it: a standard path to split monoliths into reusable modules, release independently and compose connected workflows.",
    detail:
      "Modules access platform APIs and run with JavaScript and CSS isolation. I also originated the architectural direction to consolidate dozens of Corporate Bank payment and transaction portals into a unified client portal. That wider transformation is ongoing.",
    cv: "Defined the architecture and built the foundation, adopted by ~100 apps across ~20 teams. Standardized monolith decomposition, reusable modules and independent releases. Originated the ongoing consolidation of dozens of Corporate Bank portals toward a unified client portal.",
  },
  {
    title: "Keep working when dependencies fail",
    cvTitle: "Resilience & state continuity",
    tag: "Safe mode · Shared state",
    text: "Originated Autobahn’s safe-mode approach and contributed architecture and implementations. Applications can still launch and retain most functionality without the server; services can operate without downstream systems or a database, using selective client- and server-side write-behind caches.",
    detail:
      "I conceived the API for a shared user-preferences service that stores type-safe objects per user. Application teams use it to restore saved state after refreshes and microfrontend restarts, preserving the user’s context.",
    cv: "Originated the safe-mode approach and contributed architecture and implementations that preserve app launch and most functionality during dependency outages. Used selective client/server write-behind caching; conceived a type-safe user-preferences API to restore application state after refreshes and restarts.",
  },
  {
    title: "See the problem through the user’s session",
    cvTitle: "Diagnostics & analytics",
    tag: "Client diagnostics · Event taxonomy",
    text: "Implemented the JavaScript logging client and logging backend, and designed a support action to retrieve browser logs. Support engineers can investigate issues with users’ console logs, navigation history and actions.",
    detail:
      "I also implemented the client analytics tracker and designed a standard feature-event schema: action, object, subject, category and context. The shared analytics portal makes feature usage and user flows easier to explore for platform and application teams.",
    cv: "Implemented the JavaScript logger, logging backend and analytics tracker; designed support log retrieval and a standard feature-event schema. Support engineers can inspect browser logs and navigation/action history; teams can explore user flows.",
  },
  {
    title: "From a notification to the next useful action",
    cvTitle: "Connected notifications",
    tag: "Plexus Interop · Desktop, web & mobile",
    text: "Designed and developed Electron notification toasts and a Plexus action protocol that opens applications and specific screens with the notification’s context.",
    detail:
      "Integrated the same actions into browser applications and iOS/Android push notifications, connecting notifications to workflows across desktop, web and mobile.",
    cv: "Designed and built Electron toasts and a Plexus action protocol to open apps and screens with notification context. Integrated those actions into browser apps and iOS/Android push notifications.",
  },
  {
    title: "Make platform quality a shared capability",
    cvTitle: "Performance & accessibility",
    tag: "Microfrontend measurement · CDN · WCAG",
    text: "Developed a microfrontend equivalent of First Contentful Paint measurement. Platform and tenant teams can inspect application loading performance in the shared analytics portal. I conceived and architected CDN delivery of shared dependencies such as React, AG Grid and i18n so applications can reuse cached assets.",
    detail:
      "Defined the accessibility testing approach for the shared React framework and portal components. Accessibility is a platform requirement: a defect in a shared component affects every downstream application. Bundle-size discipline and performance matter for global users on constrained networks.",
    cv: "Developed a microfrontend equivalent of FCP measurement in the shared analytics portal. Conceived and architected CDN delivery of shared dependencies for cache reuse. Defined the accessibility testing approach for framework and portal components.",
  },
];

export const delivery = {
  title: "Reusable delivery patterns",
  text: "Driving Autobahn’s migration to GitHub and establishing reusable Actions/workflows for tenant teams, integrating CI/CD, code review, security and bank-wide SDLC controls. I also deployed the initial Argo CD projects to establish reusable GitOps patterns.",
  cv: "Established reusable GitHub Actions/workflows integrating CI/CD, review, security and bank-wide SDLC controls. Deployed initial Argo CD projects to establish GitOps patterns.",
};

export const aiWork = {
  title: "Design-system knowledge in developer workflows",
  text: "Grounded AI design and development skills in the bank’s design-system components and UX rules, with supporting skills for the component catalog and platform APIs. Developers use these tools; I drive adoption through knowledge-sharing sessions and an internal conference presentation.",
  pilot:
    "Autobahn Project Memory is my personal pilot combining graph-based knowledge and RAG. It brings together fragmented context across code, servers, infrastructure, firewalls and network configuration. It is a pilot, not a production-wide capability.",
  cv: "Grounded AI skills in the design system, component catalog and APIs; drove developer adoption through sessions and an internal conference presentation. Project Memory remains a personal graph/RAG pilot for platform knowledge.",
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
    text: "A native iOS reading product in public beta. I designed a time-based knowledge graph with character-specific knowledge gates to provide spoiler-free context for LLM-generated images and reader hints.",
    detail:
      "As founder and sole developer, I own the Swift/SwiftUI app, backend, AI pipelines, subscription payments, infrastructure, monitoring, observability, deployment and product decisions. I use coding agents and Codex as engineering multipliers, and set up a separate agent workflow that picks up feedback from Figma comments and updates Figma designs.",
    tags: ["Swift / SwiftUI", "Spoiler-free knowledge", "Product ownership"],
    url: "https://getlorely.com",
    link: "Visit Lorely",
    cv: "Designed a time-based knowledge graph with character-specific knowledge gates for spoiler-free LLM-generated images and reader hints. Own the Swift/SwiftUI app, backend, AI pipelines, subscription payments, infrastructure, monitoring, observability, deployment and product decisions. Use coding agents/Codex as engineering multipliers; set up an agent workflow that picks up Figma comments and updates Figma designs.",
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
    text: "Hands-on platform engineering and technical leadership for Autobahn: approximately 300 development teams, 250 external applications and 1,000 internal applications.",
    bullets: [
      "Joined leading a small indicative market-data application team; moved to Autobahn approximately nine months later.",
      "People-management responsibility across 20+ engineers and ~6 direct reports, including hiring, performance reviews, promotions and career progression.",
    ],
  },
  {
    company: "Sperasoft",
    role: "Team Lead",
    dates: "Nov 2008 – Feb 2012",
    text: "Led ~7 engineers with hands-on full-stack coding and client-facing planning. Client work included guild/item REST services for BioWare / EA’s Star Wars: The Old Republic, automated test orchestration for a Sony portal and a children’s MMO.",
    bullets: [],
  },
  {
    company: "YumaSoft",
    role: "Java Developer",
    dates: "Sep 2007 – Nov 2008",
    text: "Java, JavaScript and Flex engineering for client project Laplink EveryWhere, providing web/mobile access to users’ local Outlook/Exchange data and calendars.",
    bullets: [],
  },
];

export const education = {
  school: "Saint Petersburg State University",
  faculty: "Faculty of Mathematics and Mechanics",
  subject: "Computer Science and Applied Mathematics",
  dates: "2004 – 2009",
};
