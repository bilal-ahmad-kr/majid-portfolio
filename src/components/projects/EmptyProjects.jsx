const EmptyProjects = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center bg-slate-50">
      <h3 className="text-2xl font-bold text-slate-900">
        No Projects Found
      </h3>

      <p className="mt-3 text-slate-600">
        There are currently no projects available in this category.
      </p>
    </div>
  );
};

export default EmptyProjects;