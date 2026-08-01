import { useEffect, useState } from "react";
import { settingsService } from "../../lib/cms";
import { Field } from "../components/Field";
import { SaveButton } from "../components/Shared";

const DEFAULTS = {
  email: "",
  phone: "",
  address: "",
  facebook_url: "",
  instagram_url: "",
  linkedin_url: "",
};

export default function SettingsAdmin() {
  const [values, setValues] = useState(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    settingsService.get("contact_info").then((v) => {
      if (v) setValues({ ...DEFAULTS, ...v });
      setLoading(false);
    });
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      await settingsService.set("contact_info", values);
      setSaved(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-[13.5px] text-[#64748B]">Loading…</p>;

  return (
    <div className="max-w-lg">
      <h1 className="text-[22px] font-extrabold text-[#0F172A]">Site Settings</h1>
      <p className="mt-1 text-[13.5px] text-[#64748B]">
        Contact info and social links used across the site's footer and contact section.
      </p>

      <form onSubmit={handleSave} className="mt-6 space-y-4 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <Field label="Contact Email" value={values.email} onChange={(v) => setValues({ ...values, email: v })} type="email" />
        <Field label="Phone" value={values.phone} onChange={(v) => setValues({ ...values, phone: v })} />
        <Field label="Address" value={values.address} onChange={(v) => setValues({ ...values, address: v })} />
        <Field label="Facebook URL" value={values.facebook_url} onChange={(v) => setValues({ ...values, facebook_url: v })} />
        <Field label="Instagram URL" value={values.instagram_url} onChange={(v) => setValues({ ...values, instagram_url: v })} />
        <Field label="LinkedIn URL" value={values.linkedin_url} onChange={(v) => setValues({ ...values, linkedin_url: v })} />

        {saved && <p className="text-[12.5px] font-medium text-[#166534]">Saved.</p>}
        <SaveButton saving={saving}>Save Settings</SaveButton>
      </form>
    </div>
  );
}