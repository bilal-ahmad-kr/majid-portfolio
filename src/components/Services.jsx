import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";
import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>What We Do</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            Four disciplines, one accountable team, built to move your
            business forward end to end.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-slate-100 p-7 transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_20px_40px_-16px_rgba(30,91,255,0.3)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E5BFF]/10 transition-colors duration-300 group-hover:bg-[#1E5BFF]">
                  <Icon size={22} className="text-[#1E5BFF] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-[#0F172A]">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#475569]">{s.desc}</p>
                <Link
                  to={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#1E5BFF]"
                >
                  Learn more <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
