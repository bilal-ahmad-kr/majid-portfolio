import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react";

import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { SectionEyebrow } from "./ui/Shared";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white px-5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14 lg:grid-cols-2">
        {/* Left: image + details */}
        <div>
          <SectionEyebrow>Let's Talk</SectionEyebrow>
          <h2 className="mt-5 text-[30px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
            Start Your Project
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#475569] md:text-[16.5px]">
            Tell us what's slowing your business down. We'll reply within one
            business day with next steps, no obligation.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/mjd-contact/900/560"
              alt="MJD AI Automation team"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="mt-7 space-y-4">
            <div className="flex items-center gap-3 text-[14.5px] text-[#334155]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                <Mail size={16} />
              </span>
              hello@mjdaiautomation.com
            </div>
            <div className="flex items-center gap-3 text-[14.5px] text-[#334155]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                <Phone size={16} />
              </span>
              +1 (302) 555-0139
            </div>
            <div className="flex items-center gap-3 text-[14.5px] text-[#334155]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                <MapPin size={16} />
              </span>
              Remote-first · Serving clients worldwide
            </div>
          </div>

          <div className="mt-7 flex gap-3">
            {[FaLinkedin, FaInstagram, FaFacebook, FaXTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0F172A] transition-colors hover:bg-[#1E5BFF] hover:text-white hover:border-[#1E5BFF]"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-7 md:p-9">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E5BFF]/10 text-[#1E5BFF]">
                <Send size={22} />
              </div>
              <h3 className="mt-5 text-[19px] font-bold text-[#0F172A]">Message sent</h3>
              <p className="mt-2 text-[14px] text-[#475569]">
                Thanks, {form.name.split(" ")[0] || "there"} — we'll be in touch within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                  Full name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14.5px] text-[#0F172A] outline-none transition-colors focus:border-[#1E5BFF]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                  Email address
                </label>
                <input
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14.5px] text-[#0F172A] outline-none transition-colors focus:border-[#1E5BFF]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#0F172A]">
                  Project details
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Tell us what you're looking to build or automate..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14.5px] text-[#0F172A] outline-none transition-colors focus:border-[#1E5BFF]"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E5BFF] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(30,91,255,0.55)] transition-all hover:-translate-y-0.5"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
