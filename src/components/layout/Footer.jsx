import { Link } from "react-router-dom";
import Container from "../common/Container";

import {
  footerQuickLinks,
  footerServices,
  socialLinks,
} from "../../data/footer";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      <Container>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400">
              MJD AI
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Helping home service businesses automate their operations,
              generate more qualified leads and grow with AI-powered systems.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {footerQuickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-4">

              {footerServices.map((service) => (
                <li
                  key={service}
                  className="text-slate-400"
                >
                  {service}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <p className="text-slate-400">
              hello@mjdautomation.com
            </p>

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Book a Free Strategy Call
            </a>

            <div className="mt-8 flex gap-4">

              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                  >
                    <Icon />
                  </a>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-800 py-6 text-center text-sm text-slate-500 lg:flex-row">

          <p>
            © {new Date().getFullYear()} MJD AI Automation. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link to="/privacy-policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>

            <Link to="/terms-of-service" className="hover:text-blue-400 transition">
              Terms of Service
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;