import { supabase } from "./supabase";

/**
 * Factory that produces a standard set of CRUD functions for a Supabase table.
 * Every content module (projects, blogs, services, testimonials, faqs) is
 * built from this so there's one place that owns error handling and shape.
 */
function createCrudService(table) {
  return {
    async list({ orderBy = "created_at", ascending = false, onlyPublished = false } = {}) {
      let query = supabase.from(table).select("*").order(orderBy, { ascending });
      if (onlyPublished) query = query.eq("published", true);
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },

    async getById(id) {
      const { data, error } = await supabase.from(table).select("*").eq("id", id).single();
      if (error) throw error;
      return data;
    },

    async getBySlug(slug) {
      const { data, error } = await supabase.from(table).select("*").eq("slug", slug).single();
      if (error) throw error;
      return data;
    },

    async create(values) {
      const { data, error } = await supabase.from(table).insert(values).select().single();
      if (error) throw error;
      return data;
    },

    async update(id, values) {
      const { data, error } = await supabase
        .from(table)
        .update(values)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },

    async remove(id) {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;
    },
  };
}

// ─────────────────────────────────────────────────────────────
// Projects Service
// ─────────────────────────────────────────────────────────────
export const projectsService = {
  ...createCrudService("projects"),

  /** All published projects belonging to a specific service (by service ID). */
  async listByService(serviceId) {
    const { data, error } = await supabase
      .from("projects")
      .select("*, services(title, slug)")
      .eq("service_id", serviceId)
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data;
  },

  /** All published projects matching a given category string. */
  async listByCategory(category) {
    const { data, error } = await supabase
      .from("projects")
      .select("*, services(title, slug)")
      .eq("category", category)
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data;
  },

  /** Only projects marked as featured (for the homepage portfolio section). */
  async listFeatured() {
    const { data, error } = await supabase
      .from("projects")
      .select("*, services(title, slug)")
      .eq("featured", true)
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data;
  },

  /**
   * Generic filtered list — pass any combination of serviceId, category,
   * featured, or published to narrow results.  Used by AllProjects.jsx.
   */
  async listFiltered({ serviceId, category, featured, onlyPublished = true } = {}) {
    let query = supabase
      .from("projects")
      .select("*, services(title, slug)")
      .order("sort_order", { ascending: true });

    if (onlyPublished) query = query.eq("published", true);
    if (serviceId)     query = query.eq("service_id", serviceId);
    if (category)      query = query.eq("category", category);
    if (featured != null) query = query.eq("featured", featured);

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  /** Fetch a project by slug with related service info. */
  async getBySlugWithRelated(slug) {
    const { data, error } = await supabase
      .from("projects")
      .select("*, services(id, title, slug)")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Blogs Service
// ─────────────────────────────────────────────────────────────
export const blogsService = {
  ...createCrudService("blogs"),

  /** Published blogs, optionally filtered by service. */
  async listPublished({ serviceId, limit } = {}) {
    let query = supabase
      .from("blogs")
      .select("*")
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (serviceId) query = query.eq("service_id", serviceId);
    if (limit)     query = query.limit(limit);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  /** Fetch blog by slug. */
  async getBySlug(slug) {
    const { data, error } = await supabase
      .from("blogs")
      .select("*, services(title, slug)")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return data;
  },

  /** Blogs belonging to a specific service. */
  async listByService(serviceId) {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("service_id", serviceId)
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (error) throw error;
    return data;
  },

  /** Blogs by category string. */
  async listByCategory(category) {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("category", category)
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Services Service
// ─────────────────────────────────────────────────────────────
export const servicesService = {
  ...createCrudService("services"),

  /** All published services ordered by sort_order. */
  async listPublished() {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data;
  },

  /** Get a service by slug with its related FAQs. */
  async getBySlug(slug) {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Testimonials Service
// ─────────────────────────────────────────────────────────────
export const testimonialsService = {
  ...createCrudService("testimonials"),

  /** All published testimonials, optionally filtered by service. */
  async listPublished({ serviceId } = {}) {
    let query = supabase
      .from("testimonials")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (serviceId) query = query.eq("service_id", serviceId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  /** Testimonials for a specific service. */
  async listByService(serviceId) {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("service_id", serviceId)
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// FAQs Service
// ─────────────────────────────────────────────────────────────
export const faqsService = {
  ...createCrudService("faqs"),

  /** All published FAQs, optionally filtered by section or service. */
  async listPublished({ section, serviceId } = {}) {
    let query = supabase
      .from("faqs")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (section)   query = query.eq("section", section);
    if (serviceId) query = query.eq("service_id", serviceId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  /** FAQs for a specific service. */
  async listByService(serviceId) {
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .eq("service_id", serviceId)
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Contact Messages Service
// ─────────────────────────────────────────────────────────────
export const contactMessagesService = {
  ...createCrudService("contact_messages"),

  /** Update the status and/or notes for a message. */
  async updateStatus(id, status, notes) {
    const { data, error } = await supabase
      .from("contact_messages")
      .update({ status, notes })
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Categories Service
// ─────────────────────────────────────────────────────────────
export const categoriesService = {
  ...createCrudService("categories"),

  async listPublished() {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("published", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Pages Service (Home/About) — single-row-per-key
// ─────────────────────────────────────────────────────────────
export const pagesService = {
  async get(slug) {
    const { data, error } = await supabase.from("pages").select("*").eq("slug", slug).single();
    if (error && error.code !== "PGRST116") throw error;
    return data || { slug, content: {} };
  },
  async update(slug, values) {
    const { data, error } = await supabase
      .from("pages")
      .upsert({ slug, ...values })
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Settings Service — single-row-per-key
// ─────────────────────────────────────────────────────────────
export const settingsService = {
  async get(key) {
    const { data, error } = await supabase.from("settings").select("*").eq("key", key).single();
    if (error && error.code !== "PGRST116") throw error;
    return data?.value ?? null;
  },
  async set(key, value) {
    const { data, error } = await supabase
      .from("settings")
      .upsert({ key, value, updated_at: new Date().toISOString() })
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// ─────────────────────────────────────────────────────────────
// Media / Storage uploads
// ─────────────────────────────────────────────────────────────
export const mediaService = {
  async upload(file, folder = "uploads") {
    const ext = file.name.split(".").pop();
    const path = `${folder}/${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("site-media")
      .upload(path, file, { cacheControl: "3600", upsert: false });
    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage.from("site-media").getPublicUrl(path);
    const url = publicUrlData.publicUrl;

    const { data: mediaRow, error: dbError } = await supabase
      .from("media")
      .insert({ url, storage_path: path })
      .select()
      .single();
    if (dbError) throw dbError;

    return mediaRow; // { id, url, storage_path, ... }
  },

  async remove(storagePath, mediaId) {
    await supabase.storage.from("site-media").remove([storagePath]);
    if (mediaId) await supabase.from("media").delete().eq("id", mediaId);
  },
};