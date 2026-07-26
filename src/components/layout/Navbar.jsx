import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { navigation } from "../../data/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          {/* Logo */}

          <NavLink to="/">
            <h2 className="text-2xl font-bold text-blue-600">
              MJD AI
            </h2>
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-slate-700 hover:text-blue-600 transition"
                }
              >
                {item.title}
              </NavLink>
            ))}

          </nav>

          {/* CTA */}

          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-0.5 transition"
          >
            Book a Call
          </a>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="text-3xl lg:hidden"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;