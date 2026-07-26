import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Automated Lead Follow-up",
  "AI Appointment Booking",
  "CRM Pipeline Management",
  "Review Automation",
  "SMS & Email Automation",
  "Higher Conversion Rates",
];

const IndustryBenefits = () => {
  return (
    <Section className="bg-slate-50">
      <Container>

        <SectionHeader
          title="Benefits For Your Business"
          subtitle="Everything is designed to generate more qualified leads and close more customers."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CheckCircle size={24} />
              </div>

              <p className="font-medium text-slate-700">
                {item}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
};

export default IndustryBenefits;