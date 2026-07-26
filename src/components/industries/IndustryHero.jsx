import Container from "../common/Container";
import Section from "../common/Section";

const IndustryHero = () => {
  return (
    <Section className="bg-slate-950 pt-36 pb-24">

      <Container>

        <div className="max-w-4xl">

          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            Industries
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            AI Solutions Built For Your Industry
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Every industry has different challenges. We build customised AI automation,
            CRM and marketing systems designed for your business.
          </p>

        </div>

      </Container>

    </Section>
  );
};

export default IndustryHero;