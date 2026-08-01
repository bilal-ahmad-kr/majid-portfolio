import AboutHero from "../components/sections/AboutHero";
import Mission from "../components/sections/Mission";
import HeadlineMarquee from "../components/ui/HeadlineMarquee";
import HowWeWork from "../components/sections/HowWeWork";
import CompanyStory from '../components/sections/CompanyStory';
import { usePageContent } from "../hooks/usePublicData";

export default function AboutPage() {
  const { content } = usePageContent("about");

  return (
    <div className="font-sans antialiased">
      <AboutHero content={content} />
      <CompanyStory content={content} />
      <Mission content={content} />
      <HeadlineMarquee />
      <HowWeWork content={content} />
    </div>
  );
}
