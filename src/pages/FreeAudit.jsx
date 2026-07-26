import Container from "../components/common/Container";
import Section from "../components/common/Section";

const FreeAudit = () => {
  return (
    <>
      <Section className="bg-slate-950 pt-36 pb-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-semibold text-blue-400">
              Free Audit
            </span>
            <h1 className="mt-6 text-5xl font-bold text-white">
              Get a Free Business Automation Audit
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Discover how AI automation and CRM systems can improve your lead management, reduce manual work and increase conversions.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Full Name</label>
                <input type="text" placeholder="Your full name" className="w-full rounded-xl border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Email Address</label>
                <input type="email" placeholder="you@company.com" className="w-full rounded-xl border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Business Type</label>
                <select className="w-full rounded-xl border border-slate-200 px-5 py-4 text-slate-900 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20">
                  <option value="">Select your industry</option>
                  <option>Roofing</option>
                  <option>HVAC</option>
                  <option>Plumbing</option>
                  <option>Solar</option>
                  <option>Real Estate</option>
                  <option>Cleaning</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Tell us about your current systems</label>
                <textarea rows="5" placeholder="What CRM or tools do you currently use? What are your biggest challenges?" className="w-full rounded-xl border border-slate-200 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"></textarea>
              </div>
              <button type="submit" className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-600/25">
                Request Free Audit
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default FreeAudit;