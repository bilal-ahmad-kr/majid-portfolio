import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com",
    },
  ];

  return (
    <footer className="bg-[#0F172A] px-5 pt-16 pb-8 text-white/70">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Company */}
        <div>
          <div className="text-[18px] font-extrabold text-white">
            MJD <span className="text-[#1E5BFF]">AI</span>{" "}
            <span className="text-[#D90429]">Automation</span>
          </div>

          <p className="mt-3 text-[13.5px] leading-relaxed">
            Automate. Innovate. Grow. Reliable AI automation and web
            development for businesses ready to scale.
          </p>

          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:bg-[#1E5BFF] hover:border-[#1E5BFF] hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-[13px] font-bold uppercase tracking-wide text-white">
            Company
          </h3>

          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="hover:text-white transition-colors">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[13px] font-bold uppercase tracking-wide text-white">
            Services
          </h3>

          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                AI Automation
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Digital Marketing
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                AI Integration
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Web Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[13px] font-bold uppercase tracking-wide text-white">
            Contact
          </h3>

          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            <li>hello@mjdaiautomation.com</li>
            <li>+1 (302) 555-0139</li>
            <li>Remote-first · Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 flex flex-col gap-2 text-[12.5px] sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} MJD AI Automation. All rights reserved.
        </span>

        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}