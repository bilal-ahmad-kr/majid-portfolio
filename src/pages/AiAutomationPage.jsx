import ServicePageTemplate from "../components/ServicePageTemplate";
import { SERVICES_CONTENT } from "../data/servicesContent";

export default function AIAutomationPage() {
  return <ServicePageTemplate data={SERVICES_CONTENT["ai-automation"]} />;
}
