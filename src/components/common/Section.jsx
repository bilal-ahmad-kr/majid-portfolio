const Section = ({
  children,
  className = "",
  background = "bg-white",
}) => {
  return (
    <section className={`py-24 ${background} ${className}`}>
      {children}
    </section>
  );
};

export default Section;