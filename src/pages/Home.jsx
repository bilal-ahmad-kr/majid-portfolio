import Hero from "../components/home/Hero";
import DualCapture from "../components/home/DualCapture";
import ServicesOverview from "../components/home/ServicesOverview";
import IndustriesOverview from "../components/home/IndustriesOverview";
import HowWeWork from "../components/home/HowWeWork";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import FAQSection from "../components/home/FAQSection";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <DualCapture />
      <ServicesOverview />
      <IndustriesOverview />
      <HowWeWork />
      <WhyChooseUs />
      <FeaturedProjects />
      <FAQSection />
      <FinalCTA />
    </>
  );
};

export default Home;