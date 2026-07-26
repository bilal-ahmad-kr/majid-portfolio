import { Link } from "react-router-dom";
import { industries } from "../../data/industries";
import IndustryCard from "../industries/IndustryCard";

const IndustriesOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
            Industries We Serve
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Helping Home Service Businesses Scale Faster
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            We build AI automation, CRM systems and marketing solutions
            tailored for home service businesses.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
            />
          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            to="/industries"
            className="inline-flex rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5"
          >
            View All Industries
          </Link>

        </div>

      </div>
    </section>
  );
};

export default IndustriesOverview;