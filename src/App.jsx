import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";

import AIAutomationPage from "./pages/AiAutomationPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import AIIntegrationPage from "./pages/AIIntegrationPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";

// If you deploy to a static host without server-side rewrites (e.g. GitHub
// Pages), swap BrowserRouter for HashRouter so direct links to /projects,
// /about, /blog, and /services/* still resolve.
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/ai-automation" element={<AIAutomationPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/ai-integration" element={<AIIntegrationPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
      </Routes>
      </>
  );
}

// Scrolls to top on route change, but respects in-page hash links (#contact).
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
