import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

import { industries } from "../../data/industries";
import IndustryCard from "./IndustryCard";

const IndustryGrid = () => {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge="Industries"
          title="Industries We Serve"
          description="Helping home service businesses grow with AI automation, CRM systems and marketing."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
};

export default IndustryGrid;