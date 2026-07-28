import Navbar from "../components/Navbar";
import ProjectsHero from "../components/ProjectsHero";
import AllProjects from "../components/AllProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased">
      <Navbar />

      <main>
        <ProjectsHero />
        <AllProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}