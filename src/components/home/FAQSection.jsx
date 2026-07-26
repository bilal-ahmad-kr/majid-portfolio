import Section from "../common/Section";
import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import Accordion from "../common/Accordion";

import { faqs } from "../../data/faqs";

const FAQSection = () => {
  return (
    <Section background="bg-white">
      <Container>

        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our AI automation, CRM and marketing services."
        />

        <div className="mx-auto max-w-4xl">
          <Accordion items={faqs} />
        </div>

      </Container>
    </Section>
  );
};

export default FAQSection;