import { Link } from "react-router-dom";
import Container from "../common/Container";

const ProjectNavigation = ({ currentProject, projects }) => {
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProject.id
  );

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <section className="border-y border-slate-200 py-10">
      <Container>

        <div className="flex flex-col justify-between gap-6 md:flex-row">

          <div>
            {previousProject && (
              <Link
                to={`/projects/${previousProject.slug}`}
                className="group block rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:border-blue-600"
              >
                <p className="text-sm text-slate-500">
                  Previous Project
                </p>

                <h3 className="mt-2 text-xl font-semibold transition group-hover:text-blue-600">
                  ← {previousProject.title}
                </h3>
              </Link>
            )}
          </div>

          <div className="text-right">
            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group block rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:border-blue-600"
              >
                <p className="text-sm text-slate-500">
                  Next Project
                </p>

                <h3 className="mt-2 text-xl font-semibold transition group-hover:text-blue-600">
                  {nextProject.title} →
                </h3>
              </Link>
            )}
          </div>

        </div>

      </Container>
    </section>
  );
};

export default ProjectNavigation;