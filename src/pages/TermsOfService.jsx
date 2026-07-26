import Container from "../components/common/Container";
import Section from "../components/common/Section";

const TermsOfService = () => {
  return (
    <>
      <Section className="bg-slate-950 pt-36 pb-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold text-white">Terms of Service</h1>
            <p className="mt-6 text-lg text-slate-300">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="prose prose-slate mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
            <p className="mt-4 leading-8 text-slate-600">
              By accessing and using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Services</h2>
            <p className="mt-4 leading-8 text-slate-600">
              MJD AI Automation provides AI automation, CRM implementation, lead generation and digital marketing services. The specific terms of each service engagement will be outlined in a separate agreement.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Intellectual Property</h2>
            <p className="mt-4 leading-8 text-slate-600">
              All content, designs and intellectual property on this website are owned by MJD AI Automation unless otherwise stated. You may not reproduce, distribute or create derivative works without our prior written consent.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-4 leading-8 text-slate-600">
              If you have any questions about these Terms, please contact us at hello@mjdautomation.com.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TermsOfService;