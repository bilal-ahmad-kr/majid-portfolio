import Container from "../components/common/Container";

import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import CalendlySection from "../components/contact/CalendlySection";
import ContactCTA from "../components/contact/ContactCTA";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="py-24">
        <Container>

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <CalendlySection />

              <div className="mt-10">
                <ContactInfo />
              </div>
            </div>

            <ContactForm />

          </div>

        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default Contact;