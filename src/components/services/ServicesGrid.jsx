import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const ServicesGrid = () => {
  return (
    <Section>

      <Container>

        <SectionHeader
          badge="Our Services"
          title="Everything You Need To Grow"
          description="Complete AI automation, CRM and marketing services under one roof."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
};

export default ServicesGrid;