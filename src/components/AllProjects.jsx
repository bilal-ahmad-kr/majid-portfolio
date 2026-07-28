import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";
import { ALL_PROJECTS, PROJECT_CATEGORIES } from "../data/content";

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects-grid" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>Full Portfolio</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            Every Project, One Place
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            Filter by category to see how we've automated, built, and grown
            businesses like yours.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                "rounded-full px-4 py-2 text-[13px] font-semibold transition-all " +
                (activeCategory === cat
                  ? "bg-[#1E5BFF] text-white shadow-[0_10px_24px_-8px_rgba(30,91,255,0.55)]"
                  : "border border-[#0F172A]/12 bg-white text-[#475569] hover:border-[#1E5BFF]/40 hover:text-[#1E5BFF]")
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.25)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold text-[#0F172A]">
                  <TrendingUp size={13} className="text-[#1E5BFF]" />
                  {p.impact}
                </span>
              </div>
              <div className="p-6">
                <span className="text-[12px] font-semibold uppercase tracking-wide text-[#1E5BFF]">
                  {p.category}
                </span>
                <h3 className="mt-1.5 flex items-center gap-1.5 text-[18px] font-bold text-[#0F172A]">
                  {p.title}
                  <ArrowUpRight
                    size={16}
                    className="text-[#94A3B8] transition-all group-hover:text-[#1E5BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#475569]">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-[15px] text-[#64748B]">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
