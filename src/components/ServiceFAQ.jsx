import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15.5px] font-semibold text-[#0F172A]">{item.q}</span>
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
            <p className="pb-5 text-[14.5px] leading-relaxed text-[#475569]">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceFAQ({ faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>Questions</SectionEyebrow>
          <h2 className="mx-auto mt-5 text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
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
