import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SectionEyebrow } from "./Shared";
import { projectsService } from "../../lib/cms";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    projectsService
      .listFeatured()
      .then(setProjects)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="bg-[#F8FAFC] px-5 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>Our Work</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">Projects That Made an Impact</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">Real systems, shipped for real businesses, with measurable outcomes attached.</p>
        </div>

        {loading && <p className="mt-14 text-center text-[14px] text-[#64748B]">Loading…</p>}

        {!loading && projects.length === 0 && (
          <p className="mt-14 text-center text-[14px] text-[#64748B]">No featured projects yet — mark projects as Featured in the admin dashboard.</p>
        )}

        {!loading && projects.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2">
            {projects.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group block overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.25)]">
                <div className="relative h-56 overflow-hidden">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="h-full w-full bg-[#E2E8F0]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                  {p.impact && (
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold text-[#0F172A]">
                      <TrendingUp size={13} className="text-[#1E5BFF]" />{p.impact}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-[#1E5BFF]">{p.category}</span>
                  <h3 className="mt-1.5 flex items-center gap-1.5 text-[19px] font-bold text-[#0F172A]">{p.title}<ArrowUpRight size={16} className="text-[#94A3B8] transition-all group-hover:text-[#1E5BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#475569]">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
