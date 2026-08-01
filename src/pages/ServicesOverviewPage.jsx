// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Bot,
//   Database,
//   Megaphone,
//   Search,
//   Users,
//   Filter,
//   RefreshCw,
//   PhoneCall,
//   ArrowUpRight,
//   Plus,
//   Minus,
// } from "lucide-react";
// import { SectionEyebrow } from "../components/ui/Shared";

// const SERVICES = [
//   {
//     icon: Bot,
//     title: "AI Automation & Workflow Solutions",
//     short:
//       "AI-powered systems that instantly respond to leads, answer questions, and route hot prospects to your sales team — 24/7.",
//     href: "/services/ai-automation-workflow",
//   },
//   {
//     icon: Database,
//     title: "GoHighLevel CRM Setup & Management",
//     short:
//       "Full CRM build-out and management so every lead, quote, and job is tracked in one system.",
//     href: "/services/gohighlevel-crm",
//   },
//   {
//     icon: Megaphone,
//     title: "Facebook Ads Management",
//     short:
//       "Targeted Facebook and Instagram campaigns built to generate qualified home service leads.",
//     href: "/services/facebook-ads",
//   },
//   {
//     icon: Search,
//     title: "Google Ads Management",
//     short:
//       "High-intent search campaigns that put your business in front of homeowners actively searching.",
//     href: "/services/google-ads",
//   },
//   {
//     icon: Users,
//     title: "Lead Generation Systems",
//     short:
//       "End-to-end systems that combine advertising, landing pages, and automated follow-up.",
//     href: "/services/lead-generation",
//   },
//   {
//     icon: Filter,
//     title: "Sales Funnel Design & Build",
//     short:
//       "Custom sales funnels that guide prospects from first click to booked estimate.",
//     href: "/services/sales-funnels",
//   },
//   {
//     icon: RefreshCw,
//     title: "CRM Setup & Migration",
//     short:
//       "Seamless migration of your existing customer and job data into a modern CRM.",
//     href: "/services/crm-migration",
//   },
//   {
//     icon: PhoneCall,
//     title: "AI Voice & Appointment Booking Automation",
//     short:
//       "AI voice and chat agents that answer calls, qualify leads, and book appointments.",
//     href: "/services/ai-voice-booking",
//   },
// ];

// const FAQS = [
//   {
//     q: "How long does it take to launch an AI automation system?",
//     a: "Most core automation and CRM builds are live within 1–3 weeks, depending on scope and integration requirements.",
//   },
//   {
//     q: "Do you work with businesses outside the roofing industry?",
//     a: "Yes. While roofing is our primary focus, we also work with HVAC, plumbing, solar, remodeling, landscaping, cleaning, pest control, and real estate businesses.",
//   },
//   {
//     q: "Can you manage our ads and CRM together?",
//     a: "Yes — this is our core offering. Running ads and automation together ensures every lead is followed up on instantly, which significantly improves return on ad spend.",
//   },
//   {
//     q: "Do we need to already have a CRM in place?",
//     a: "No. We can build a new CRM from scratch or migrate your existing data from spreadsheets or another platform.",
//   },
//   {
//     q: "What results should we expect?",
//     a: "Results vary by market and starting point. During onboarding we set clear, measurable goals around lead response time, booked appointments, and cost per booked job.",
//   },
// ];

// function ServiceTile({ service, index }) {
//   const Icon = service.icon;

//   return (
//     <motion.a
//       href={service.href}
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.45, delay: 0.04 * index }}
//       className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#1E5BFF]/40 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.25)]"
//     >
//       <div className="flex items-start justify-between">
//         <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E5BFF]/10 text-[#1E5BFF]">
//           <Icon size={20} />
//         </span>
//         <span className="text-[11px] font-semibold tracking-wider text-[#CBD5E1]">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>

//       <h3 className="mt-5 text-[15.5px] font-bold text-[#0F172A]">{service.title}</h3>
//       <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#64748B]">
//         {service.short}
//       </p>

//       <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E5BFF]">
//         Learn more
//         <ArrowUpRight
//           size={14}
//           className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//         />
//       </span>
//     </motion.a>
//   );
// }

// function FaqItem({ item, isOpen, onToggle }) {
//   return (
//     <div className="border-b border-[#E2E8F0] py-5">
//       <button
//         type="button"
//         onClick={onToggle}
//         className="flex w-full items-center justify-between gap-4 text-left"
//       >
//         <span className="text-[14.5px] font-semibold text-[#0F172A] md:text-[15.5px]">
//           {item.q}
//         </span>
//         <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0F172A]">
//           {isOpen ? <Minus size={14} /> : <Plus size={14} />}
//         </span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="overflow-hidden"
//           >
//             <p className="pt-3 text-[13.5px] leading-relaxed text-[#64748B] md:text-[14.5px]">
//               {item.a}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function ServicesOverview() {
//   const [openFaq, setOpenFaq] = useState(0);

//   return (
//     <section id="services" className="bg-[#F8FAFC] px-5 py-20 md:py-28">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <SectionEyebrow>Our Services</SectionEyebrow>
//           <h2 className="mt-5 text-[28px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
//             Eight systems. One growth engine.
//           </h2>
//           <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#64748B] md:text-[16.5px]">
//             Every service below is built to plug into the others — ranked in the order our
//             clients typically need them most. Tap any card for the full breakdown.
//           </p>
//         </motion.div>

//         <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {SERVICES.map((service, index) => (
//             <ServiceTile key={service.title} service={service} index={index} />
//           ))}
//         </div>
//       </div>

//       {/* FAQ */}
//       <div className="mx-auto mt-24 max-w-3xl">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5 }}
//         >
//           <SectionEyebrow>FAQ</SectionEyebrow>
//           <h2 className="mt-5 text-[24px] font-extrabold tracking-tight text-[#0F172A] md:text-[30px]">
//             Questions we hear before every project.
//           </h2>
//         </motion.div>

//         <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white px-6">
//           {FAQS.map((item, index) => (
//             <FaqItem
//               key={item.q}
//               item={item}
//               isOpen={openFaq === index}
//               onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Database,
  Megaphone,
  Search,
  Users,
  Filter,
  RefreshCw,
  PhoneCall,
  Code2,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";
import { SectionEyebrow } from "../components/ui/Shared";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Automation & Workflow Solutions",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    short:
      "AI-powered systems that instantly respond to leads, answer questions, and route hot prospects to your sales team — 24/7.",
    href: "/services/ai-automation-workflow",
  },
  {
    icon: Database,
    title: "GoHighLevel CRM Setup & Management",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    short:
      "Full CRM build-out and management so every lead, quote, and job is tracked in one system.",
    href: "/services/gohighlevel-crm",
  },
  {
    icon: Megaphone,
    title: "Facebook Ads Management",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    short:
      "Targeted Facebook and Instagram campaigns built to generate qualified home service leads.",
    href: "/services/facebook-ads",
  },
  {
    icon: Search,
    title: "Google Ads Management",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    short:
      "High-intent search campaigns that put your business in front of homeowners actively searching.",
    href: "/services/google-ads",
  },
  {
    icon: Users,
    title: "Lead Generation Systems",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80",
    short:
      "End-to-end systems that combine advertising, landing pages, and automated follow-up.",
    href: "/services/lead-generation",
  },
  {
    icon: Filter,
    title: "Sales Funnel Design & Build",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    short:
      "Custom sales funnels that guide prospects from first click to booked estimate.",
    href: "/services/sales-funnels",
  },
  {
    icon: RefreshCw,
    title: "CRM Setup & Migration",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    short:
      "Seamless migration of your existing customer and job data into a modern CRM.",
    href: "/services/crm-migration",
  },
  {
    icon: PhoneCall,
    title: "AI Voice & Appointment Booking Automation",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    short:
      "AI voice and chat agents that answer calls, qualify leads, and book appointments.",
    href: "/services/ai-voice-booking",
  },
  {
    icon: Code2,
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
    short:
      "Modern, scalable websites built to convert visitors into booked estimates and service calls.",
    href: "/services/web-development",
  },
];

const FAQS = [
  {
    q: "How long does it take to launch an AI automation system?",
    a: "Most core automation and CRM builds are live within 1–3 weeks, depending on scope and integration requirements.",
  },
  {
    q: "Do you work with businesses outside the roofing industry?",
    a: "Yes. While roofing is our primary focus, we also work with HVAC, plumbing, solar, remodeling, landscaping, cleaning, pest control, and real estate businesses.",
  },
  {
    q: "Can you manage our ads and CRM together?",
    a: "Yes — this is our core offering. Running ads and automation together ensures every lead is followed up on instantly, which significantly improves return on ad spend.",
  },
  {
    q: "Do we need to already have a CRM in place?",
    a: "No. We can build a new CRM from scratch or migrate your existing data from spreadsheets or another platform.",
  },
  {
    q: "What results should we expect?",
    a: "Results vary by market and starting point. During onboarding we set clear, measurable goals around lead response time, booked appointments, and cost per booked job.",
  },
];

function ServiceTile({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.a
      href={service.href}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: 0.04 * index }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all hover:-translate-y-1 hover:border-[#1E5BFF]/40 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.25)]"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1E5BFF] shadow-md">
          <Icon size={17} />
        </span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold tracking-wider text-white/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[15.5px] font-bold text-[#0F172A]">{service.title}</h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#64748B]">
          {service.short}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1E5BFF]">
          Learn more
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </motion.a>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E2E8F0] py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-[14.5px] font-semibold text-[#0F172A] md:text-[15.5px]">
          {item.q}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0F172A]">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-[13.5px] leading-relaxed text-[#64748B] md:text-[14.5px]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesOverview() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="services" className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="mt-5 text-[28px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
            Nine systems. One growth engine.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#64748B] md:text-[16.5px]">
            Every service below is built to plug into the others — ranked in the order our
            clients typically need them most. Tap any card for the full breakdown.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceTile key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-5 text-[24px] font-extrabold tracking-tight text-[#0F172A] md:text-[30px]">
            Questions we hear before every project.
          </h2>
        </motion.div>

        <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white px-6">
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openFaq === index}
              onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}