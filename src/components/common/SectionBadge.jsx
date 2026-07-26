const SectionBadge = ({ children }) => {
  return (
    <span className="rounded-full bg-blue-50 text-blue-600 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase inline-block">
      {children}
    </span>
  );
};

export default SectionBadge;