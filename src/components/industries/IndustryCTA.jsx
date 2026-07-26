import Container from "../common/Container";
import Section from "../common/Section";
import PrimaryButton from "../common/PrimaryButton";

const IndustryCTA = () => {
  return (
    <Section className="bg-slate-950">

      <Container>

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready To Grow Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Book a free strategy call and discover how AI Automation can
            increase your leads and conversions.
          </p>

          <div className="mt-10">
            <PrimaryButton to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Strategy Call
            </PrimaryButton>
          </div>

        </div>

      </Container>

    </Section>
  );
};

export default IndustryCTA;