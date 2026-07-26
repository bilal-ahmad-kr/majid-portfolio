import Section from "../common/Section";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";

const FinalCTA = () => {
  return (
    <Section className="relative overflow-hidden bg-slate-950">

      {/* Background Blur */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Ready To Automate & Grow Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need AI automation, CRM implementation, lead generation
            or paid advertising, we're here to help you build systems that save
            time and increase conversions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <PrimaryButton href="https://calendly.com/" className="!bg-white !text-slate-900 hover:!bg-slate-100 !shadow-none">
              Book a Free Strategy Call
            </PrimaryButton>

            <SecondaryButton
              to="/contact"
              className="!border-slate-600 !bg-transparent !text-white hover:!bg-white hover:!text-slate-900"
            >
              Contact Us
            </SecondaryButton>

          </div>

        </div>

      </Container>

    </Section>
  );
};

export default FinalCTA;
