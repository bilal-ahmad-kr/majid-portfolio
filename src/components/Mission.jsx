import { motion } from "framer-motion";
import { Bot, Megaphone, Cpu, Code2, Target } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";

const WHAT_WE_DO = [
  { icon: Bot, label: "AI Automation" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Cpu, label: "AI Integration" },
  { icon: Code2, label: "Web Development" },
];

export default function Mission() {
  return (
    <section id="about" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-2">
        {/* What we do */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>What We Do</SectionEyebrow>
          <h2 className="mt-5 text-[28px] font-extrabold tracking-tight text-[#0F172A] md:text-[34px]">
            We turn manual, repetitive work into intelligent systems.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#475569] md:text-[16.5px]">
            MJD AI Automation designs and builds AI-driven automation,
            chatbots, and CRM integrations alongside modern websites and
            growth-focused marketing, so every part of your business runs
            faster and stays connected.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {WHAT_WE_DO.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F8FAFC] px-4 py-3.5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E5BFF]/10 text-[#1E5BFF]">
                    <Icon size={18} />
                  </span>
                  <span className="text-[13.5px] font-semibold text-[#0F172A]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 text-white md:p-10"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] shadow-[0_10px_20px_-6px_rgba(30,91,255,0.55)]">
            <Target size={22} className="text-white" />
          </span>
          <h2 className="mt-6 text-[24px] font-extrabold tracking-tight md:text-[28px]">
            Our Mission
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75 md:text-[16.5px]">
            To give growing businesses the same automation and technology
            advantages usually reserved for large companies, delivered with
            transparent pricing, real ownership, and a team that stays
            accountable long after launch.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <div className="text-[22px] font-extrabold">50+</div>
              <div className="mt-1 text-[12px] text-white/60">Projects delivered</div>
            </div>
            <div>
              <div className="text-[22px] font-extrabold">98%</div>
              <div className="mt-1 text-[12px] text-white/60">Client retention</div>
            </div>
            <div>
              <div className="text-[22px] font-extrabold">24h</div>
              <div className="mt-1 text-[12px] text-white/60">Response time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
