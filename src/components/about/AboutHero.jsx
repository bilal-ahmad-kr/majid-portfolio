import Container from "../common/Container";
import Section from "../common/Section";

const AboutHero = () => {
  return (
    <Section className="bg-slate-950 pt-36 pb-24">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            About Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Helping Home Service Businesses Grow With AI
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            We build AI automation systems, CRM solutions and marketing
            strategies that help businesses generate more leads, book more
            appointments and increase revenue.
          </p>

        </div>

      </Container>
    </Section>
  );
};

export default AboutHero;