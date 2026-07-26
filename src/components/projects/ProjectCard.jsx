import { Link } from "react-router-dom";
import ProjectTools from "./ProjectTools";
import ProjectOutcome from "./ProjectOutcome";

const ProjectCard = ({ project }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-64 w-full object-cover"
      />

      <div className="p-8">

        {/* Industry Badge */}
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
          {project.industry}
        </span>

        {/* Title */}
        <h3 className="mt-5 text-xl font-bold text-slate-900">
          {project.title}
        </h3>

        {/* Challenge */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Challenge
          </h4>

          <p className="mt-2 leading-7 text-slate-600">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mt-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Solution
          </h4>

          <p className="mt-2 leading-7 text-slate-600">
            {project.solution}
          </p>
        </div>

        {/* Tools */}
        <ProjectTools tools={project.tools} />

        {/* Outcome */}
        <ProjectOutcome outcome={project.outcome} />

        {/* Button */}
        <div className="mt-8">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            View Case Study →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;