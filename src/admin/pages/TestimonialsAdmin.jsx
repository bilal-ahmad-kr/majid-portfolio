import { useState } from "react";
import { Plus, Star } from "lucide-react";
import { testimonialsService } from "../../lib/cms";
import { useCrudList } from "../../hooks/useCrud";
import { Field, TextAreaField, CheckboxField } from "../components/Field";
import { ImageUploader } from "../components/ImageUploader";
import { Modal, ListRow, PublishedBadge, SaveButton } from "../components/Shared";

const EMPTY = {
  name: "",
  role: "",
  company: "",
  quote: "",
  avatar_url: "",
  rating: 5,
  published: true,
  service_id: "",
  sort_order: 0,
};

export default function TestimonialsAdmin() {
  const { rows, loading, create, update, remove } = useCrudList(testimonialsService, {
    orderBy: "sort_order",
    ascending: true,
  });
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

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
        service_id: form.service_id || null,
        sort_order: parseInt(form.sort_order) || 0,
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
    if (!confirm("Delete this testimonial?")) return;
    await remove(id);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-extrabold text-[#0F172A]">Testimonials</h1>
        <button onClick={openNew} className="flex items-center gap-1.5 rounded-lg bg-[#1E5BFF] px-4 py-2 text-[13.5px] font-semibold text-white">
          <Plus size={15} />
          New Testimonial
        </button>
      </div>

      {loading ? (
        <p className="mt-8 text-[13.5px] text-[#64748B]">Loading…</p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          {rows.map((t) => (
            <ListRow
              key={t.id}
              title={t.name}
              subtitle={`${t.role ?? ""}${t.company ? ` — ${t.company}` : ""}`}
              badge={<PublishedBadge published={t.published} />}
              onEdit={() => openEdit(t)}
              onDelete={() => handleDelete(t.id)}
            />
          ))}
          {rows.length === 0 && <p className="p-6 text-center text-[13.5px] text-[#64748B]">No testimonials yet.</p>}
        </div>
      )}

      {editing && (
        <Modal title={editing === "new" ? "New Testimonial" : "Edit Testimonial"} onClose={() => setEditing(null)}>
          <form onSubmit={handleSave} className="space-y-4">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Role" value={form.role} onChange={(v) => setForm({ ...form, role: v })} />
            <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
            <TextAreaField label="Quote" value={form.quote} onChange={(v) => setForm({ ...form, quote: v })} required />
            <ImageUploader label="Avatar" value={form.avatar_url} onChange={(v) => setForm({ ...form, avatar_url: v })} folder="testimonials" />
            <label className="block">
              <span className="text-[12.5px] font-semibold text-[#334155]">Rating</span>
              <div className="mt-1.5 flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setForm({ ...form, rating: n })}
                    className={n <= form.rating ? "text-[#F59E0B]" : "text-[#E2E8F0]"}
                  >
                    <Star size={20} fill="currentColor" />
                  </button>
                ))}
              </div>
            </label>
            <CheckboxField label="Published" checked={form.published} onChange={(v) => setForm({ ...form, published: v })} />
            <Field label="Sort Order" type="number" value={form.sort_order} onChange={(v) => setForm({ ...form, sort_order: v })} />
            
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
            <SaveButton saving={saving}>Save Testimonial</SaveButton>
          </form>
        </Modal>
      )}
    </div>
  );
}