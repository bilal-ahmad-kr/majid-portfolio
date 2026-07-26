import { Link } from "react-router-dom";

const PrimaryButton = ({
  to,
  href,
  children,
  className = "",
}) => {
  const classes =
    "inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

export default PrimaryButton;