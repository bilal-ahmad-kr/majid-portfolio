import { Navigate, useParams } from "react-router-dom";

import { industries } from "../data/industries";

import IndustryHero from "../components/industries/IndustryHero";
import IndustryBenefits from "../components/industries/IndustryBenefits";
import IndustryServices from "../components/industries/IndustryServices";
import IndustryProcess from "../components/industries/IndustryProcess";
import IndustryCTA from "../components/industries/IndustryCTA";

const IndustryDetails = () => {
  const { slug } = useParams();

  const industry = industries.find(
    (item) => item.slug === slug
  );

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <IndustryHero industry={industry} />

      <IndustryBenefits />

      <IndustryServices
        services={[
          "AI Automation",
          "CRM Setup",
          "Lead Nurturing",
          "AI Voice Agent",
          "Google Ads",
          "Facebook Ads"
        ]}
      />

      <IndustryProcess />

      <IndustryCTA />
    </>
  );
};

export default IndustryDetails;