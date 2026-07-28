import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TestimonialAndGallery from "../components/TestimonialAndGallery";
import MarqueeStrip from "../components/MarqueeStrip";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import TestimonialsWall from "../components/TestimonialsWall";
import FAQ from "../components/FAQ";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <TestimonialAndGallery />
      <MarqueeStrip />
      <WhyUs />
      <Services />
      <Portfolio />
      <TestimonialsWall />
      <FAQ />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}
