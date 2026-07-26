import Container from "../common/Container";

const features = [
  "6+ Years Experience",
  "AI Automation Experts",
  "CRM Specialists",
  "Performance Marketing",
  "Dedicated Support",
  "Custom Solutions"
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <Container>

        <h2 className="text-center text-4xl font-bold">
          Why Choose Us
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                ✅
              </div>
              <h3 className="font-semibold text-lg text-slate-900">
                {feature}
              </h3>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;