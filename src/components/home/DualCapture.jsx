import { FaCalendarAlt, FaPaperPlane } from "react-icons/fa";

const DualCapture = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Choose Your Next Step
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Whether you're ready to schedule a strategy call or simply want a
            custom solution, we've made it easy to get started.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Book Call */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
              <FaCalendarAlt />
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Book a Strategy Call
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Schedule a free consultation and discover how AI Automation,
              CRM systems and paid advertising can increase your conversions.
            </p>

            <ul className="mt-8 space-y-3 text-slate-700">
              <li>✔ 30-Minute Strategy Session</li>
              <li>✔ Business Growth Roadmap</li>
              <li>✔ AI Automation Recommendations</li>
              <li>✔ No Obligation</li>
            </ul>

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Book on Calendly
            </a>

          </div>

          {/* Inquiry Form */}

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-white">
              <FaPaperPlane />
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Submit an Inquiry
            </h3>

            <p className="mt-4 text-slate-600">
              Tell us about your business and we'll recommend the best solution.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 transition-colors duration-200 focus:ring-2 focus:ring-blue-600/20 px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-200 transition-colors duration-200 focus:ring-2 focus:ring-blue-600/20 px-5 py-4 outline-none focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border border-slate-200 transition-colors duration-200 focus:ring-2 focus:ring-blue-600/20 px-5 py-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-200 transition-colors duration-200 focus:ring-2 focus:ring-blue-600/20 px-5 py-4 outline-none focus:border-blue-600"
              ></textarea>

              <button
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DualCapture;