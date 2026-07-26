import Container from "../common/Container";
import Section from "../common/Section";

const ContactHero = () => {
  return (
    <Section className="bg-slate-950 pt-36 pb-24">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            Contact
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Let's Grow Your Business
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Book a free strategy call or send us your project details.
          </p>

        </div>

      </Container>
    </Section>
  );
};

export default ContactHero;