import SectionBadge from "./SectionBadge";

const SectionHeader = ({
  badge,
  title,
  description,
  center = true,
}) => {
  return (
    <div
      className={`mb-16 text-center mx-auto max-w-3xl`}
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}

      <h2 className="mt-5 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;