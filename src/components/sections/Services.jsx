import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "../ui/Shared";
import { servicesService } from "../../lib/cms";

// Icon name → dynamic import mapping (lucide icons stored as strings in DB)
// Falls back to a generic Bot icon for unknown icon names
function ServiceIcon({ iconName, size = 22, className = "" }) {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    if (!iconName) return;
    import("lucide-react")
      .then((mod) => {
        const Comp = mod[iconName];
        if (Comp) setIcon(() => Comp);
      })
      .catch(() => {});
  }, [iconName]);

  if (!Icon) {
    // Render a simple placeholder circle if icon hasn't loaded yet
    return <span className={`inline-block h-5 w-5 rounded-full bg-current ${className}`} />;
  }
  return <Icon size={size} className={className} />;
}

// Fallback static services for graceful degradation
const FALLBACK_SERVICES = [
  { id: "s1", slug: "ai-automation-workflow", title: "AI Automation", short_description: "Automate repetitive tasks, internal workflows, and operations with intelligent systems built around how your business actually runs." },
  { id: "s2", slug: "facebook-ads", title: "Digital Marketing", short_description: "Data-driven SEO, paid campaigns, and content strategy that convert visibility into measurable, compounding revenue." },
  { id: "s3", slug: "gohighlevel-crm", title: "AI Integration", short_description: "Embed AI chatbots, copilots, and intelligent automations directly into the tools and platforms your team already uses." },
  { id: "s4", slug: "web-development", title: "Web Development", short_description: "Fast, modern, conversion-focused websites and web apps engineered to scale as your business grows." },
];

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    servicesService
      .listPublished()
      .then((data) => setServices(data?.length ? data : FALLBACK_SERVICES))
      .catch(() => setServices(FALLBACK_SERVICES))
      .finally(() => setLoading(false));
  }, []);

  const displayServices = loading ? FALLBACK_SERVICES : services;

  return (
    <section id="services" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionEyebrow>What We Do</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[40px]">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#475569] md:text-[16.5px]">
            Four disciplines, one accountable team, built to move your business forward end to end.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayServices.map((s, i) => (
            <motion.div
              key={s.id || s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-slate-100 p-7 transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_20px_40px_-16px_rgba(30,91,255,0.3)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E5BFF]/10 transition-colors duration-300 group-hover:bg-[#1E5BFF]">
                {s.icon_name ? (
                  <ServiceIcon
                    iconName={s.icon_name}
                    size={22}
                    className="text-[#1E5BFF] transition-colors duration-300 group-hover:text-white"
                  />
                ) : (
                  <span className="h-5 w-5 rounded bg-[#1E5BFF]/30 group-hover:bg-white/30" />
                )}
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-[#0F172A]">{s.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[#475569]">
                {s.short_description || s.description || ""}
              </p>
              <Link
                to={`/services/${s.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#1E5BFF]"
              >
                Learn more <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
