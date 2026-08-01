import { useState } from "react";
import { Plus } from "lucide-react";
import { blogsService } from "../../lib/cms";
import { useCrudList } from "../../hooks/useCrud";
import { Field, TextAreaField, CheckboxField } from "../components/Field";
import { ImageUploader } from "../components/ImageUploader";
import { Modal, ListRow, PublishedBadge, SaveButton } from "../components/Shared";

const EMPTY = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  cover_image_url: "",
  category: "",
  author: "",
  seo_title: "",
  seo_description: "",
  featured: false,
  service_id: "",
  tags: "", // We will split by comma on save
};

function slugify(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogsAdmin() {
  const { rows, loading, create, update, remove } = useCrudList(blogsService);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  
  // Fetch services for dropdown
  const [services, setServices] = useState([]);
  import("react").then(({ useEffect }) => {
    useEffect(() => {
      import("../../lib/cms").then(({ servicesService }) => {
        servicesService.list().then(setServices).catch(console.error);
      });
    }, []);
  });

  function openNew() {
    setForm(EMPTY);
    setEditing("new");
  }
  function openEdit(row) {
    setForm({ ...EMPTY, ...row });
    setEditing(row);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...form,
        slug: form.slug || slugify(form.title),
        published_at: form.published ? form.published_at || new Date().toISOString() : null,
        service_id: form.service_id || null,
        tags: typeof form.tags === "string" ? form.tags.split(",").map(t => t.trim()).filter(Boolean) : form.tags,
      };
      if (editing === "new") await create(payload);
      else await update(editing.id, payload);
      setEditing(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this blog post? This can't be undone.")) return;
    await remove(id);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-extrabold text-[#0F172A]">Blog Posts</h1>
        <button onClick={openNew} className="flex items-center gap-1.5 rounded-lg bg-[#1E5BFF] px-4 py-2 text-[13.5px] font-semibold text-white">
          <Plus size={15} />
          New Post
        </button>
      </div>

      {loading ? (
        <p className="mt-8 text-[13.5px] text-[#64748B]">Loading…</p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          {rows.map((b) => (
            <ListRow
              key={b.id}
              title={b.title}
              subtitle={b.category}
              badge={<PublishedBadge published={b.published} />}
              onEdit={() => openEdit(b)}
              onDelete={() => handleDelete(b.id)}
            />
          ))}
          {rows.length === 0 && <p className="p-6 text-center text-[13.5px] text-[#64748B]">No blog posts yet.</p>}
        </div>
      )}

      {editing && (
        <Modal title={editing === "new" ? "New Blog Post" : "Edit Blog Post"} onClose={() => setEditing(null)}>
          <form onSubmit={handleSave} className="space-y-4">
            <Field label="Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} required />
            <Field label="Slug (auto-generated if left blank)" value={form.slug} onChange={(v) => setForm({ ...form, slug: v })} />
            <Field label="Category" value={form.category} onChange={(v) => setForm({ ...form, category: v })} />
            <Field label="Author" value={form.author} onChange={(v) => setForm({ ...form, author: v })} />
            <TextAreaField label="Excerpt" value={form.excerpt} onChange={(v) => setForm({ ...form, excerpt: v })} rows={2} />
            <TextAreaField label="Body" value={form.body} onChange={(v) => setForm({ ...form, body: v })} rows={8} required />
            <ImageUploader label="Cover Image" value={form.cover_image_url} onChange={(v) => setForm({ ...form, cover_image_url: v })} folder="blogs" />
            <Field label="SEO Title" value={form.seo_title} onChange={(v) => setForm({ ...form, seo_title: v })} />
            <TextAreaField label="SEO Description" value={form.seo_description} onChange={(v) => setForm({ ...form, seo_description: v })} rows={2} />
            <div className="grid grid-cols-2 gap-4">
              <CheckboxField label="Published" checked={form.published} onChange={(v) => setForm({ ...form, published: v })} />
              <CheckboxField label="Featured" checked={form.featured} onChange={(v) => setForm({ ...form, featured: v })} />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#0F172A]">Related Service</label>
              <select 
                value={form.service_id || ""} 
                onChange={(e) => setForm({ ...form, service_id: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[14px]"
              >
                <option value="">None</option>
                {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
              </select>
            </div>

            <Field label="Tags (comma separated)" value={typeof form.tags === "object" && form.tags ? form.tags.join(", ") : form.tags} onChange={(v) => setForm({ ...form, tags: v })} />

            <SaveButton saving={saving}>Save Post</SaveButton>
          </form>
        </Modal>
      )}
    </div>
  );
}