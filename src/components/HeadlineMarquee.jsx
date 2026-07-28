const PHRASES = ["Automate", "Innovate", "Grow", "Deliver", "Support"];

export default function HeadlineMarquee() {
  const loop = [...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <section className="overflow-hidden bg-[#F8FAFC] py-10 md:py-14">
      <style>{`
        @keyframes mjd-headline-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .mjd-headline-track {
          animation: mjd-headline-scroll 20s linear infinite;
        }
      `}</style>
      <div className="flex w-max items-center mjd-headline-track">
        {loop.map((word, i) => (
          <div key={i} className="flex items-center">
            <span
              className="px-6 text-[42px] font-extrabold tracking-tight text-transparent md:text-[64px]"
              style={{ WebkitTextStroke: "1.5px #0F172A" }}
            >
              {word}
            </span>
            <span className="px-6 text-[42px] font-extrabold tracking-tight text-[#1E5BFF] md:text-[64px]">
              •
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
