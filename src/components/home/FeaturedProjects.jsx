import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import PrimaryButton from "../common/PrimaryButton";

import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

const FeaturedProjects = () => {
  return (
    <Section background="bg-slate-50">

      <Container>

        <SectionHeader
          badge="Case Studies"
          title="Featured Projects"
          description="Explore a selection of our AI automation, CRM and marketing projects."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

        </div>

        <div className="mt-16 text-center">

          <PrimaryButton to="/projects">
            View All Projects
          </PrimaryButton>

        </div>

      </Container>

    </Section>
  );
};

export default FeaturedProjects;