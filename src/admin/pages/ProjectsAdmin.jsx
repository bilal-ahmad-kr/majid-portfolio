import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { projectsService, servicesService } from "../../lib/cms";
import { useCrudList } from "../../hooks/useCrud";
import { Field, TextAreaField, CheckboxField, SelectField, ToggleField } from "../components/Field";
import { TagListField } from "../components/RepeaterField";
import { ImageUploader } from "../components/ImageUploader";
import { Modal, ListRow, PublishedBadge, SaveButton } from "../components/Shared";

const CATEGORIES = [
  "AI Automation",
  "CRM",
  "Web Development",
  "Lead Generation",
  "Paid Advertising",
  "Sales Funnels",
  "Voice AI",
  "Other",
];

const EMPTY = {
  title: "",
  slug: "",
  client: "",
  service_id: "",
  category: "",
  description: "",
  tech: [],
  image_url: "",
  gallery: [],
  live_url: "",
  github_url: "",
  featured: false,
  sort_order: 0,
  published: true,
  impact: "",
  seo_title: "",
  seo_description: "",
};

/** Slugify a title string */
function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function ProjectsAdmin() {
  const { rows, loading, create, update, remove } = useCrudList(projectsService, {
    orderBy: "sort_order",
    ascending: true,
  });
  const [editing, setEditing] = useState(null);
  const [form, setForm]       = useState(EMPTY);
  const [saving, setSaving]   = useState(false);

  // Load services for the dropdown
  const [services, setServices] = useState([]);
  useEffect(() => {
    servicesService.list({ orderBy: "sort_order", ascending: true })
      .then((rows) => setServices(rows))
      .catch(() => {});
  }, []);

  const serviceOptions = services.map((s) => ({ value: s.id, label: s.title }));

  function set(key, val) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  function openNew() {
    setForm(EMPTY);
    setEditing("new");
  }
  function openEdit(row) {
    setForm({
      ...EMPTY,
      ...row,
      tech:    row.tech    || [],
      gallery: row.gallery || [],
      service_id: row.service_id || "",
      sort_order: row.sort_order ?? 0,
    });
    setEditing(row);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...form,
        service_id: form.service_id || null,
        category:   form.category   || null,
        sort_order: Number(form.sort_order) || 0,
      };
      if (editing === "new") await create(payload);
      else                   await update(editing.id, payload);
      setEditing(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this project? This can't be undone.")) return;
    await remove(id);
  }

  // Find service label for display
  function serviceLabel(row) {
    const svc = services.find((s) => s.id === row.service_id);
    return svc ? svc.title : row.category || "—";
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-extrabold text-[#0F172A]">Projects</h1>
        <button
          onClick={openNew}
          className="flex items-center gap-1.5 rounded-lg bg-[#1E5BFF] px-4 py-2 text-[13.5px] font-semibold text-white"
        >
          <Plus size={15} />
          New Project
        </button>
      </div>

      {loading ? (
        <p className="mt-8 text-[13.5px] text-[#64748B]">Loading…</p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          {rows.map((p) => (
            <ListRow
              key={p.id}
              title={p.title}
              subtitle={`${serviceLabel(p)}${p.featured ? " · ⭐ Featured" : ""}`}
              badge={<PublishedBadge published={p.published} />}
              onEdit={() => openEdit(p)}
              onDelete={() => handleDelete(p.id)}
            />
          ))}
          {rows.length === 0 && (
            <p className="p-6 text-center text-[13.5px] text-[#64748B]">No projects yet.</p>
          )}
        </div>
      )}

      {editing && (
        <Modal
          title={editing === "new" ? "New Project" : "Edit Project"}
          onClose={() => setEditing(null)}
        >
          <form onSubmit={handleSave} className="space-y-4">
            {/* Basic info */}
            <Field
              label="Title *"
              value={form.title}
              onChange={(v) => {
                set("title", v);
                if (editing === "new") set("slug", toSlug(v));
              }}
              required
            />
            <Field
              label="Slug (URL-safe, auto-generated)"
              value={form.slug}
              onChange={(v) => set("slug", toSlug(v))}
              placeholder="my-project-name"
            />
            <Field
              label="Client Name (optional)"
              value={form.client}
              onChange={(v) => set("client", v)}
            />

            {/* Service & Category */}
            <SelectField
              label="Service (optional)"
              value={form.service_id}
              onChange={(v) => set("service_id", v)}
              options={serviceOptions}
              placeholder="— Select a service —"
            />
            <SelectField
              label="Category *"
              value={form.category}
              onChange={(v) => set("category", v)}
              options={CATEGORIES.map((c) => ({ value: c, label: c }))}
              placeholder="— Select a category —"
              required
            />

            {/* Description */}
            <TextAreaField
              label="Description *"
              value={form.description}
              onChange={(v) => set("description", v)}
              required
            />

            {/* Images */}
            <ImageUploader
              label="Featured Image"
              value={form.image_url}
              onChange={(v) => set("image_url", v)}
              folder="projects"
            />

            {/* Tech stack */}
            <TagListField
              label="Technologies / Tech Stack"
              items={form.tech}
              onChange={(v) => set("tech", v)}
            />

            {/* URLs */}
            <Field
              label="Live URL (optional)"
              value={form.live_url}
              onChange={(v) => set("live_url", v)}
              type="url"
              placeholder="https://example.com"
            />
            <Field
              label="GitHub URL (optional)"
              value={form.github_url}
              onChange={(v) => set("github_url", v)}
              type="url"
              placeholder="https://github.com/..."
            />

            {/* Featured & Sort */}
            <ToggleField
              label="Featured Project"
              description="Featured projects appear on the homepage portfolio section."
              checked={form.featured}
              onChange={(v) => set("featured", v)}
            />
            <Field
              label="Sort Order (lower = first)"
              value={String(form.sort_order)}
              onChange={(v) => set("sort_order", v)}
              type="number"
            />

            <CheckboxField
              label="Published (visible on the public site)"
              checked={form.published}
              onChange={(v) => set("published", v)}
            />

            {/* Impact */}
            <TextAreaField
              label="Impact / Results"
              value={form.impact}
              onChange={(v) => set("impact", v)}
              rows={3}
            />

            {/* Gallery */}
            <TagListField
              label="Gallery Image URLs"
              placeholder="Paste image URL and press Enter"
              items={form.gallery}
              onChange={(v) => set("gallery", v)}
            />

            {/* SEO */}
            <Field
              label="SEO Title"
              value={form.seo_title}
              onChange={(v) => set("seo_title", v)}
            />
            <TextAreaField
              label="SEO Description"
              value={form.seo_description}
              onChange={(v) => set("seo_description", v)}
              rows={2}
            />

            <SaveButton saving={saving}>Save Project</SaveButton>
          </form>
        </Modal>
      )}
    </div>
  );
}
