import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, TrendingUp, Check } from "lucide-react";
import { projectsService } from "../lib/cms";
import { SectionEyebrow, PrimaryButton } from "../components/ui/Shared";

function Skeleton() {
  return (
    <div className="bg-white">
      <div className="bg-[#0F172A] px-5 py-24">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="h-5 w-40 animate-pulse rounded-lg bg-slate-700" />
          <div className="h-12 w-3/4 animate-pulse rounded-xl bg-slate-700" />
          <div className="h-5 w-1/2 animate-pulse rounded-lg bg-slate-700" />
        </div>
      </div>
      <div className="px-5 py-20 max-w-4xl mx-auto space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-[64px] font-extrabold text-[#1E5BFF]">404</p>
      <h1 className="mt-2 text-[24px] font-extrabold text-[#0F172A]">Project Not Found</h1>
      <p className="mt-3 max-w-sm text-[15px] text-[#475569]">
        The project you're looking for doesn't exist or has been removed.
      </p>
      <Link to="/#projects-grid" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1E5BFF] px-5 py-3 text-[14px] font-semibold text-white">
        <ArrowLeft size={15} /> Back to Projects
      </Link>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);
    projectsService
      .getBySlugWithRelated(slug)
      .then(setProject)
      .catch((err) => {
        if (err?.code === "PGRST116") setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Skeleton />;
  if (notFound || !project) return <NotFound />;

  return (
    <article className="bg-white font-sans antialiased">
      <title>{project.seo_title || project.title} | MJD AI Automation</title>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F172A] px-5 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="pointer-events-none absolute -top-32 left-1/3 h-[380px] w-[380px] rounded-full bg-[#1E5BFF]/20 blur-[110px]" />
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Link to="/#projects-grid" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white">
              <ArrowLeft size={14} /> Back to projects
            </Link>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-8 flex items-center gap-3">
              <span className="rounded-full bg-[#1E5BFF]/10 px-3 py-1 text-[12.5px] font-semibold uppercase tracking-wide text-[#1E5BFF]">
                {project.category}
              </span>
              {project.services && (
                <Link to={`/services/${project.services.slug}`} className="text-[12.5px] font-medium text-white/60 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors">
                  {project.services.title}
                </Link>
              )}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-[34px] leading-[1.15] font-extrabold tracking-tight text-white md:text-[48px]">
              {project.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-5 max-w-lg text-[16px] leading-relaxed text-[#CBD5E1] md:text-[17px]">
              {project.short_description || project.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-4">
              {project.live_url && (
                <PrimaryButton href={project.live_url} target="_blank" rel="noopener noreferrer">
                  Visit Live Project <ArrowUpRight size={17} />
                </PrimaryButton>
              )}
              {project.impact && (
                <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-[14px] font-medium text-white border border-white/10">
                  <TrendingUp size={16} className="text-[#1E5BFF]" />
                  {project.impact}
                </div>
              )}
            </motion.div>
          </div>

          {/* Featured Image */}
          {project.image_url && (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                <img src={project.image_url} alt={project.title} className="h-auto w-full object-cover" />
              </div>
              <div className="pointer-events-none absolute -z-10 top-6 -right-6 h-32 w-32 rounded-full bg-[#1E5BFF]/20 blur-2xl" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Details & Tech Stack */}
      <section className="px-5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <h2 className="text-[22px] font-extrabold tracking-tight text-[#0F172A] md:text-[26px]">About the Project</h2>
            <div className="mt-5 prose prose-slate max-w-none text-[#475569] leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: project.description?.replace(/\n/g, '<br />') }} />
            </div>
            
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl shadow-sm border border-slate-100">
                    <img src={img} alt={`${project.title} gallery ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 h-fit">
            <h3 className="text-[18px] font-extrabold tracking-tight text-[#0F172A]">Technologies Used</h3>
            {project.tech?.length > 0 ? (
              <ul className="mt-5 space-y-4">
                {project.tech.map((tech) => (
                  <li key={tech} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] leading-relaxed font-medium text-[#334155]">{tech}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-[14px] text-[#64748B]">No specific technologies listed.</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:pb-28">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-[22px] font-extrabold tracking-tight text-white md:text-[26px]">Want results like this for your business?</h2>
            <p className="mt-2 max-w-md text-[14px] text-white/70">Let's discuss how we can build a similar solution tailored to your goals.</p>
          </div>
          <PrimaryButton href="/#contact">Start a Project <ArrowUpRight size={17} /></PrimaryButton>
        </motion.div>
      </section>
    </article>
  );
}
