import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";

const ProjectHeader = ({ project }) => {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <Container>

        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
          {project.industry}
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {project.solution}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-lg bg-slate-800 px-4 py-2"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <PrimaryButton to="/contact">
            Start Your Project
          </PrimaryButton>
        </div>

      </Container>
    </section>
  );
};

export default ProjectHeader;