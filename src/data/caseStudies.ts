export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  role: string;
  context: string;
  contribution: string[];
  outcomes: string[];
  reflection: string;
  external?: { label: string; url: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "autobahn-platform",
    title: "From individual applications to shared frontend foundations",
    category: "Deutsche Bank · Autobahn · Platform engineering",
    description:
      "How I approach reusable frontend platforms, React design systems and microfrontend architecture across many application teams.",
    overview:
      "Platform work matters when it makes product teams independent rather than making every decision for them. At Deutsche Bank, my work on Autobahn has combined hands-on engineering, architecture and technical leadership.",
    role: "Director · Principal Software Engineer — architecture, foundational implementation, technical and people leadership",
    context:
      "Large organizations rarely start from one coherent frontend. Teams have different technology stacks, release processes and UX conventions. A central platform must make those differences manageable without becoming a bottleneck.",
    contribution: [
      "Defined and built foundations for composing independently delivered frontend modules, then helped application teams adopt them.",
      "Led React design-system architecture, translating design decisions into usable, accessible shared components and development patterns.",
      "Worked across frontend performance, application interoperability, developer experience and reusable delivery workflows.",
      "Stayed close to complex implementation work while leading engineers across web, mobile, desktop and shared services.",
    ],
    outcomes: [
      "Helped turn recurring application-level problems into shared capabilities that teams can reuse.",
      "Supported a shift toward more consistent experiences and a common development language across applications.",
      "The wider Autobahn platform serves hundreds of engineering teams; this is an organizational outcome, not a claim of sole authorship.",
    ],
    reflection:
      "The hard part of platform engineering is not building abstractions. It is earning adoption by making each application team's work easier, without hiding reliability, performance or accessibility costs.",
  },
  {
    slug: "plexus-interop",
    title: "Connecting applications that were never built together",
    category: "FINOS Plexus Interop · Open source",
    description:
      "My contribution to Plexus Interop: architecture and implementation of its web interoperability layer, later open-sourced through FINOS.",
    overview:
      "Financial workflows often span several independent applications. Plexus Interop provides a way for those applications to cooperate without requiring a single UI technology or a full rewrite.",
    role: "Web architecture, implementation and delivery; historical FINOS contribution",
    context:
      "A user's workflow can cross tools written by different teams, with different frameworks and life cycles. Point-to-point integrations do not scale well as the number of applications grows.",
    contribution: [
      "Architected the web part of the interoperability approach and implemented its initial working foundation.",
      "Built the communication patterns required to connect independent UI experiences.",
      "Helped move the idea from a specific implementation into a reusable technology that could be adopted by other teams.",
    ],
    outcomes: [
      "Enabled more coherent workflows between otherwise separate applications.",
      "The code was released as the FINOS Plexus Interop open-source project.",
      "The upstream repository is now archived; this case study describes historical work, not current upstream maintenance.",
    ],
    reflection:
      "Interoperability is most useful when teams retain ownership of their applications while users experience one connected workflow.",
    external: {
      label: "Explore archived FINOS repository",
      url: "https://github.com/finos/plexus-interop",
    },
  },
  {
    slug: "lorely",
    title: "Building a reading product end to end",
    category: "Lorely · Independent iOS product",
    description:
      "Lorely is my independent reading product combining native iOS engineering with spoiler-aware book knowledge and AI workflows.",
    overview:
      "Lorely explores how readers can get useful context about a book without having future plot details spoiled. The challenge is as much about reliable knowledge boundaries as it is about generating answers.",
    role: "Founder and sole developer — product, iOS, backend, AI and delivery",
    context:
      "Generic LLMs are good at answering questions, but readers need answers constrained to what has happened so far. A helpful reading companion must model that boundary rather than rely on a vague instruction not to spoil.",
    contribution: [
      "Built the native SwiftUI app and the services that support reading and AI-assisted book context.",
      "Designed chapter-aware knowledge and character-specific information boundaries to avoid revealing future events.",
      "Own the AI processing pipeline, infrastructure, observability, deployment, subscription integration and product decisions.",
      "Use coding agents to accelerate development while keeping architecture and product judgement in human hands.",
    ],
    outcomes: [
      "Created an independently developed product rather than a standalone technology demo.",
      "Explored a reusable approach to time-based knowledge and grounded, context-sensitive reader assistance.",
      "Product development is ongoing; these are architectural capabilities, not externally audited quality claims.",
    ],
    reflection:
      "Building a product myself keeps the engineering trade-offs concrete: latency, operating costs, user experience and trust all matter more than a clever AI demo.",
    external: { label: "Visit Lorely", url: "https://getlorely.com" },
  },
];
