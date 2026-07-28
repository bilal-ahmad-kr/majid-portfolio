import Navbar from "./Navbar";
import ServiceHero from "./ServiceHero";
import ServiceAbout from "./ServiceAbout";
import ServiceFeatures from "./ServiceFeatures";
import ServiceBenefits from "./ServiceBenefits";
import ServiceProcess from "./ServiceProcess";
import ServiceIndustries from "./ServiceIndustries";
import ServiceFAQ from "./ServiceFAQ";
import Contact from "./Contact";
import Footer from "./Footer";

// Renders a full service detail page from a single content object
// (see data/servicesContent.js). Reused by all 4 /services/* routes
// so every page stays structurally and visually identical.
export default function ServicePageTemplate({ data }) {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        image={data.heroImage}
      />
      <ServiceAbout
        heading={data.aboutHeading}
        paragraph={data.aboutParagraph}
        image={data.aboutImage}
      />
      <ServiceFeatures features={data.features} />
      <ServiceBenefits
        heading={data.benefitsHeading}
        benefits={data.benefits}
        image={data.benefitsImage}
      />
      <ServiceProcess steps={data.process} />
      <ServiceIndustries industries={data.industries} />
      <ServiceFAQ faqs={data.faqs} />
      <Contact />
      <Footer />
    </div>
  );
}
