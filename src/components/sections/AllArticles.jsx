import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionEyebrow } from "../ui/Shared";
import { blogsService } from "../../lib/cms";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function AllArticles() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    blogsService
      .listPublished()
      .then((data) => setBlogs(data || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Derive categories dynamically from fetched blogs
  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)))];

  const filtered =
    activeCategory === "All" ? blogs : blogs.filter((b) => b.category === activeCategory);

  return (
    <section id="blog-grid" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>All Articles</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            Every Post, One Place
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            Filter by topic to find the write-ups most relevant to what you're working on right now.
          </p>
        </div>

        {/* Category filter */}
        {!loading && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
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
        )}

        {loading && (
          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="animate-pulse rounded-2xl bg-slate-100 h-64" />
            ))}
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {filtered.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              >
                <Link
                  to={`/blog/${a.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.2)]"
                >
                  <div className="h-48 overflow-hidden">
                    {a.cover_image_url ? (
                      <img
                        src={a.cover_image_url}
                        alt={a.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-slate-100" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[12px] font-semibold text-[#1E5BFF]">
                      <span>{a.category}</span>
                      {(a.published_at || a.created_at) && (
                        <span className="flex items-center gap-1 text-[#94A3B8] font-medium">
                          <Calendar size={12} /> {formatDate(a.published_at || a.created_at)}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-[16.5px] font-bold leading-snug text-[#0F172A]">{a.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#475569]">{a.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0F172A]">
                      Read article
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="mt-14 text-center text-[15px] text-[#64748B]">
            No articles in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
