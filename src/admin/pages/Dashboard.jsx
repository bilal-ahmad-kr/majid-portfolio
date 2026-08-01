import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FolderKanban, Newspaper, Mail, MessageSquareQuote } from "lucide-react";
import { supabase } from "../../lib/supabase";

function StatCard({ icon: Icon, label, value, to }) {
  const content = (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E5BFF]/10 text-[#1E5BFF]">
          <Icon size={17} />
        </span>
      </div>
      <p className="mt-4 text-[24px] font-extrabold text-[#0F172A]">{value ?? "—"}</p>
      <p className="text-[12.5px] text-[#64748B]">{label}</p>
    </div>
  );
  return to ? <Link to={to}>{content}</Link> : content;
}

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    async function load() {
      const [projectsCount, blogsCount, testimonialsCount, unreadCount, servicesCount, faqsCount, recentP, recentB] =
        await Promise.all([
          supabase.from("projects").select("id", { count: "exact", head: true }),
          supabase.from("blogs").select("id", { count: "exact", head: true }),
          supabase.from("testimonials").select("id", { count: "exact", head: true }),
          supabase.from("contact_messages").select("id", { count: "exact", head: true }).eq("status", "new"),
          supabase.from("services").select("id", { count: "exact", head: true }),
          supabase.from("faqs").select("id", { count: "exact", head: true }),
          supabase.from("projects").select("*").order("created_at", { ascending: false }).limit(5),
          supabase.from("blogs").select("*").order("created_at", { ascending: false }).limit(5),
        ]);

      setStats({
        projects: projectsCount.count,
        blogs: blogsCount.count,
        testimonials: testimonialsCount.count,
        unreadMessages: unreadCount.count,
        services: servicesCount.count,
        faqs: faqsCount.count,
      });
      setRecentProjects(recentP.data ?? []);
      setRecentBlogs(recentB.data ?? []);
    }
    load();
  }, []);

  return (
    <div>
      <h1 className="text-[22px] font-extrabold text-[#0F172A]">Dashboard</h1>
      <p className="mt-1 text-[13.5px] text-[#64748B]">
        Overview of your site's content and activity.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <StatCard icon={FolderKanban} label="Projects" value={stats?.projects} to="/admin/projects" />
        <StatCard icon={Newspaper} label="Blog Posts" value={stats?.blogs} to="/admin/blogs" />
        <StatCard icon={MessageSquareQuote} label="Testimonials" value={stats?.testimonials} to="/admin/testimonials" />
        <StatCard icon={Mail} label="Unread Messages" value={stats?.unreadMessages} to="/admin/messages" />
        <StatCard icon={FolderKanban} label="Services" value={stats?.services} to="/admin/services" />
        <StatCard icon={MessageSquareQuote} label="FAQs" value={stats?.faqs} to="/admin/faqs" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[14.5px] font-bold text-[#0F172A]">Recent Projects</h2>
            <Link to="/admin/projects" className="text-[12.5px] font-semibold text-[#1E5BFF]">
              View all
            </Link>
          </div>
          <div className="mt-3 space-y-1">
            {recentProjects.map((p) => (
              <div key={p.id} className="flex items-center justify-between border-b border-[#F1F5F9] py-2.5 last:border-0">
                <span className="truncate text-[13px] font-medium text-[#334155]">{p.title}</span>
                <span className="shrink-0 text-[11.5px] text-[#94A3B8]">{p.category}</span>
              </div>
            ))}
            {recentProjects.length === 0 && (
              <p className="py-4 text-center text-[12.5px] text-[#94A3B8]">No projects yet.</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[14.5px] font-bold text-[#0F172A]">Recent Blog Posts</h2>
            <Link to="/admin/blogs" className="text-[12.5px] font-semibold text-[#1E5BFF]">
              View all
            </Link>
          </div>
          <div className="mt-3 space-y-1">
            {recentBlogs.map((b) => (
              <div key={b.id} className="flex items-center justify-between border-b border-[#F1F5F9] py-2.5 last:border-0">
                <span className="truncate text-[13px] font-medium text-[#334155]">{b.title}</span>
                <span className="shrink-0 text-[11.5px] text-[#94A3B8]">
                  {b.published ? "Published" : "Draft"}
                </span>
              </div>
            ))}
            {recentBlogs.length === 0 && (
              <p className="py-4 text-center text-[12.5px] text-[#94A3B8]">No blog posts yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}