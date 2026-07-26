import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";

const ProjectCTA = () => {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Ready To Build Something Similar?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Let's discuss your project and create a custom AI automation or web solution for your business.
          </p>

          <div className="mt-10">
            <PrimaryButton to="/contact" className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-6 py-3 font-semibold">
              Book a Strategy Call
            </PrimaryButton>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default ProjectCTA;