import { useState } from "react";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { servicesService } from "../../lib/cms";
import { useCrudList } from "../../hooks/useCrud";
import { Field, TextAreaField, CheckboxField } from "../components/Field";
import { RepeaterField, TagListField } from "../components/RepeaterField";
import { ImageUploader } from "../components/ImageUploader";
import { ListRow, PublishedBadge, SaveButton } from "../components/Shared";

const EMPTY = {
  title: "",
  slug: "",
  icon: "",
  short_description: "",
  hero_title: "",
  hero_subtitle: "",
  description: "",
  published: false,
};

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ServicesAdmin() {
  const { rows, loading, create, update, remove } = useCrudList(
    servicesService,
    {
      orderBy: "order_index",
      ascending: true,
    },
  );
  const [editing, setEditing] = useState(null);

  if (editing) {
    return (
      <ServiceEditor
        service={editing === "new" ? EMPTY : editing}
        onSave={editing === "new" ? create : (id, data) => update(id, data)}
        onDelete={
          editing === "new"
            ? null
            : () => remove(editing.id).then(() => setEditing(null))
        }
        onBack={() => setEditing(null)}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-extrabold text-[#0F172A]">
            Services
          </h1>
          <p className="mt-1 text-[13.5px] text-[#64748B]">
            Edit each of your service pages — hero, description, features,
            benefits, process, industries, FAQs, and SEO.
          </p>
        </div>
        <button
          onClick={() => setEditing("new")}
          className="flex items-center gap-1.5 rounded-lg bg-[#1E5BFF] px-4 py-2 text-[13.5px] font-semibold text-white"
        >
          <Plus size={15} />
          New Service
        </button>
      </div>

      {loading ? (
        <p className="mt-8 text-[13.5px] text-[#64748B]">Loading…</p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
          {rows.map((s) => (
            <ListRow
              key={s.id}
              title={s.title}
              subtitle={`/services/${s.slug}`}
              badge={<PublishedBadge published={s.published} />}
              onEdit={() => setEditing(s)}
            />
          ))}
          {rows.length === 0 && (
            <p className="p-6 text-center text-[13.5px] text-[#64748B]">
              No services yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function ServiceEditor({ service, onSave, onBack, onDelete }) {
  const [form, setForm] = useState({
    ...service,
    features: service.features ?? [],
    benefits: service.benefits ?? [],
    process: service.process ?? [],
    industries: service.industries ?? [],
    faqs: service.faqs ?? [],
    tech: service.tech ?? [],
  });
  const [saving, setSaving] = useState(false);

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...form,
        slug: form.slug || slugify(form.title),
      };
      await onSave(service.id, payload);
      onBack();
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1E5BFF]"
        >
          <ArrowLeft size={14} />
          All services
        </button>
        {onDelete && (
          <button
            onClick={() => {
              if (confirm("Delete this service? This cannot be undone.")) {
                onDelete();
              }
            }}
            className="flex items-center gap-1.5 text-[13px] font-semibold text-red-500 hover:text-red-600"
          >
            <Trash2 size={14} />
            Delete Service
          </button>
        )}
      </div>

      <h1 className="mt-3 text-[22px] font-extrabold text-[#0F172A]">
        {form.title || "New Service"}
      </h1>
      {form.slug && (
        <p className="text-[12.5px] text-[#94A3B8]">/services/{form.slug}</p>
      )}

      <form onSubmit={handleSave} className="mt-6 max-w-2xl space-y-8">
        <Section title="Basic Settings">
          <Field
            label="Service Name (Title)"
            value={form.title}
            onChange={(v) => setForm({ ...form, title: v })}
            required
          />
          <Field
            label="URL Slug"
            value={form.slug}
            onChange={(v) => setForm({ ...form, slug: v })}
          />
          <Field
            label="Icon Name (Lucide React)"
            value={form.icon}
            onChange={(v) => setForm({ ...form, icon: v })}
            placeholder="e.g. Bot, Database, Search"
          />
          <TextAreaField
            label="Short Description (for menus/cards)"
            value={form.short_description}
            onChange={(v) => setForm({ ...form, short_description: v })}
            rows={2}
          />
          <Field
            label="Order Index (Sorting)"
            type="number"
            value={form.order_index}
            onChange={(v) =>
              setForm({ ...form, order_index: parseInt(v) || 0 })
            }
          />
        </Section>
        <Section title="Hero">
          <Field
            label="Hero Title"
            value={form.hero_title}
            onChange={(v) => setForm({ ...form, hero_title: v })}
          />
          <TextAreaField
            label="Hero Subtitle"
            value={form.hero_subtitle}
            onChange={(v) => setForm({ ...form, hero_subtitle: v })}
            rows={2}
          />
          <ImageUploader
            label="Hero / Featured Image"
            value={form.hero_image_url}
            onChange={(v) => setForm({ ...form, hero_image_url: v })}
            folder="services"
          />
          <ImageUploader
            label="Benefits Image"
            value={form.benefits_image_url}
            onChange={(v) =>
              setForm({
                ...form,
                benefits_image_url: v,
              })
            }
            folder="services"
          />
        </Section>

        {/* Description */}
        <Section title="Description">
          <TextAreaField
            label="How it works"
            value={form.description}
            onChange={(v) => setForm({ ...form, description: v })}
            rows={5}
          />
          <TagListField
            label="Technologies / Platforms Used"
            items={form.tech}
            onChange={(v) => setForm({ ...form, tech: v })}
          />
        </Section>

        {/* Features */}
        <Section title="Key Features">
          <RepeaterField
            label="Features"
            items={form.features}
            onChange={(v) => setForm({ ...form, features: v })}
            fields={[{ key: "text", label: "Feature" }]}
            emptyItem={{ text: "" }}
          />
        </Section>

        {/* Benefits */}
        <Section title="Benefits">
          <RepeaterField
            label="Benefits"
            items={form.benefits}
            onChange={(v) => setForm({ ...form, benefits: v })}
            fields={[
              { key: "title", label: "Title" },
              { key: "description", label: "Description", multiline: true },
            ]}
            emptyItem={{ title: "", description: "" }}
          />
        </Section>

        {/* Process */}
        <Section title="Process">
          <RepeaterField
            label="Process Steps"
            items={form.process}
            onChange={(v) => setForm({ ...form, process: v })}
            fields={[
              { key: "title", label: "Step Title" },
              { key: "description", label: "Description", multiline: true },
            ]}
            emptyItem={{ title: "", description: "" }}
          />
        </Section>

        {/* Industries */}
        <Section title="Industries">
          <RepeaterField
            label="Industries Served"
            items={form.industries}
            onChange={(v) => setForm({ ...form, industries: v })}
            fields={[{ key: "name", label: "Industry" }]}
            emptyItem={{ name: "" }}
          />
        </Section>

        {/* FAQs */}
        <Section title="FAQs">
          <RepeaterField
            label="Service FAQs"
            items={form.faqs}
            onChange={(v) => setForm({ ...form, faqs: v })}
            fields={[
              { key: "question", label: "Question" },
              { key: "answer", label: "Answer", multiline: true },
            ]}
            emptyItem={{ question: "", answer: "" }}
          />
        </Section>

        {/* SEO */}
        <Section title="SEO">
          <Field
            label="SEO Title"
            value={form.seo_title}
            onChange={(v) => setForm({ ...form, seo_title: v })}
          />
          <TextAreaField
            label="SEO Description"
            value={form.seo_description}
            onChange={(v) => setForm({ ...form, seo_description: v })}
            rows={2}
          />
        </Section>

        <CheckboxField
          label="Published"
          checked={form.published}
          onChange={(v) => setForm({ ...form, published: v })}
        />

        <SaveButton saving={saving}>Save Service</SaveButton>
      </form>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <h2 className="text-[14px] font-bold text-[#0F172A]">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}
