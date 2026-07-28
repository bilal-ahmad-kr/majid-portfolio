import {
  UserCheck,
  Unlock,
  Tag,
  LifeBuoy,
  Bot,
  Megaphone,
  Cpu,
  Code2,
} from "lucide-react";

/* ============================================================
   BRAND TOKENS (reference)
   primary #1E5BFF | navy #0F172A | white #FFFFFF
   bg #F8FAFC | accent red #D90429
   ============================================================ */

export const TESTIMONIALS = [
  {
    name: "Sarah Whitfield",
    role: "Founder, Whitfield Realty",
    quote:
      "MJD automated our entire lead follow-up process. What used to take our team 15 hours a week now runs itself, and our conversion rate is up significantly.",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    name: "Daniel Cho",
    role: "COO, Vantage Logistics",
    quote:
      "They didn't just build us a chatbot, they rebuilt how our dispatch team works. Responsive, transparent, and genuinely invested in our results.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    name: "Amelia Torres",
    role: "Marketing Director, Clinic Connect",
    quote:
      "Every milestone was communicated clearly, pricing never moved, and support didn't disappear after launch. Rare in this industry.",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "CEO, BrightPath Realty",
    quote:
      "Our new site plus their automation stack tripled our qualified leads in under two months. The ROI was obvious within weeks.",
    avatar: "https://i.pravatar.cc/150?img=51",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Ops Lead, StackRetail",
    quote:
      "Full ownership of our own systems was non-negotiable for us. MJD handed us the keys, literally, no lock-in, no hostage data.",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 5,
  },
  {
    name: "Marcus Reid",
    role: "Founder, Reid & Co.",
    quote:
      "Fixed pricing, fixed scope, zero surprises. That alone made them worth choosing over three other agencies we interviewed.",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
  },
];

export const MARQUEE_ITEMS = [
  "AI Automation",
  "Digital Marketing",
  "AI Integration",
  "Web Development",
  "Chatbot Development",
  "CRM Automation",
  "SaaS Products",
  "E-commerce Growth",
  "Workflow Automation",
  "Business Intelligence",
];

export const WHY_CARDS = [
  {
    icon: UserCheck,
    title: "No Vanishing",
    fear: "“They'll disappear mid-project.”",
    solution:
      "A dedicated point of contact, regular progress updates, and fast communication — every step of the way.",
  },
  {
    icon: Unlock,
    title: "Full Ownership",
    fear: "“I'll be locked into their platform.”",
    solution:
      "You own your website, AI automation, chatbot, CRM, domain, and all business data. No exceptions.",
  },
  {
    icon: Tag,
    title: "Fixed Pricing",
    fear: "“The price will keep increasing.”",
    solution:
      "Scope, timeline, and pricing are agreed before development begins — with no hidden surprises later.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Support",
    fear: "“After launch, I'll be on my own.”",
    solution:
      "Ongoing support and maintenance ensure your website and AI systems keep performing at their best.",
  },
];

export const SERVICES = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automate repetitive tasks, internal workflows, and operations with intelligent systems built around how your business actually runs.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven SEO, paid campaigns, and content strategy that convert visibility into measurable, compounding revenue.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Embed AI chatbots, copilots, and intelligent automations directly into the tools and platforms your team already uses.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, modern, conversion-focused websites and web apps engineered to scale as your business grows.",
  },
];

export const PROJECTS = [
  {
    title: "RetailFlow AI",
    category: "E-commerce Automation",
    image: "https://picsum.photos/seed/mjd-retailflow/900/700",
    impact: "+180% order processing speed",
    desc: "An AI-driven fulfillment pipeline that cut manual order handling to near zero.",
  },
  {
    title: "ClinicConnect",
    category: "Healthcare CRM + Chatbot",
    image: "https://picsum.photos/seed/mjd-clinicconnect/900/700",
    impact: "-65% patient response time",
    desc: "A HIPAA-conscious intake chatbot connected directly to the clinic's CRM.",
  },
  {
    title: "BrightPath Realty",
    category: "Web Platform + Lead Automation",
    image: "https://picsum.photos/seed/mjd-brightpath/900/700",
    impact: "+220% qualified leads",
    desc: "A rebuilt site paired with automated lead scoring and follow-up sequences.",
  },
  {
    title: "Vantage Logistics",
    category: "Workflow Automation",
    image: "https://picsum.photos/seed/mjd-vantage/900/700",
    impact: "12 hrs saved weekly",
    desc: "Dispatch and reporting workflows automated end-to-end across three teams.",
  },
];

// Extended project set for the dedicated /projects page.
// Built by expanding on PROJECTS above with more case studies across the
// same service categories. Images are pulled from picsum.photos (third-party).
export const ALL_PROJECTS = [
  ...PROJECTS,
  {
    title: "UrbanNest Properties",
    category: "Web Platform + Lead Automation",
    image: "https://picsum.photos/seed/mjd-urbannest/900/700",
    impact: "+165% site-to-lead rate",
    desc: "A rebuilt listings site with automated buyer inquiry routing and follow-up.",
  },
  {
    title: "PulseHealth Intake",
    category: "Healthcare CRM + Chatbot",
    image: "https://picsum.photos/seed/mjd-pulsehealth/900/700",
    impact: "-58% intake call volume",
    desc: "A patient-facing intake bot that syncs appointments straight into the CRM.",
  },
  {
    title: "CartLoop Commerce",
    category: "E-commerce Automation",
    image: "https://picsum.photos/seed/mjd-cartloop/900/700",
    impact: "+142% cart recovery rate",
    desc: "Automated cart-abandonment and restock flows layered onto an existing store.",
  },
  {
    title: "FleetSync Ops",
    category: "Workflow Automation",
    image: "https://picsum.photos/seed/mjd-fleetsync/900/700",
    impact: "9 hrs saved weekly",
    desc: "Route planning and driver reporting automated across a 40-vehicle fleet.",
  },
  {
    title: "Harborline Realty",
    category: "Web Platform + Lead Automation",
    image: "https://picsum.photos/seed/mjd-harborline/900/700",
    impact: "+190% qualified leads",
    desc: "A conversion-focused rebuild paired with automated lead scoring rules.",
  },
  {
    title: "MedBridge Connect",
    category: "Healthcare CRM + Chatbot",
    image: "https://picsum.photos/seed/mjd-medbridge/900/700",
    impact: "-70% response time",
    desc: "A triage chatbot that routes patients to the right department instantly.",
  },
  {
    title: "ShelfWise Retail",
    category: "E-commerce Automation",
    image: "https://picsum.photos/seed/mjd-shelfwise/900/700",
    impact: "+155% order accuracy",
    desc: "Inventory sync and order-processing automation across three sales channels.",
  },
  {
    title: "NorthPeak Logistics",
    category: "Workflow Automation",
    image: "https://picsum.photos/seed/mjd-northpeak/900/700",
    impact: "15 hrs saved weekly",
    desc: "End-to-end dispatch, invoicing, and reporting automation for a growing fleet.",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  ...Array.from(new Set(ALL_PROJECTS.map((p) => p.category))),
];

export const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most websites launch in 2–4 weeks and AI automation builds in 3–6 weeks, depending on scope. You'll get an exact timeline before any work begins.",
  },
  {
    q: "Do I own the website and automation systems after launch?",
    a: "Yes, fully. Your website, chatbot, CRM setup, domain, and all business data belong to you — with no platform lock-in.",
  },
  {
    q: "What happens if my project needs change mid-way?",
    a: "We scope carefully upfront, but if priorities shift we'll re-quote the specific change clearly before touching it — your original pricing stays intact for everything already agreed.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every project includes a post-launch support window, with ongoing maintenance plans available for ongoing peace of mind.",
  },
  {
    q: "Which industries do you work with?",
    a: "Real estate, healthcare, logistics, e-commerce, and professional services are our core focus, though our systems adapt to most service-based businesses.",
  },
  {
    q: "How does pricing work?",
    a: "Every project is fixed-price. We agree on scope and timeline together, quote a flat number, and that number doesn't move unless the scope does.",
  },
];

export const ARTICLES = [
  {
    title: "5 Signs Your Business Is Ready for AI Automation",
    excerpt:
      "Not every business needs automation on day one. Here's how to know when manual processes start costing more than they save.",
    date: "Jul 12, 2026",
    category: "AI Automation",
    image: "https://picsum.photos/seed/mjd-article1/700/500",
  },
  {
    title: "Why Fixed-Price Web Projects Beat Hourly Billing",
    excerpt:
      "Hourly billing quietly rewards slow work. Here's why a fixed scope keeps agencies and clients aligned from day one.",
    date: "Jun 28, 2026",
    category: "Web Development",
    image: "https://picsum.photos/seed/mjd-article2/700/500",
  },
  {
    title: "Chatbots vs. Copilots: What Your Business Actually Needs",
    excerpt:
      "The two get lumped together constantly, but they solve very different problems. We break down when to use each.",
    date: "Jun 09, 2026",
    category: "AI Integration",
    image: "https://picsum.photos/seed/mjd-article3/700/500",
  },
];

// Extended article set for the dedicated /blog page.
// Builds on ARTICLES above with more posts across the same categories.
// Images are pulled from picsum.photos (third-party).
export const ALL_ARTICLES = [
  ...ARTICLES,
  {
    title: "The Real Cost of Manual Data Entry",
    excerpt:
      "It rarely shows up as a line item, but manual entry quietly eats hours, accuracy, and morale. Here's how to spot it.",
    date: "May 30, 2026",
    category: "AI Automation",
    image: "https://picsum.photos/seed/mjd-article4/700/500",
  },
  {
    title: "SEO Basics Every Founder Should Understand",
    excerpt:
      "You don't need to become an SEO expert, but a few fundamentals will change how you brief every future hire or agency.",
    date: "May 14, 2026",
    category: "Digital Marketing",
    image: "https://picsum.photos/seed/mjd-article5/700/500",
  },
  {
    title: "How to Brief a Web Developer (Without the Guesswork)",
    excerpt:
      "A tight brief saves weeks of revisions. Here's the exact structure we ask every client to fill out before kickoff.",
    date: "Apr 22, 2026",
    category: "Web Development",
    image: "https://picsum.photos/seed/mjd-article6/700/500",
  },
  {
    title: "CRM Automation: Where Most Teams Start Too Big",
    excerpt:
      "The biggest automation failures come from trying to automate everything at once. Start with the highest-friction step.",
    date: "Apr 03, 2026",
    category: "AI Automation",
    image: "https://picsum.photos/seed/mjd-article7/700/500",
  },
  {
    title: "Paid Ads vs. SEO: What to Prioritize First",
    excerpt:
      "Budget is finite. Here's a practical framework for deciding which channel earns your first dollar.",
    date: "Mar 19, 2026",
    category: "Digital Marketing",
    image: "https://picsum.photos/seed/mjd-article8/700/500",
  },
  {
    title: "What 'AI Integration' Actually Means for Small Teams",
    excerpt:
      "It's not about replacing your team, it's about removing the parts of the job nobody wanted to do anyway.",
    date: "Mar 02, 2026",
    category: "AI Integration",
    image: "https://picsum.photos/seed/mjd-article9/700/500",
  },
];

export const ARTICLE_CATEGORIES = [
  "All",
  ...Array.from(new Set(ALL_ARTICLES.map((a) => a.category))),
];

export const FLOATING_IMAGES = [
  { src: "https://picsum.photos/seed/mjd-float1/500/650", className: "w-[46%] top-0 left-0", delay: 0 },
  { src: "https://picsum.photos/seed/mjd-float2/500/400", className: "w-[46%] top-6 right-0", delay: 0.6 },
  { src: "https://picsum.photos/seed/mjd-float3/500/420", className: "w-[42%] bottom-0 left-6", delay: 1.1 },
  { src: "https://picsum.photos/seed/mjd-float4/500/560", className: "w-[42%] bottom-4 right-4", delay: 1.6 },
];
