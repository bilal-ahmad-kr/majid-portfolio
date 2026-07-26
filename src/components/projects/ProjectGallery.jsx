import Container from "../common/Container";

const ProjectGallery = ({ images = [] }) => {
  if (images.length === 0) return null;

  return (
    <section className="py-20">
      <Container>

        <h2 className="mb-10 text-3xl font-bold text-slate-900">
          Gallery
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className="h-72 w-full rounded-xl overflow-hidden object-cover"
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ProjectGallery;