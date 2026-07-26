import Container from "../common/Container";
import Section from "../common/Section";

const ProjectsHero = () => {
  return (
    <Section className="pt-36 pb-24 bg-slate-950">

      <Container>

        <div className="max-w-4xl">

          <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            Case Studies
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white leading-tight">
            Real Projects.
            Real Solutions.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Explore our AI automation,
            CRM implementation,
            paid advertising,
            AI voice agents
            and web development projects.
          </p>

        </div>

      </Container>

    </Section>
  );
};

export default ProjectsHero;