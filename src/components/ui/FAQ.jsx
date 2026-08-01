import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionEyebrow } from "./Shared";
import { faqsService } from "../../lib/cms";

// Fallback FAQs for graceful degradation
const FALLBACK_FAQS = [
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

function FAQItem({ item, isOpen, onClick }) {
  const question = item.q || item.question || "";
  const answer = item.a || item.answer || "";
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15.5px] font-semibold text-[#0F172A]">{question}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF] transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus size={15} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14.5px] leading-relaxed text-[#475569]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ serviceId, section = "general", items: propItems } = {}) {
  const [open, setOpen] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(!propItems);

  useEffect(() => {
    if (propItems) {
      setFaqs(propItems);
      return;
    }
    faqsService
      .listPublished({ section, serviceId })
      .then((data) => setFaqs(data?.length ? data : FALLBACK_FAQS))
      .catch(() => setFaqs(FALLBACK_FAQS))
      .finally(() => setLoading(false));
  }, [section, serviceId, propItems]);

  const displayFaqs = loading ? FALLBACK_FAQS : faqs;

  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>Questions</SectionEyebrow>
          <h2 className="mx-auto mt-5 text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10">
          {displayFaqs.map((item, i) => (
            <FAQItem
              key={item.id || item.q || item.question || i}
              item={item}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
