import Container from "../common/Container";

const ProjectVideo = ({ videoUrl }) => {
  if (!videoUrl) return null;

  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <h2 className="mb-8 text-3xl font-bold text-slate-900">
          Project Demo
        </h2>

        <div className="aspect-video overflow-hidden rounded-3xl">
          <iframe
            className="h-full w-full"
            src={videoUrl}
            title="Project Demo"
            allowFullScreen
          />
        </div>

      </Container>
    </section>
  );
};

export default ProjectVideo;