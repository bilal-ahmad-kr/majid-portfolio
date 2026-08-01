import { useState, useEffect, useCallback } from "react";
import {
  pagesService,
  servicesService,
  testimonialsService,
  faqsService,
  settingsService,
  blogsService,
  projectsService,
} from "../lib/cms";

/**
 * Fetches and caches a page's content JSONB from the pages table.
 * Returns { content, loading, error } where content is the raw JSONB object.
 */
export function usePageContent(slug) {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    pagesService
      .get(slug)
      .then((page) => setContent(page?.content ?? {}))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [slug]);

  return { content, loading, error };
}

/**
 * Fetches all published services — used by Navbar, Footer, Services section.
 */
export function usePublishedServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(() => {
    setLoading(true);
    servicesService
      .listPublished()
      .then(setServices)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { services, loading, error, refresh };
}

/**
 * Fetches a single service by slug with related projects, testimonials, FAQs.
 */
export function useServiceBySlug(slug) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);
    servicesService
      .getBySlug(slug)
      .then(setService)
      .catch((err) => {
        if (err.code === "PGRST116") setNotFound(true);
        else setError(err);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  return { service, loading, error, notFound };
}

/**
 * Fetches published testimonials — optionally filtered by serviceId.
 */
export function usePublishedTestimonials({ serviceId } = {}) {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    testimonialsService
      .listPublished({ serviceId })
      .then(setTestimonials)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [serviceId]);

  return { testimonials, loading, error };
}

/**
 * Fetches published FAQs — optionally filtered by section and/or serviceId.
 */
export function usePublishedFAQs({ section, serviceId } = {}) {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    faqsService
      .listPublished({ section, serviceId })
      .then(setFaqs)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [section, serviceId]);

  return { faqs, loading, error };
}

/**
 * Fetches published blogs — optionally filtered by serviceId or category, with optional limit.
 */
export function usePublishedBlogs({ serviceId, category, limit } = {}) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    blogsService
      .listPublished({ serviceId, limit })
      .then((data) => {
        if (category && category !== "All") {
          setBlogs(data.filter((b) => b.category === category));
        } else {
          setBlogs(data);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [serviceId, category, limit]);

  return { blogs, loading, error };
}

/**
 * Fetches published projects — optionally filtered by serviceId or category, with optional limit.
 */
export function usePublishedProjects({ serviceId, category, limit } = {}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    projectsService
      .listPublished({ serviceId, limit })
      .then((data) => {
        if (category && category !== "All") {
          setProjects(data.filter((p) => p.category === category));
        } else {
          setProjects(data);
        }
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [serviceId, category, limit]);

  return { projects, loading, error };
}

/**
 * Fetches a value from the settings table by key.
 * Returns { value, loading, error }.
 */
export function useSiteSettings(key) {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!key) {
      setLoading(false);
      return;
    }
    settingsService
      .get(key)
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [key]);

  return { value, loading, error };
}

/**
 * Fetches multiple settings keys at once.
 * Returns { settings: { key: value, ... }, loading, error }.
 */
export function useMultiSettings(keys = []) {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keys.length) {
      setLoading(false);
      return;
    }
    Promise.all(keys.map((k) => settingsService.get(k).then((v) => [k, v])))
      .then((pairs) => setSettings(Object.fromEntries(pairs)))
      .catch(setError)
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys.join(",")]);

  return { settings, loading, error };
}
