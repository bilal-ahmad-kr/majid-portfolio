import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

import { Check } from "lucide-react";

const services = [
  "AI Automation",
  "CRM Setup",
  "Google Ads",
  "Facebook Ads",
  "Landing Pages",
  "Review Automation",
  "Lead Nurturing",
  "AI Voice Agent",
];

const IndustryServices = () => {
  return (
    <Section>
      <Container>

        <SectionHeader
          title="Services We Provide"
          subtitle="Solutions tailored specifically for your industry."
          center
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-900 shadow-sm"
            >
              <Check className="text-blue-600" size={20} />
              {service}
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
};

export default IndustryServices;