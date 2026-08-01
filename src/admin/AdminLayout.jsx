import { Outlet, Navigate, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  Info,
  FolderKanban,
  Newspaper,
  Wrench,
  MessageSquareQuote,
  HelpCircle,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const NAV = [
  { to: "/admin", end: true, label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/pages/home", label: "Home Page", icon: Home },
  { to: "/admin/pages/about", label: "About Page", icon: Info },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { to: "/admin/services", label: "Services", icon: Wrench },
  { to: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { to: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { to: "/admin/messages", label: "Contact Messages", icon: Mail },
  { to: "/admin/categories", label: "Categories", icon: FolderKanban },
  { to: "/admin/settings", label: "Site Settings", icon: Settings },
];

export default function AdminLayout() {
  const { session, profile, isAdmin, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-[13.5px] text-[#64748B]">
        Loading…
      </div>
    );
  }

  if (!session) return <Navigate to="/admin/login" replace />;

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5 text-center">
        <div>
          <p className="text-[16px] font-bold text-[#0F172A]">Access restricted</p>
          <p className="mt-1.5 text-[13.5px] text-[#64748B]">
            Your account doesn't have admin access to this dashboard.
          </p>
          <button onClick={signOut} className="mt-4 text-[13px] font-semibold text-[#1E5BFF]">
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-[#E2E8F0] bg-white p-5 md:flex">
        <div className="flex items-center gap-2 px-2">
          <LayoutDashboard size={20} className="text-[#1E5BFF]" />
          <span className="text-[15px] font-extrabold text-[#0F172A]">MJD Admin</span>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1 overflow-y-auto">
          {NAV.map(({ to, end, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                  isActive ? "bg-[#1E5BFF]/10 text-[#1E5BFF]" : "text-[#475569] hover:bg-[#F1F5F9]"
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-4 border-t border-[#F1F5F9] pt-4">
          <p className="truncate px-3 text-[12px] text-[#94A3B8]">{profile?.email}</p>
          <button
            onClick={signOut}
            className="mt-2 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-[#64748B] hover:bg-[#F1F5F9]"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}