import { Link } from "react-router-dom";
import Container from "../common/Container";
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";

const RelatedProjects = ({ currentProject, projects }) => {
  const relatedProjects = projects
    .filter(
      (project) =>
        project.id !== currentProject.id &&
        project.category === currentProject.category
    )
    .slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <Section background="bg-slate-50">
      <Container>

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Related Projects
          </h2>

          <p className="mt-4 text-slate-600">
            Explore more projects from the same category.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Projects
          </Link>
        </div>

      </Container>
    </Section>
  );
};

export default RelatedProjects;