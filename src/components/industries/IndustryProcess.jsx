import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

const steps = [
  "Discovery Call",
  "Business Analysis",
  "CRM Setup",
  "Automation Build",
  "Testing",
  "Launch & Support",
];

const IndustryProcess = () => {
  return (
    <Section className="bg-slate-50">
      <Container>

        <SectionHeader
          title="Our Process"
          subtitle="Simple, transparent and results-driven."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
};

export default IndustryProcess;