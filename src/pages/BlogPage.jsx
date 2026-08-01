import BlogHero from "../components/sections/BlogHero";
import AllArticles from "../components/sections/AllArticles";

export default function BlogPage() {
  return (
    <div className="font-sans antialiased">
      <BlogHero />
      <AllArticles />
    </div>
  );
}
