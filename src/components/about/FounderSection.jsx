import Container from "../common/Container";

const FounderSection = () => {
  return (
    <section className="py-24">
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="Muhammad Majid"
            className="rounded-2xl shadow-lg"
          />

          <div>

            <span className="text-blue-600 font-semibold">
              Founder
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Muhammad Majid
            </h2>

            <p className="mt-2 text-lg text-slate-500">
              Founder & AI Automation Specialist
            </p>

            <p className="mt-8 leading-8 text-slate-600">
              With more than six years of experience, Muhammad Majid helps
              home service businesses implement AI automation, CRM systems,
              paid advertising and lead nurturing solutions that improve
              efficiency and business growth.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default FounderSection;