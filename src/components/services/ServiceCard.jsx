import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {service.title}
      </h3>

      <p className="mb-6 leading-7 text-slate-600">
        {service.description}
      </p>

      <Link
        to="/services"
        className="font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700"
      >
        Learn More →
      </Link>

    </div>
  );
};

export default ServiceCard;