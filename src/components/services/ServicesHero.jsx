import Container from "../common/Container";
import Section from "../common/Section";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";

const ServicesHero = () => {
  return (
    <Section className="pt-36 pb-24 bg-slate-950">

      <Container>

        <div className="max-w-4xl">

          <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            AI Automation Services
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
            Smart AI & Marketing Solutions
            For Home Service Businesses
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            We help businesses automate lead generation,
            follow-ups, appointment booking,
            CRM management and paid advertising
            using modern AI technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <PrimaryButton href="https://calendly.com">
              Book Strategy Call
            </PrimaryButton>

            <SecondaryButton
              to="/contact"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </SecondaryButton>

          </div>

        </div>

      </Container>

    </Section>
  );
};

export default ServicesHero;