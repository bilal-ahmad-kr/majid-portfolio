import Container from "../components/common/Container";
import Section from "../components/common/Section";

const PrivacyPolicy = () => {
  return (
    <>
      <Section className="bg-slate-950 pt-36 pb-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-6 text-lg text-slate-300">
              Your privacy matters to us. This policy outlines how we handle your data.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="prose prose-slate mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
            <p className="mt-4 leading-8 text-slate-600">
              We collect information that you provide directly to us, including your name, email address, company name and any other information you choose to provide when filling out forms on our website.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">How We Use Your Information</h2>
            <p className="mt-4 leading-8 text-slate-600">
              We use the information we collect to provide, maintain and improve our services, to communicate with you about our products and services, and to respond to your enquiries.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Data Security</h2>
            <p className="mt-4 leading-8 text-slate-600">
              We implement appropriate technical and organisational measures to protect the security of your personal data against unauthorised access, alteration, disclosure or destruction.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-4 leading-8 text-slate-600">
              If you have any questions about this Privacy Policy, please contact us at hello@mjdautomation.com.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PrivacyPolicy;