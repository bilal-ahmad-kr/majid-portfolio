import { useState } from "react";
import { Plus } from "lucide-react";
import { categoriesService } from "../../lib/cms";
import { useCrudList } from "../../hooks/useCrud";
import { Field, CheckboxField } from "../components/Field";
import { Modal, ListRow, PublishedBadge, SaveButton } from "../components/Shared";

const EMPTY = { name: "", slug: "", description: "", published: true, sort_order: 0 };

function slugify(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function CategoriesAdmin() {
  const { rows, loading, create, update, remove } = useCrudList(categoriesService, {
    orderBy: "sort_order",
    ascending: true,
  });
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

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
        slug: form.slug || slugify(form.name),
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
    if (!confirm("Delete this category?")) return;
    await remove(id);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-extrabold text-[#0F172A]">Categories</h1>
        <button onClick={openNew} className="flex items-center gap-1.5 rounded-lg bg-[#1E5BFF] px-4 py-2 text-[13.5px] font-semibold text-white">
          <Plus size={15} />
          New Category
        </button>
      </div>

      {loading ? (
        <p className="mt-8 text-[13.5px] text-[#64748B]">Loading…</p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          {rows.map((c) => (
            <ListRow
              key={c.id}
              title={c.name}
              subtitle={`slug: ${c.slug}`}
              badge={<PublishedBadge published={c.published} />}
              onEdit={() => openEdit(c)}
              onDelete={() => handleDelete(c.id)}
            />
          ))}
          {rows.length === 0 && <p className="p-6 text-center text-[13.5px] text-[#64748B]">No categories yet.</p>}
        </div>
      )}

      {editing && (
        <Modal title={editing === "new" ? "New Category" : "Edit Category"} onClose={() => setEditing(null)}>
          <form onSubmit={handleSave} className="space-y-4">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Slug (auto-generated if left blank)" value={form.slug} onChange={(v) => setForm({ ...form, slug: v })} />
            <Field label="Description" value={form.description} onChange={(v) => setForm({ ...form, description: v })} />
            <Field label="Sort Order" type="number" value={form.sort_order} onChange={(v) => setForm({ ...form, sort_order: parseInt(v) || 0 })} />
            <CheckboxField label="Published" checked={form.published} onChange={(v) => setForm({ ...form, published: v })} />
            <SaveButton saving={saving}>Save Category</SaveButton>
          </form>
        </Modal>
      )}
    </div>
  );
}
