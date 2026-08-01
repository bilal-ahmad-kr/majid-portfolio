import { useState } from "react";
import { Plus } from "lucide-react";
import { faqsService } from "../../lib/cms";
import { useCrudList } from "../../hooks/useCrud";
import { Field, TextAreaField, CheckboxField } from "../components/Field";
import { Modal, ListRow, PublishedBadge, SaveButton } from "../components/Shared";

const EMPTY = { 
  question: "", 
  answer: "", 
  section: "general", 
  published: true,
  service_id: "",
  sort_order: 0,
};

export default function FaqsAdmin() {
  const { rows, loading, create, update, remove } = useCrudList(faqsService, {
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
    if (!confirm("Delete this FAQ?")) return;
    await remove(id);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-extrabold text-[#0F172A]">FAQs</h1>
        <button onClick={openNew} className="flex items-center gap-1.5 rounded-lg bg-[#1E5BFF] px-4 py-2 text-[13.5px] font-semibold text-white">
          <Plus size={15} />
          New FAQ
        </button>
      </div>

      {loading ? (
        <p className="mt-8 text-[13.5px] text-[#64748B]">Loading…</p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          {rows.map((f) => (
            <ListRow
              key={f.id}
              title={f.question}
              subtitle={f.section}
              badge={<PublishedBadge published={f.published} />}
              onEdit={() => openEdit(f)}
              onDelete={() => handleDelete(f.id)}
            />
          ))}
          {rows.length === 0 && <p className="p-6 text-center text-[13.5px] text-[#64748B]">No FAQs yet.</p>}
        </div>
      )}

      {editing && (
        <Modal title={editing === "new" ? "New FAQ" : "Edit FAQ"} onClose={() => setEditing(null)}>
          <form onSubmit={handleSave} className="space-y-4">
            <Field label="Question" value={form.question} onChange={(v) => setForm({ ...form, question: v })} required />
            <TextAreaField label="Answer" value={form.answer} onChange={(v) => setForm({ ...form, answer: v })} required />
            <Field label="Section (e.g. 'general', 'services')" value={form.section} onChange={(v) => setForm({ ...form, section: v })} />
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
            <SaveButton saving={saving}>Save FAQ</SaveButton>
          </form>
        </Modal>
      )}
    </div>
  );
}