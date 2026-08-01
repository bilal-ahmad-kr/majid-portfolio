import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { supabase } from "./lib/supabase";
import { AuthProvider } from "./hooks/useAuth";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ServicesOverview from "./pages/ServicesOverviewPage";

// New Dynamic Pages
import ServicePage from "./pages/ServicePage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import PagesAdmin from "./admin/pages/PagesAdmin";
import ProjectsAdmin from "./admin/pages/ProjectsAdmin";
import BlogsAdmin from "./admin/pages/BlogsAdmin";
import ServicesAdmin from "./admin/pages/ServicesAdmin";
import TestimonialsAdmin from "./admin/pages/TestimonialsAdmin";
import FaqsAdmin from "./admin/pages/FaqsAdmin";
import ContactMessagesAdmin from "./admin/pages/ContactMessagesAdmin";
import SettingsAdmin from "./admin/pages/SettingsAdmin";
import CategoriesAdmin from "./admin/pages/CategoriesAdmin";

export default function App() {
  useEffect(() => {
    console.log("Supabase Connected", supabase);
  }, []);
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Route>
        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pages/:slug" element={<PagesAdmin />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="blogs" element={<BlogsAdmin />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="testimonials" element={<TestimonialsAdmin />} />
          <Route path="faqs" element={<FaqsAdmin />} />
          <Route path="messages" element={<ContactMessagesAdmin />} />
          <Route path="settings" element={<SettingsAdmin />} />
          <Route path="categories" element={<CategoriesAdmin />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
