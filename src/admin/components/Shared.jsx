import { X, Pencil, Trash2 } from "lucide-react";

export function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
      <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-[#0F172A]">{title}</h2>
          <button type="button" onClick={onClose}>
            <X size={18} className="text-[#94A3B8]" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

export function ListRow({ title, subtitle, badge, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#F1F5F9] px-5 py-4 last:border-0">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p className="truncate text-[14px] font-semibold text-[#0F172A]">{title}</p>
          {badge}
        </div>
        {subtitle && <p className="text-[12.5px] text-[#64748B]">{subtitle}</p>}
      </div>
      <div className="flex shrink-0 gap-2">
        {onEdit && (
          <button onClick={onEdit} className="rounded-lg p-2 text-[#475569] hover:bg-[#F1F5F9]">
            <Pencil size={15} />
          </button>
        )}
        {onDelete && (
          <button onClick={onDelete} className="rounded-lg p-2 text-[#D90429] hover:bg-[#FEE2E2]">
            <Trash2 size={15} />
          </button>
        )}
      </div>
    </div>
  );
}

export function PublishedBadge({ published }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${
        published ? "bg-[#DCFCE7] text-[#166534]" : "bg-[#F1F5F9] text-[#64748B]"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}

export function SaveButton({ saving, children = "Save" }) {
  return (
    <button
      type="submit"
      disabled={saving}
      className="mt-6 w-full rounded-lg bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] py-2.5 text-[14px] font-semibold text-white disabled:opacity-60"
    >
      {saving ? "Saving…" : children}
    </button>
  );
}