import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionEyebrow } from "../ui/Shared";
import { blogsService } from "../../lib/cms";

// Fallback articles for graceful degradation
const FALLBACK = [
  {
    id: "a1", slug: null, title: "5 Signs Your Business Is Ready for AI Automation",
    excerpt: "Not every business needs automation on day one. Here's how to know when manual processes start costing more than they save.",
    published_at: "2026-07-12", category: "AI Automation",
    cover_image_url: "https://picsum.photos/seed/mjd-article1/700/500",
  },
  {
    id: "a2", slug: null, title: "Why Fixed-Price Web Projects Beat Hourly Billing",
    excerpt: "Hourly billing quietly rewards slow work. Here's why a fixed scope keeps agencies and clients aligned from day one.",
    published_at: "2026-06-28", category: "Web Development",
    cover_image_url: "https://picsum.photos/seed/mjd-article2/700/500",
  },
  {
    id: "a3", slug: null, title: "Chatbots vs. Copilots: What Your Business Actually Needs",
    excerpt: "The two get lumped together constantly, but they solve very different problems. We break down when to use each.",
    published_at: "2026-06-09", category: "AI Integration",
    cover_image_url: "https://picsum.photos/seed/mjd-article3/700/500",
  },
];

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    blogsService
      .listPublished({ limit: 3 })
      .then((data) => setArticles(data?.length ? data : FALLBACK))
      .catch(() => setArticles(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  const displayArticles = loading ? FALLBACK : articles;

  return (
    <section id="blogs" className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>Insights</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            From the Blog
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {displayArticles.map((a, i) => {
            const href = a.slug ? `/blog/${a.slug}` : "#contact";
            const image = a.cover_image_url || a.image;
            const date = a.published_at || a.date;
            const CardEl = a.slug ? Link : "a";
            const cardProps = a.slug ? { to: href } : { href };
            return (
              <motion.div
                key={a.id || a.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CardEl
                  {...cardProps}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.2)]"
                >
                  <div className="h-48 overflow-hidden">
                    {image ? (
                      <img
                        src={image}
                        alt={a.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-slate-100" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[12px] font-semibold text-[#1E5BFF]">
                      <span>{a.category}</span>
                      {date && (
                        <span className="flex items-center gap-1 text-[#94A3B8] font-medium">
                          <Calendar size={12} /> {formatDate(date)}
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
                </CardEl>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
