import {
  Bot,
  Megaphone,
  Cpu,
  Code2,
  Workflow,
  MessageSquareText,
  Database,
  BarChart3,
  Search,
  Mail,
  Target,
  Layers,
  Puzzle,
  Zap,
  Boxes,
  Smartphone,
  Gauge,
  ShieldCheck,
  Building2,
  Stethoscope,
  ShoppingCart,
  Truck,
  Briefcase,
  GraduationCap,
  ClipboardList,
  Hammer,
  TrendingUp,
  Rocket,
  LineChart,
  Palette,
  PenTool,
} from "lucide-react";

/* ============================================================
   Shared "How We Work" steps used across all service pages.
   Kept identical to the homepage process for brand consistency,
   with a per-service icon override where useful.
   ============================================================ */
const baseProcess = (icons) => [
  {
    step: "01",
    icon: icons[0] || Search,
    title: "Understand",
    desc: "We start by learning your workflows, tools, and goals before proposing a single solution.",
  },
  {
    step: "02",
    icon: icons[1] || ClipboardList,
    title: "Plan",
    desc: "We map scope, timeline, and fixed pricing together, so everyone agrees before anything gets built.",
  },
  {
    step: "03",
    icon: icons[2] || Hammer,
    title: "Build",
    desc: "Our team builds in focused sprints with regular check-ins, so you always know where things stand.",
  },
  {
    step: "04",
    icon: icons[3] || TrendingUp,
    title: "Improve",
    desc: "After launch we monitor, support, and refine the system so performance keeps improving over time.",
  },
];

const sharedIndustries = [
  { icon: Building2, label: "Real Estate" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Truck, label: "Logistics" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: GraduationCap, label: "Education" },
];

/* ============================================================
   SERVICES_CONTENT — one entry per route:
   /services/ai-automation, /services/digital-marketing,
   /services/ai-integration, /services/web-development
   ============================================================ */
export const SERVICES_CONTENT = {
  "ai-automation": {
    slug: "ai-automation",
    icon: Bot,
    eyebrow: "AI Automation",
    heroTitle: "Automate the Work That Slows You Down",
    heroSubtitle:
      "We design and build AI-driven systems that replace manual, repetitive tasks so your team can focus on the work that actually grows the business.",
    heroImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=80",
    aboutHeading: "Intelligent systems built around how your business runs",
    aboutParagraph:
      "Most businesses lose hours every week to manual data entry, repetitive follow-ups, and disconnected tools. We map those workflows and rebuild them as automated systems, from lead intake to internal reporting, so information moves on its own and your team only steps in where judgment is actually needed.",
    aboutImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        icon: Workflow,
        title: "Workflow Automation",
        desc: "Multi-step processes across your tools automated end-to-end, from trigger to outcome.",
      },
      {
        icon: MessageSquareText,
        title: "Follow-Up Sequences",
        desc: "Automated, timely follow-ups with leads and clients so nothing falls through the cracks.",
      },
      {
        icon: Database,
        title: "CRM & Data Sync",
        desc: "Your tools kept in sync automatically, no more re-entering the same data twice.",
      },
      {
        icon: BarChart3,
        title: "Reporting Automation",
        desc: "Recurring reports and dashboards generated and delivered without anyone building them by hand.",
      },
    ],
    benefitsHeading: "What automation actually gets you back",
    benefitsImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Hours of manual work removed from your team's week, every week",
      "Fewer dropped leads and missed follow-ups",
      "Consistent processes that don't depend on any one person remembering the steps",
      "Real-time visibility into what's happening across your operations",
      "Systems that scale with you instead of requiring more headcount",
    ],
    process: baseProcess([Search, ClipboardList, Hammer, TrendingUp]),
    industries: sharedIndustries,
    faqs: [
      {
        q: "What kinds of tasks can actually be automated?",
        a: "Anything with a repeatable, rule-based pattern: lead routing, follow-up emails, data entry between tools, status updates, recurring reports, and more. We'll audit your workflows and tell you honestly what's worth automating first.",
      },
      {
        q: "Will this replace people on my team?",
        a: "No. Automation removes the repetitive parts of a role so your team can spend their time on judgment calls, relationships, and work that actually needs a human.",
      },
      {
        q: "How long does an automation build take?",
        a: "Most automation builds launch in 3–6 weeks depending on scope and how many tools are involved. You'll get an exact timeline before any work begins.",
      },
      {
        q: "Do I need new software to get started?",
        a: "Usually not. We build automations on top of the tools you already use wherever possible, and only recommend new software when it's genuinely the better option.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    icon: Megaphone,
    eyebrow: "Digital Marketing",
    heroTitle: "Turn Visibility Into Measurable Revenue",
    heroSubtitle:
      "Data-driven SEO, paid campaigns, and content strategy built to convert traffic into leads, not just impressions into vanity metrics.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80",
    aboutHeading: "Marketing that's judged on pipeline, not clicks",
    aboutParagraph:
      "We treat every campaign as a system with a measurable outcome attached. That means clear tracking from first click to closed deal, messaging built around what your actual buyers care about, and a monthly reporting rhythm that tells you exactly what's working and what we're changing next.",
    aboutImage:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        icon: Search,
        title: "SEO & Content",
        desc: "Technical SEO fixes and content built around what your buyers are actually searching for.",
      },
      {
        icon: Target,
        title: "Paid Campaigns",
        desc: "Google and social ad campaigns managed toward cost-per-lead targets, not just spend.",
      },
      {
        icon: Mail,
        title: "Email & Nurture",
        desc: "Automated nurture sequences that keep leads warm between first contact and close.",
      },
      {
        icon: LineChart,
        title: "Analytics & Reporting",
        desc: "Clear monthly reporting tied to leads and revenue, not just traffic and impressions.",
      },
    ],
    benefitsHeading: "What a proper growth engine gets you",
    benefitsImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "A steady, compounding flow of qualified leads instead of one-off traffic spikes",
      "Lower cost-per-lead as campaigns are tuned against real conversion data",
      "Content and SEO gains that keep paying off long after the work is done",
      "One clear source of truth for what's actually driving revenue",
      "A team that adjusts strategy monthly instead of set-and-forget campaigns",
    ],
    process: baseProcess([Search, Target, Rocket, LineChart]),
    industries: sharedIndustries,
    faqs: [
      {
        q: "How soon will I see results?",
        a: "Paid campaigns typically show early signal within 2–4 weeks. SEO and content compound more slowly, usually showing meaningful movement by month 3, with the biggest gains coming after that.",
      },
      {
        q: "Do you require long-term contracts?",
        a: "No. We work in monthly engagements and earn the renewal through results, not a lock-in contract.",
      },
      {
        q: "What platforms do you run campaigns on?",
        a: "Primarily Google Ads and Meta (Facebook/Instagram), with LinkedIn added for B2B clients where it makes sense for the audience.",
      },
      {
        q: "How is success measured?",
        a: "Against agreed cost-per-lead and pipeline targets set at the start of the engagement, not vanity metrics like impressions or likes.",
      },
    ],
  },

  "ai-integration": {
    slug: "ai-integration",
    icon: Cpu,
    eyebrow: "AI Integration",
    heroTitle: "Embed AI Directly Into How Your Team Works",
    heroSubtitle:
      "Chatbots, copilots, and intelligent automations built into the tools your team already uses, not another app they have to learn.",
    heroImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1800&q=80",
    aboutHeading: "AI that fits into your existing stack",
    aboutParagraph:
      "We don't hand you a generic chatbot and call it done. We connect AI directly to your CRM, support desk, or internal tools so it has the right context to actually help, whether that's answering customer questions, summarizing tickets, or drafting first-pass responses your team reviews and sends.",
    aboutImage:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        icon: MessageSquareText,
        title: "AI Chatbots",
        desc: "Customer-facing bots trained on your business that hand off to a human exactly when needed.",
      },
      {
        icon: Puzzle,
        title: "Tool Integrations",
        desc: "AI connected directly into your CRM, helpdesk, or internal systems, not a separate silo.",
      },
      {
        icon: Zap,
        title: "AI Copilots",
        desc: "Internal assistants that draft, summarize, and surface information for your team on demand.",
      },
      {
        icon: ShieldCheck,
        title: "Safe, Scoped AI",
        desc: "Guardrails and defined scope so AI stays accurate, on-brand, and within its lane.",
      },
    ],
    benefitsHeading: "What embedded AI actually changes",
    benefitsImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Faster first-response times for customers, day or night",
      "Less time spent digging through tools for information your team already has",
      "Consistent answers instead of quality depending on who's on shift",
      "AI that works inside your current tools, with no extra login for your team",
      "A system that improves as you feed it more real conversations and data",
    ],
    process: baseProcess([Search, Layers, Boxes, Gauge]),
    industries: sharedIndustries,
    faqs: [
      {
        q: "Will the AI give customers wrong information?",
        a: "We scope every integration tightly to your actual data and business rules, and build in clear handoff points to a human for anything outside that scope, so accuracy stays high.",
      },
      {
        q: "Can this connect to the CRM we already use?",
        a: "In most cases, yes. We work with common CRM, helpdesk, and support platforms, and will confirm compatibility with your specific stack before scoping the project.",
      },
      {
        q: "Is our data used to train public AI models?",
        a: "No. Your data stays scoped to your own integration and isn't used to train any public or third-party model.",
      },
      {
        q: "How long does an AI integration take to launch?",
        a: "Most integrations launch in 3–5 weeks depending on how many systems are involved and how much historical data needs to be connected.",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    icon: Code2,
    eyebrow: "Web Development",
    heroTitle: "Fast, Modern Websites Built to Convert",
    heroSubtitle:
      "Conversion-focused websites and web apps engineered to load fast, rank well, and scale as your business grows.",
    heroImage:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1800&q=80",
    aboutHeading: "Websites built as a growth tool, not just a brochure",
    aboutParagraph:
      "Every site we build starts with what you want visitors to do, not just what you want to say. That means clear calls to action, fast load times, mobile-first layouts, and a structure your team can actually update after launch without waiting on a developer for every small change.",
    aboutImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        icon: Palette,
        title: "Custom Design",
        desc: "A distinct, on-brand design system, not a generic template with your logo swapped in.",
      },
      {
        icon: Smartphone,
        title: "Responsive Builds",
        desc: "Fast, clean experiences across mobile, tablet, and desktop from day one.",
      },
      {
        icon: Gauge,
        title: "Performance & SEO",
        desc: "Built for speed and technical SEO fundamentals, so pages load fast and rank well.",
      },
      {
        icon: PenTool,
        title: "Easy Content Updates",
        desc: "A structure your team can maintain and update without touching code for routine changes.",
      },
    ],
    benefitsHeading: "What a properly built site changes",
    benefitsImage:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Higher conversion rates from clearer calls to action and faster load times",
      "Better search rankings from a technically sound, SEO-ready build",
      "A site that scales cleanly as you add pages, products, or features",
      "Full ownership, your domain, code, and content, with no platform lock-in",
      "Fewer support tickets thanks to a clean, maintainable structure",
    ],
    process: baseProcess([Search, PenTool, Hammer, Rocket]),
    industries: sharedIndustries,
    faqs: [
      {
        q: "How long does a typical website take?",
        a: "Most websites launch in 2–4 weeks depending on scope, page count, and how quickly content and feedback come back to us.",
      },
      {
        q: "Do I own the website after launch?",
        a: "Yes, fully. Your domain, code, and content belong to you, with no platform lock-in and no recurring licensing fees to us.",
      },
      {
        q: "Can I update the site myself after launch?",
        a: "Yes. We build on a structure that lets you update text, images, and routine content without needing a developer for every change.",
      },
      {
        q: "Do you handle hosting and maintenance?",
        a: "We can set up hosting and offer ongoing maintenance plans, or hand everything off cleanly if you'd rather manage it in-house.",
      },
    ],
  },
};

export const SERVICES_LIST = Object.values(SERVICES_CONTENT);
