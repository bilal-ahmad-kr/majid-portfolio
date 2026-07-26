import Container from "../common/Container";

const ProjectStats = ({ outcome }) => {
  return (
    <section className="py-20">
      <Container>

        <div className="rounded-2xl bg-blue-50 border border-blue-100 p-10 shadow-sm">

          <h2 className="text-3xl font-bold text-blue-600">
            Outcome
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            {outcome}
          </p>

        </div>

      </Container>
    </section>
  );
};

export default ProjectStats;