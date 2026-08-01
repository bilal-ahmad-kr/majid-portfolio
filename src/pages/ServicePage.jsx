import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Check, TrendingUp } from "lucide-react";
import { SectionEyebrow, PrimaryButton } from "../components/ui/Shared";
import { servicesService, projectsService, faqsService } from "../lib/cms";
import ServiceHero from "../components/sections/ServiceHero";
import ServiceAbout from "../components/services/ServiceAbout";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceBenefits from "../components/services/ServiceBenefits";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceIndustries from "../components/services/ServiceIndustries";
import ServiceFAQ from "../components/services/ServiceFAQ";

// ─── Loading Skeleton ─────────────────────────────────────────
function Skeleton({ className }) {
  return (
    <div className={`animate-pulse rounded-xl bg-slate-200 ${className}`} />
  );
}

function ServicePageSkeleton() {
  return (
    <div className="bg-white">
      <div className="bg-[#0F172A] px-5 py-24">
        <div className="max-w-6xl mx-auto space-y-4">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-12 w-36" />
        </div>
      </div>
      <div className="px-5 py-20 max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-8 w-10 rounded-lg" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 404 Page ─────────────────────────────────────────────────
function ServiceNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-[64px] font-extrabold text-[#1E5BFF]">404</p>
      <h1 className="mt-2 text-[24px] font-extrabold text-[#0F172A]">Service Not Found</h1>
      <p className="mt-3 max-w-sm text-[15px] text-[#475569]">
        The service page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1E5BFF] px-5 py-3 text-[14px] font-semibold text-white"
      >
        <ArrowLeft size={15} /> View All Services
      </Link>
    </div>
  );
}

// ─── Case Studies Section ──────────────────────────────────────
function CaseStudies({ projects }) {
  if (!projects.length) return null;
  return (
    <section className="bg-[#F8FAFC] px-5 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow>Case Studies</SectionEyebrow>
        <h2 className="mt-4 text-[26px] font-extrabold tracking-tight text-[#0F172A] md:text-[32px]">
          Real Results from This Service
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]"
            >
              {p.image_url && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image_url}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                  {p.impact && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-bold text-[#0F172A]">
                      <TrendingUp size={12} className="text-[#1E5BFF]" />{p.impact}
                    </span>
                  )}
                </div>
              )}
              <div className="p-5">
                {p.category && (
                  <span className="text-[11.5px] font-semibold uppercase tracking-wide text-[#1E5BFF]">
                    {p.category}
                  </span>
                )}
                <h3 className="mt-1.5 flex items-center gap-1.5 text-[17px] font-bold text-[#0F172A]">
                  {p.title}
                  <ArrowUpRight size={15} className="text-[#94A3B8] transition-all group-hover:text-[#1E5BFF]" />
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#475569]">{p.description}</p>
                {p.tech?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#475569]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Dynamic Service Page ─────────────────────────────────
export default function ServicePage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [projects, setProjects] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);

    servicesService
      .getBySlug(slug)
      .then(async (svc) => {
        setService(svc);
        // Load related data in parallel
        const [relatedProjects, relatedFaqs] = await Promise.all([
          projectsService.listByService(svc.id).catch(() => []),
          faqsService.listByService(svc.id).catch(() => []),
        ]);
        setProjects(relatedProjects);
        setFaqs(relatedFaqs);
      })
      .catch((err) => {
        if (err?.code === "PGRST116") setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <ServicePageSkeleton />;
  if (notFound || !service) return <ServiceNotFound />;

  // Map DB columns → component prop shapes
  const heroData = {
    eyebrow: service.eyebrow || service.title,
    title: service.hero_title || service.title,
    subtitle: service.hero_subtitle || service.short_description || service.description,
    image: service.hero_image_url,
  };

  const features = (service.features ?? []).map((f) =>
    typeof f === "string" ? { title: f, desc: "" } : { title: f.title || f.text || "", desc: f.description || f.desc || "" }
  );

  const benefits = (service.benefits ?? []).map((b) =>
    typeof b === "string" ? b : b.title || b.text || ""
  );

  const process = (service.process ?? []).map((s, idx) => ({
    step: String(idx + 1).padStart(2, "0"),
    title: s.title || "",
    desc: s.description || s.desc || "",
    icon: null,
  }));

  const industries = (service.industries ?? []).map((ind) =>
    typeof ind === "string" ? { label: ind, icon: null } : { label: ind.name || ind.label || "", icon: null }
  );

  // Merge DB standalone FAQs + inline service.faqs JSONB
  const inlineFaqs = (service.faqs ?? []).map((f) => ({
    q: f.question || f.q || "",
    a: f.answer || f.a || "",
  }));
  const allFaqs = [
    ...faqs.map((f) => ({ q: f.question, a: f.answer })),
    ...inlineFaqs,
  ];

  return (
    <div className="font-sans antialiased">
      {/* SEO title */}
      <title>{service.seo_title || service.title} | MJD AI Automation</title>

      <ServiceHero
        eyebrow={heroData.eyebrow}
        title={heroData.title}
        subtitle={heroData.subtitle}
        image={heroData.image}
      />

      {/* About section — only render if data exists */}
      {(service.about_heading || service.about_paragraph) && (
        <ServiceAbout
          heading={service.about_heading}
          paragraph={service.about_paragraph}
          image={service.about_image_url}
        />
      )}

      {/* Features */}
      {features.length > 0 && <ServiceFeatures features={features} />}

      {/* Benefits */}
      {benefits.length > 0 && (
        <ServiceBenefits
          heading={service.benefits_heading}
          benefits={benefits}
          image={service.benefits_image_url}
        />
      )}

      {/* Process */}
      {process.length > 0 && <ServiceProcess steps={process} />}

      {/* Industries */}
      {industries.length > 0 && <ServiceIndustries industries={industries} />}

      {/* FAQs */}
      {allFaqs.length > 0 && <ServiceFAQ faqs={allFaqs} />}

      {/* Related Projects / Case Studies */}
      <CaseStudies projects={projects} />

      {/* CTA */}
      <section className="px-5 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 md:flex-row md:items-center md:p-12"
        >
          <div>
            <h2 className="text-[22px] font-extrabold tracking-tight text-white md:text-[26px]">
              Ready to put this to work for your business?
            </h2>
            <p className="mt-2 max-w-md text-[14px] text-white/70">
              We'll map this service into a full growth system built for your market.
            </p>
          </div>
          <PrimaryButton href="#contact">
            Get Your Growth System <ArrowUpRight size={17} />
          </PrimaryButton>
        </motion.div>
      </section>
    </div>
  );
}
