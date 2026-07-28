import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionEyebrow } from "./ui/Shared";
import { ALL_ARTICLES, ARTICLE_CATEGORIES } from "../data/content";

export default function AllArticles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? ALL_ARTICLES
      : ALL_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <section id="blog-grid" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>All Articles</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            Every Post, One Place
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            Filter by topic to find the write-ups most relevant to what you're
            working on right now.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {ARTICLE_CATEGORIES.map((cat) => (
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
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {filtered.map((a, i) => (
            <motion.a
              href="#contact"
              key={a.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.2)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[12px] font-semibold text-[#1E5BFF]">
                  <span>{a.category}</span>
                  <span className="flex items-center gap-1 text-[#94A3B8] font-medium">
                    <Calendar size={12} /> {a.date}
                  </span>
                </div>
                <h3 className="mt-3 text-[16.5px] font-bold leading-snug text-[#0F172A]">
                  {a.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#475569]">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0F172A]">
                  Read article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-[15px] text-[#64748B]">
            No articles in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
