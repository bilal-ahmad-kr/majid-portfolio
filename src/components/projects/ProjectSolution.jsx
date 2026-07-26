import Container from "../common/Container";

const ProjectSolution = ({ solution }) => {
  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <h2 className="text-3xl font-bold text-slate-900">
          Solution
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {solution}
        </p>

      </Container>
    </section>
  );
};

export default ProjectSolution;