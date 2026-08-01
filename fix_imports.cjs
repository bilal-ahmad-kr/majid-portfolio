const fs = require('fs');

function replaceInFile(path, replacements) {
    let content = fs.readFileSync(path, 'utf8');
    for (const [from, to] of replacements) {
        content = content.replace(from, to);
    }
    fs.writeFileSync(path, content, 'utf8');
}

replaceInFile('src/components/layout/Layout.jsx', [
    ['import Contact from "./Contact";', 'import Contact from "../ui/Contact";']
]);

replaceInFile('src/pages/HomePage.jsx', [
    ['import Hero from "../components/Hero";', 'import Hero from "../components/sections/Hero";'],
    ['import TestimonialAndGallery from "../components/TestimonialAndGallery";', 'import TestimonialAndGallery from "../components/sections/TestimonialAndGallery";'],
    ['import MarqueeStrip from "../components/MarqueeStrip";', 'import MarqueeStrip from "../components/ui/MarqueeStrip";'],
    ['import WhyUs from "../components/WhyUs";', 'import WhyUs from "../components/sections/WhyUs";'],
    ['import Services from "../components/Services";', 'import Services from "../components/sections/Services";'],
    ['import Portfolio from "../components/Portfolio";', 'import Portfolio from "../components/ui/Portfolio";'],
    ['import TestimonialsWall from "../components/TestimonialsWall";', 'import TestimonialsWall from "../components/sections/TestimonialsWall";'],
    ['import FAQ from "../components/FAQ";', 'import FAQ from "../components/ui/FAQ";'],
    ['import Articles from "../components/Articles";', 'import Articles from "../components/sections/Articles";']
]);

replaceInFile('src/pages/AboutPage.jsx', [
    ['import AboutHero from "../components/AboutHero";', 'import AboutHero from "../components/sections/AboutHero";'],
    ['import Mission from "../components/Mission";', 'import Mission from "../components/sections/Mission";'],
    ['import HeadlineMarquee from "../components/HeadlineMarquee";', 'import HeadlineMarquee from "../components/ui/HeadlineMarquee";'],
    ['import HowWeWork from "../components/HowWeWork";', 'import HowWeWork from "../components/sections/HowWeWork";'],
    ["import CompanyStory from '../components/CompanyStory';", "import CompanyStory from '../components/sections/CompanyStory';"]
]);

replaceInFile('src/pages/ProjectsPage.jsx', [
    ['import ProjectsHero from "../components/ProjectsHero";', 'import ProjectsHero from "../components/sections/ProjectsHero";'],
    ['import AllProjects from "../components/AllProjects";', 'import AllProjects from "../components/sections/AllProjects";']
]);

replaceInFile('src/pages/BlogPage.jsx', [
    ['import BlogHero from "../components/BlogHero";', 'import BlogHero from "../components/sections/BlogHero";'],
    ['import AllArticles from "../components/AllArticles";', 'import AllArticles from "../components/sections/AllArticles";']
]);

replaceInFile('src/pages/WebDevelopmentPage.jsx', [
    ['import ServicePageTemplate from "../components/ServicePageTemplate";', 'import ServicePageTemplate from "../components/services/ServicePageTemplate";']
]);

replaceInFile('src/pages/ServicesOverviewPage.jsx', [
    ['import { SectionEyebrow } from "./ui/Shared";', 'import { SectionEyebrow } from "../components/ui/Shared";'],
    ['import { SectionEyebrow } from "./ui/Shared";', 'import { SectionEyebrow } from "../components/ui/Shared";']
]);
