import { Link } from "react-router-dom";

const SecondaryButton = ({
  to,
  href,
  children,
  className = "",
}) => {
  const classes = `
    border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600 rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 inline-flex items-center gap-2
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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

export default SecondaryButton;