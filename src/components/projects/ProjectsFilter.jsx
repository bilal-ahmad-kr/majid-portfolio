const ProjectsFilter = ({ active, setActive, categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setActive(category)}
          className={
            active === category
              ? "bg-blue-600 text-white rounded-full px-5 py-2 font-semibold transition-all duration-200"
              : "bg-slate-100 text-slate-600 rounded-full px-5 py-2 font-medium hover:bg-slate-200 transition-all duration-200"
          }
        >
          {category}
        </button>

      ))}

    </div>
  );
};

export default ProjectsFilter;