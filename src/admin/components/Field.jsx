export function Field({ label, value, onChange, required, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="text-[12.5px] font-semibold text-[#334155]">{label}</span>
      <input
        type={type}
        required={required}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2.5 text-[13.5px] outline-none focus:border-[#1E5BFF]"
      />
    </label>
  );
}

export function TextAreaField({ label, value, onChange, required, rows = 4, placeholder }) {
  return (
    <label className="block">
      <span className="text-[12.5px] font-semibold text-[#334155]">{label}</span>
      <textarea
        required={required}
        rows={rows}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2.5 text-[13.5px] outline-none focus:border-[#1E5BFF]"
      />
    </label>
  );
}

export function CheckboxField({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5">
      <input
        type="checkbox"
        checked={!!checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-[#E2E8F0] text-[#1E5BFF]"
      />
      <span className="text-[13px] font-medium text-[#334155]">{label}</span>
    </label>
  );
}

/**
 * A styled <select> dropdown.
 * @param {Array<{value: string, label: string}>} options
 */
export function SelectField({ label, value, onChange, options = [], required, placeholder = "— Select —" }) {
  return (
    <label className="block">
      <span className="text-[12.5px] font-semibold text-[#334155]">{label}</span>
      <select
        required={required}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-[13.5px] outline-none focus:border-[#1E5BFF]"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/**
 * A toggle switch for boolean fields (e.g. "Featured").
 */
export function ToggleField({ label, checked, onChange, description }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3">
      <div>
        <p className="text-[13px] font-semibold text-[#334155]">{label}</p>
        {description && <p className="text-[12px] text-[#94A3B8]">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
          checked ? "bg-[#1E5BFF]" : "bg-[#CBD5E1]"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}