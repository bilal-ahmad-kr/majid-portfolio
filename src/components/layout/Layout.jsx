import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "../ui/Contact";
import Footer from "./Footer";

/**
 * Shared page shell: Navbar on top, the routed page content in the middle,
 * then Contact + Footer at the bottom of every page.
 *
 * This is why every page's CTA can safely link to "#contact" — Contact
 * is always mounted below whatever page is rendered.
 */
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </>
  );
}