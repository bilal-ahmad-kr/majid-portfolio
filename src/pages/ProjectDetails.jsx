import { useParams, Navigate } from "react-router-dom";

import { projects } from "../data/projects";

import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectChallenge from "../components/projects/ProjectChallenge";
import ProjectSolution from "../components/projects/ProjectSolution";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectVideo from "../components/projects/ProjectVideo";
import ProjectCTA from "../components/projects/ProjectCTA";
import ProjectNavigation from "../components/projects/ProjectNavigation";
import RelatedProjects from "../components/projects/RelatedProjects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <ProjectHeader project={project} />

      <ProjectChallenge challenge={project.challenge} />

      <ProjectSolution solution={project.solution} />

      <ProjectGallery images={project.gallery} />

      <ProjectStats outcome={project.outcome} />

      <ProjectVideo videoUrl={project.videoUrl} />

      <ProjectNavigation currentProject={project} projects={projects} />

      <RelatedProjects currentProject={project} projects={projects} />

      <ProjectCTA />
    </>
  );
};

export default ProjectDetails;
