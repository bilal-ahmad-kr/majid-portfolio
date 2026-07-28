import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import Mission from "../components/Mission";
import HeadlineMarquee from "../components/HeadlineMarquee";
import HowWeWork from "../components/HowWeWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <AboutHero />
      <Mission />
      <HeadlineMarquee />
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
}
