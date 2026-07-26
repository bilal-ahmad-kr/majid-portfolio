import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-7xl font-extrabold text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-600/25"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;