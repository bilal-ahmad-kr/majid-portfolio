import ServicePageTemplate from "../components/ServicePageTemplate";
import { SERVICES_CONTENT } from "../data/servicesContent";

export default function WebDevelopmentPage() {
  return <ServicePageTemplate data={SERVICES_CONTENT["web-development"]} />;
}
