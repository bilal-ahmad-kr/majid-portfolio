const ProjectTools = ({ tools }) => {
  return (
    <div className="mt-5">
      <h4 className="mb-3 text-lg font-semibold text-slate-900">
        Tools Used
      </h4>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectTools;