import Hero from "../components/sections/Hero";
import TestimonialAndGallery from "../components/sections/TestimonialAndGallery";
import MarqueeStrip from "../components/ui/MarqueeStrip";
import WhyUs from "../components/sections/WhyUs";
import Services from "../components/sections/Services";
import Portfolio from "../components/ui/Portfolio";
import TestimonialsWall from "../components/sections/TestimonialsWall";
import FAQ from "../components/ui/FAQ";
import Articles from "../components/sections/Articles";

export default function HomePage() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <TestimonialAndGallery />
      <MarqueeStrip />
      <WhyUs />
      <Services />
      <Portfolio />
      <TestimonialsWall />
      <FAQ />
      <Articles />
    </div>
  );
}
