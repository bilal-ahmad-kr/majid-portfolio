import Container from "../common/Container";

const ProjectChallenge = ({ challenge }) => {
  return (
    <section className="py-20">
      <Container>

        <h2 className="text-3xl font-bold text-slate-900">
          Challenge
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {challenge}
        </p>

      </Container>
    </section>
  );
};

export default ProjectChallenge;