import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Check, TrendingUp } from "lucide-react";
import { SectionEyebrow, PrimaryButton } from "../ui/Shared";
import { supabase } from "../../lib/supabase";

/**
 * Shared layout for a single service detail page.
 * Pass serviceSlug (e.g. "web-development") to auto-load related projects.
 */
export default function ServiceDetailTemplate({
  eyebrow = "Service",
  title,
  image,
  imageAlt,
  short,
  detail,
  features = [],
  stack = [],
  backHref = "/services",
  serviceSlug,
}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!serviceSlug) return;
    supabase
      .from("services")
      .select("id")
      .eq("slug", serviceSlug)
      .single()
      .then(({ data: svc }) => {
        if (!svc) return null;
        return supabase
          .from("projects")
          .select("*")
          .eq("service_id", svc.id)
          .eq("published", true)
          .order("sort_order", { ascending: true });
      })
      .then((res) => {
        if (res?.data) setProjects(res.data);
      })
      .catch(() => {});
  }, [serviceSlug]);

  return (
    <article className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0F172A] px-5 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="pointer-events-none absolute -top-32 left-1/3 h-[380px] w-[380px] rounded-full bg-[#1E5BFF]/20 blur-[110px]" />
        <div className="relative max-w-6xl mx-auto">
          <motion.a
            href={backHref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            All services
          </motion.a>

          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
                <SectionEyebrow>{eyebrow}</SectionEyebrow>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-[30px] leading-[1.15] font-extrabold tracking-tight text-white md:text-[42px]">
                {title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#CBD5E1] md:text-[16.5px]">
                {short}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8">
                <PrimaryButton href="#contact">Get Started <ArrowUpRight size={17} /></PrimaryButton>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                <img src={image} alt={imageAlt} className="h-[320px] w-full object-cover md:h-[380px]" />
              </div>
              <div className="pointer-events-none absolute -z-10 top-6 -right-6 h-32 w-32 rounded-full bg-[#1E5BFF]/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How it works + Features ── */}
      <section className="px-5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <h2 className="text-[22px] font-extrabold tracking-tight text-[#0F172A] md:text-[26px]">How it works</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#475569] md:text-[16px]">{detail}</p>
            {stack.length > 0 && (
              <div className="mt-8">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#94A3B8]">Technologies &amp; platforms used</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-[#F1F5F9] px-3.5 py-1.5 text-[12.5px] font-medium text-[#475569]">{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
            <h2 className="text-[18px] font-extrabold tracking-tight text-[#0F172A]">Key features &amp; benefits</h2>
            <ul className="mt-5 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[14px] leading-relaxed text-[#334155]">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies (only shown when DB projects exist for this service) ── */}
      {projects.length > 0 && (
        <section className="bg-[#F8FAFC] px-5 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <SectionEyebrow>Case Studies</SectionEyebrow>
            <h2 className="mt-4 text-[26px] font-extrabold tracking-tight text-[#0F172A] md:text-[32px]">Real Results from This Service</h2>
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: i * 0.07 }} className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]">
                  {p.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img src={p.image_url} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                      {p.impact && (
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-bold text-[#0F172A]">
                          <TrendingUp size={12} className="text-[#1E5BFF]" />{p.impact}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-5">
                    {p.category && <span className="text-[11.5px] font-semibold uppercase tracking-wide text-[#1E5BFF]">{p.category}</span>}
                    <h3 className="mt-1.5 flex items-center gap-1.5 text-[17px] font-bold text-[#0F172A]">
                      {p.title}<ArrowUpRight size={15} className="text-[#94A3B8] transition-all group-hover:text-[#1E5BFF]" />
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#475569]">{p.description}</p>
                    {p.tech?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => <span key={t} className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#475569]">{t}</span>)}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="px-5 pb-20 md:pb-28">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-[22px] font-extrabold tracking-tight text-white md:text-[26px]">Ready to put this to work for your business?</h2>
            <p className="mt-2 max-w-md text-[14px] text-white/70">We'll map this service into a full growth system built for your market.</p>
          </div>
          <PrimaryButton href="#contact">Get Your Growth System <ArrowUpRight size={17} /></PrimaryButton>
        </motion.div>
      </section>
    </article>
  );
}
