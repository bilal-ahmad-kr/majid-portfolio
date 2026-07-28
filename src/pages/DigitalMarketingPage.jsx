import ServicePageTemplate from "../components/ServicePageTemplate";
import { SERVICES_CONTENT } from "../data/servicesContent";

export default function DigitalMarketingPage() {
  return <ServicePageTemplate data={SERVICES_CONTENT["digital-marketing"]} />;
}