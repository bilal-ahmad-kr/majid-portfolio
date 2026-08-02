import { useState } from "react";
import { Trash2, Mail, MailOpen, Save } from "lucide-react";
import { contactMessagesService } from "../../lib/cms";
import { useCrudList } from "../../hooks/useCrud";
import { SelectField, TextAreaField } from "../components/Field";

export default function ContactMessagesAdmin() {
  const { rows, loading, update, remove } = useCrudList(contactMessagesService, {
    orderBy: "created_at",
    ascending: false,
  });
  const [openId, setOpenId] = useState(null);
  
  // Local state for edits in the expanded view
  const [localEdit, setLocalEdit] = useState({});
  const [saving, setSaving] = useState(false);

  function handleOpen(m) {
    if (openId === m.id) {
      setOpenId(null);
    } else {
      setOpenId(m.id);
      setLocalEdit({
        status: m.status || "new",
        notes: m.notes || "",
      });
      if (m.status === "new" || !m.status) {
        // Auto mark as read (in_progress) when opened if new
        update(m.id, { status: "in_progress" }).then(() => {
          setLocalEdit((prev) => ({ ...prev, status: "in_progress" }));
        });
      }
    }
  }

  async function handleSaveLocal(id) {
    setSaving(true);
    try {
      await update(id, localEdit);
      // rows will automatically reflect this via useCrudList, but wait
      alert("Saved updates!");
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this message?")) return;
    await remove(id);
  }

  return (
    <div>
      <h1 className="text-[22px] font-extrabold text-[#0F172A]">Contact Messages</h1>
      <p className="mt-1 text-[13.5px] text-[#64748B]">
        Submissions from your site's contact form.
      </p>

      {loading ? (
        <p className="mt-8 text-[13.5px] text-[#64748B]">Loading…</p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          {rows.map((m) => {
            const isNew = m.status === "new" || !m.status;
            return (
              <div key={m.id} className="border-b border-[#F1F5F9] last:border-0">
                <button
                  onClick={() => handleOpen(m)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    {isNew ? (
                      <Mail size={16} className="shrink-0 text-[#1E5BFF]" />
                    ) : (
                      <MailOpen size={16} className="shrink-0 text-[#94A3B8]" />
                    )}
                    <div className="min-w-0">
                      <p className={`truncate text-[13.5px] ${isNew ? "font-bold text-[#0F172A]" : "font-medium text-[#334155]"}`}>
                        {m.name} <span className="font-normal text-[#94A3B8]">— {m.email}</span>
                      </p>
                      <p className="truncate text-[12.5px] text-[#64748B]">{m.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11.5px] font-medium uppercase tracking-wider text-[#94A3B8]">
                      {m.status}
                    </span>
                    <span className="text-[11.5px] text-[#94A3B8]">
                      {new Date(m.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </button>

                {openId === m.id && (
                  <div className="border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 py-5">
                    <p className="text-[13.5px] leading-relaxed text-[#334155] bg-white p-4 rounded-lg border border-slate-200 shadow-sm">{m.message}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-4 text-[12.5px] text-[#64748B]">
                      {m.phone && <div><strong>Phone:</strong> {m.phone}</div>}
                      {m.company && <div><strong>Company:</strong> {m.company}</div>}
                      {m.source_page && <div><strong>From:</strong> {m.source_page}</div>}
                    </div>

                    <div className="mt-6 border-t border-slate-200 pt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <SelectField 
                          label="Status" 
                          value={localEdit.status} 
                          onChange={(v) => setLocalEdit({ ...localEdit, status: v })}
                          options={[
                            { value: "new", label: "New" },
                            { value: "in_progress", label: "In Progress" },
                            { value: "completed", label: "Completed" },
                            { value: "archived", label: "Archived" }
                          ]}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <TextAreaField 
                          label="Internal Notes" 
                          value={localEdit.notes} 
                          onChange={(v) => setLocalEdit({ ...localEdit, notes: v })}
                          rows={2}
                          placeholder="Add notes about this lead..."
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <button
                        onClick={() => handleDelete(m.id)}
                        className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#D90429] hover:bg-red-50 px-3 py-1.5 rounded transition-colors"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                      <button
                        onClick={() => handleSaveLocal(m.id)}
                        disabled={saving}
                        className="flex items-center gap-1.5 rounded-lg bg-[#0F172A] px-4 py-2 text-[13px] font-semibold text-white hover:bg-black transition-colors"
                      >
                        <Save size={14} />
                        {saving ? "Saving..." : "Save Updates"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {rows.length === 0 && (
            <p className="p-6 text-center text-[13.5px] text-[#64748B]">No messages yet.</p>
          )}
        </div>
      )}
    </div>
  );
}