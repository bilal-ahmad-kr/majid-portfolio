import Navbar from "../components/Navbar";
import BlogHero from "../components/BlogHero";
import AllArticles from "../components/AllArticles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <BlogHero />
      <AllArticles />
      <Contact />
      <Footer />
    </div>
  );
}
