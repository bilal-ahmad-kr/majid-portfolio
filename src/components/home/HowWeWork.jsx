import { processSteps } from "../../data/process";

const HowWeWork = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            How We Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Our proven process ensures every project is delivered efficiently,
            strategically and with measurable business impact.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {processSteps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative rounded-3xl bg-white p-8 shadow-sm border border-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Connector Line */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-slate-200 z-10"></div>
                )}
                {/* Number */}

                <div className="absolute right-6 top-6 text-6xl font-bold text-slate-100">
                  0{step.id}
                </div>

                {/* Icon */}

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white transition">
                  <Icon />
                </div>

                {/* Title */}

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
};

export default HowWeWork;