import { Plus, Trash2, GripVertical } from "lucide-react";

/**
 * Edits an array of objects stored in a jsonb column.
 *
 * <RepeaterField
 *   label="Features"
 *   items={form.features}
 *   onChange={(next) => setForm({ ...form, features: next })}
 *   fields={[{ key: "text", label: "Feature", type: "text" }]}
 *   emptyItem={{ text: "" }}
 * />
 *
 * For FAQs: fields={[{key:"question"}, {key:"answer", multiline:true}]}
 * For process steps: fields={[{key:"title"}, {key:"description", multiline:true}]}
 */
export function RepeaterField({ label, items = [], onChange, fields, emptyItem }) {
  function updateItem(index, key, value) {
    const next = items.map((item, i) => (i === index ? { ...item, [key]: value } : item));
    onChange(next);
  }

  function addItem() {
    onChange([...items, { ...emptyItem }]);
  }

  function removeItem(index) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[12.5px] font-semibold text-[#334155]">{label}</span>
        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-1 text-[12px] font-semibold text-[#1E5BFF]"
        >
          <Plus size={13} />
          Add
        </button>
      </div>

      <div className="mt-2 space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3"
          >
            <GripVertical size={14} className="mt-2.5 shrink-0 text-[#CBD5E1]" />
            <div className="flex-1 space-y-2">
              {fields.map((f) =>
                f.multiline ? (
                  <textarea
                    key={f.key}
                    placeholder={f.label ?? f.key}
                    value={item[f.key] ?? ""}
                    onChange={(e) => updateItem(index, f.key, e.target.value)}
                    rows={2}
                    className="w-full rounded-md border border-[#E2E8F0] px-2.5 py-1.5 text-[13px] outline-none focus:border-[#1E5BFF]"
                  />
                ) : (
                  <input
                    key={f.key}
                    placeholder={f.label ?? f.key}
                    value={item[f.key] ?? ""}
                    onChange={(e) => updateItem(index, f.key, e.target.value)}
                    className="w-full rounded-md border border-[#E2E8F0] px-2.5 py-1.5 text-[13px] outline-none focus:border-[#1E5BFF]"
                  />
                )
              )}
            </div>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="mt-1 shrink-0 rounded-md p-1.5 text-[#D90429] hover:bg-[#FEE2E2]"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-[12px] text-[#94A3B8]">Nothing added yet.</p>
        )}
      </div>
    </div>
  );
}

/** Simpler variant for plain string arrays (e.g. tech stack tags). */
export function TagListField({ label, items = [], onChange, placeholder }) {
  function addTag(value) {
    const v = value.trim();
    if (!v) return;
    onChange([...items, v]);
  }
  function removeTag(index) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <span className="text-[12.5px] font-semibold text-[#334155]">{label}</span>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {items.map((tag, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[12px] font-medium text-[#475569]"
          >
            {tag}
            <button type="button" onClick={() => removeTag(i)} className="text-[#94A3B8] hover:text-[#D90429]">
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        placeholder={placeholder ?? "Type and press Enter"}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addTag(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
        className="mt-2 w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-[13px] outline-none focus:border-[#1E5BFF]"
      />
    </div>
  );
}