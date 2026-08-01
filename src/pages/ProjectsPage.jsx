import ProjectsHero from "../components/sections/ProjectsHero";
import AllProjects from "../components/sections/AllProjects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased">

      <main>
        <ProjectsHero />
        <AllProjects />
      </main>

    </div>
  );
}