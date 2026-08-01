import { motion } from "framer-motion";
import { Search, ClipboardList, Hammer, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "../ui/Shared";
import * as LucideIcons from "lucide-react";

const FALLBACK_STEPS = [
  {
    step: "01",
    icon: "Search",
    title: "Understand",
    desc: "We start by learning your workflows, bottlenecks, and goals before proposing a single solution.",
  },
  {
    step: "02",
    icon: "ClipboardList",
    title: "Plan",
    desc: "We map scope, timeline, and fixed pricing together, so everyone agrees before anything gets built.",
  },
  {
    step: "03",
    icon: "Hammer",
    title: "Build",
    desc: "Our team builds in focused sprints with regular check-ins, so you always know exactly where things stand.",
  },
  {
    step: "04",
    icon: "TrendingUp",
    title: "Improve",
    desc: "After launch we monitor, support, and refine the system so performance keeps improving over time.",
  },
];

const FALLBACK_CONTENT = {
  process_eyebrow: "Our Process",
  process_title: "How We Work",
  process_description: "A simple, transparent process from first conversation to long-term support."
};

export default function HowWeWork({ content }) {
  const data = content || FALLBACK_CONTENT;
  const steps = content?.process_steps || FALLBACK_STEPS;

  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>{data.process_eyebrow}</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            {data.process_title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            {data.process_description}
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on large screens */}
          <div className="pointer-events-none absolute top-[52px] left-0 right-0 hidden h-px bg-slate-200 lg:block" />

          {steps.map((s, i) => {
            const Icon = LucideIcons[s.icon] || LucideIcons.Search;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-slate-100 bg-[#F8FAFC] p-7 text-left transition-all hover:-translate-y-1.5 hover:border-transparent hover:bg-white hover:shadow-[0_20px_40px_-16px_rgba(30,91,255,0.3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_10px_20px_-6px_rgba(30,91,255,0.55)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} className="text-white" />
                  </span>
                  <span className="text-[26px] font-extrabold text-slate-200">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-[#0F172A]">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#475569]">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
