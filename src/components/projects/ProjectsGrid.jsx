import { useState } from "react";

import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

import { projects } from "../../data/projects";
import { projectCategories } from "../../data/projectCategories";

import ProjectsFilter from "./ProjectsFilter";
import ProjectCard from "./ProjectCard";
import EmptyProjects from "./EmptyProjects";

const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <Section background="bg-white">
      <Container>

        <SectionHeader
          badge="Projects"
          title="Case Studies & Projects"
          description="Browse our latest AI automation, CRM, marketing and web development projects."
        />

        {/* Filter Buttons */}
        <ProjectsFilter
          active={activeCategory}
          setActive={setActiveCategory}
          categories={projectCategories}
        />

        {/* Projects */}
        {filteredProjects.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <EmptyProjects />
          </div>
        )}

      </Container>
    </Section>
  );
};

export default ProjectsGrid;