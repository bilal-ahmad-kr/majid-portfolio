import { NavLink } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { navigation } from "../../data/navigation";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
      />

      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-2xl font-bold text-blue-600">
            MJD AI
          </h2>

          <button
            className="text-3xl"
            onClick={() => setOpen(false)}
          >
            <HiOutlineX />
          </button>

        </div>

        <nav className="flex flex-col gap-7">

          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-blue-600"
                  : "text-lg font-medium hover:text-blue-600 transition"
              }
            >
              {item.title}
            </NavLink>
          ))}

        </nav>

        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-10 block text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;