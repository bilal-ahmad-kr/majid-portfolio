import { Link } from "react-router-dom";
import { services } from "../../data/services";
import ServiceCard from "../services/ServiceCard";

const ServicesOverview = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            AI Solutions Built To Grow Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            From AI automation and CRM systems to paid advertising and
            landing pages, we help home service businesses scale faster.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.slice(0, 6).map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            to="/services"
            className="rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5"
          >
            View All Services
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;