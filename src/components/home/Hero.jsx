import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            🚀 AI Automation • CRM • Paid Ads
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            AI Automation & CRM Systems That Turn
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {" "}
              More Leads{" "}
            </span>
            Into Booked Jobs.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We help home service businesses automate lead follow-up,
            appointment booking, CRM systems, AI voice agents and paid
            advertising to increase conversions and grow revenue.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-xl px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Book a Strategy Call
              <FaArrowRight />
            </a>

            <Link
              to="/projects"
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaPlay />
              View Projects
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">6+</h3>
              <p className="text-slate-500">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="text-slate-500">Custom Solutions</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-slate-500">Support</p>
            </div>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
            alt="AI Automation Dashboard"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;