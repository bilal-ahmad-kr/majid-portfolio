import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ServiceHero from "../sections/ServiceHero";
import ServiceAbout from "./ServiceAbout";
import ServiceFeatures from "./ServiceFeatures";
import ServiceBenefits from "./ServiceBenefits";
import ServiceProcess from "./ServiceProcess";
import ServiceIndustries from "./ServiceIndustries";
import ServiceFAQ from "./ServiceFAQ";
import { SectionEyebrow } from "../ui/Shared";
import { supabase } from "../../lib/supabase";

// Renders a full service detail page from a single content object
// (see data/servicesContent.js). Reused by all 4 /services/* routes
// so every page stays structurally and visually identical.
export default function ServicePageTemplate({ data, serviceSlug }) {

  console.log("Service Data:", data);

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
      .then((res) => { if (res?.data) setProjects(res.data); })
      .catch(() => {});
  }, [serviceSlug]);

  return (
    <div className="font-sans antialiased">
      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        image={data.heroImage}
      />
      <ServiceAbout
        heading={data.aboutHeading}
        paragraph={data.aboutParagraph}
        image={data.aboutImage}
      />
      <ServiceFeatures features={data.features} />
      <ServiceBenefits
        heading={data.benefitsHeading}
        benefits={data.benefits}
        image={data.benefitsImage}
      />
      <ServiceProcess steps={data.process} />
      <ServiceIndustries industries={data.industries} />
      <ServiceFAQ faqs={data.faqs} />

      {/* Case Studies from Supabase */}
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
                    </div>
                  )}
                  <div className="p-5">
                    {p.category && <span className="text-[11.5px] font-semibold uppercase tracking-wide text-[#1E5BFF]">{p.category}</span>}
                    <h3 className="mt-1.5 flex items-center gap-1.5 text-[17px] font-bold text-[#0F172A]">{p.title}<ArrowUpRight size={15} className="text-[#94A3B8] group-hover:text-[#1E5BFF]" /></h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#475569]">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
