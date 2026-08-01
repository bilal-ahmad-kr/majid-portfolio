import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogsService } from "../lib/cms";

function Skeleton() {
  return (
    <div className="bg-white">
      <div className="bg-[#0F172A] px-5 py-24">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="h-5 w-40 animate-pulse rounded-lg bg-slate-700" />
          <div className="h-12 w-3/4 animate-pulse rounded-xl bg-slate-700" />
          <div className="h-5 w-1/2 animate-pulse rounded-lg bg-slate-700" />
        </div>
      </div>
      <div className="px-5 py-20 max-w-3xl mx-auto space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-[64px] font-extrabold text-[#1E5BFF]">404</p>
      <h1 className="mt-2 text-[24px] font-extrabold text-[#0F172A]">Article Not Found</h1>
      <p className="mt-3 max-w-sm text-[15px] text-[#475569]">
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1E5BFF] px-5 py-3 text-[14px] font-semibold text-white">
        <ArrowLeft size={15} /> Back to Blog
      </Link>
    </div>
  );
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);
    blogsService
      .getBySlug(slug)
      .then(setBlog)
      .catch((err) => {
        if (err?.code === "PGRST116") setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Skeleton />;
  if (notFound || !blog) return <NotFound />;

  const date = blog.published_at || blog.created_at;

  return (
    <article className="bg-white font-sans antialiased">
      <title>{blog.seo_title || blog.title} | MJD AI Automation</title>
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F172A] px-5 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
        <div className="pointer-events-none absolute -top-32 left-1/3 h-[380px] w-[380px] rounded-full bg-[#1E5BFF]/20 blur-[110px]" />
        
        <div className="relative max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-8 flex items-center justify-center gap-4 text-[13px] font-semibold text-[#1E5BFF]">
            <span className="rounded-full bg-[#1E5BFF]/10 px-3 py-1">{blog.category}</span>
            {date && (
              <span className="flex items-center gap-1.5 text-white/60">
                <Calendar size={14} />
                {new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            )}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-[32px] leading-[1.15] font-extrabold tracking-tight text-white md:text-[46px]">
            {blog.title}
          </motion.h1>

          {blog.excerpt && (
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[#CBD5E1] md:text-[18px]">
              {blog.excerpt}
            </motion.p>
          )}

          {blog.author && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex items-center justify-center gap-2 text-[14px] text-white/80">
              <User size={16} /> By <span className="font-semibold text-white">{blog.author}</span>
            </motion.div>
          )}
        </div>
      </section>

      {/* Cover Image */}
      {blog.cover_image_url && (
        <section className="px-5 -mt-12 md:-mt-16 relative z-10">
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-[0_20px_40px_-15px_rgba(15,23,42,0.3)] bg-white">
            <img src={blog.cover_image_url} alt={blog.title} className="w-full h-auto max-h-[500px] object-cover" />
          </div>
        </section>
      )}

      {/* Body Content */}
      <section className="px-5 py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg lg:prose-xl prose-a:text-[#1E5BFF] hover:prose-a:text-[#0B3FA0] prose-headings:text-[#0F172A] prose-headings:font-extrabold">
          {/* Using dangerouslySetInnerHTML assuming the CMS provides rich text/HTML.
              If it provides markdown, a markdown parser like marked or react-markdown would be needed. 
              Assuming basic HTML line breaks for now if it's plain text from the simple textarea admin. */}
          <div dangerouslySetInnerHTML={{ __html: blog.body?.replace(/\n/g, '<br />') }} />
        </div>
      </section>
    </article>
  );
}
