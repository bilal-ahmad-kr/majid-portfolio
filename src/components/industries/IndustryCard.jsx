import { Link } from "react-router-dom";

const IndustryCard = ({ industry }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <img
        src={industry.image}
        alt={industry.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-8">

        <h3 className="text-xl font-bold text-slate-900">
          {industry.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {industry.description}
        </p>

        <Link
          to={`/industries/${industry.slug}`}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
        >
          Learn More →
        </Link>

      </div>

    </div>
  );
};

export default IndustryCard;