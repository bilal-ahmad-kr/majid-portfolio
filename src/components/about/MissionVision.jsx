import Container from "../common/Container";

const MissionVision = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-8">

            <h3 className="text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              To help service businesses automate repetitive tasks, improve
              customer experience and increase revenue through AI.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">

            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              To become the leading AI automation partner for home service
              businesses worldwide.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default MissionVision;