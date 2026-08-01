import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { pagesService } from "../../lib/cms";
import { useCrudRecord } from "../../hooks/useCrud";
import { Field, TextAreaField } from "../components/Field";
import { ImageUploader } from "../components/ImageUploader";
import { RepeaterField } from "../components/RepeaterField";
import { SaveButton } from "../components/Shared";

/**
 * Defines which fields exist in each page's `content` jsonb blob, so this
 * one component can drive both the Home and About editors. Add more entries
 * to a page's `fields` array any time you want a new editable section —
 * no schema migration needed since content is jsonb.
 */
const PAGE_CONFIG = {
  home: {
    title: "Home Page",
    fields: [
      { key: "hero_title", label: "Hero Title" },
      { key: "hero_subtitle", label: "Hero Subtitle", multiline: true },
      { key: "hero_image_url", label: "Hero Image", type: "image" },
      { key: "stat_1_value", label: "Stat 1 — Value" },
      { key: "stat_1_label", label: "Stat 1 — Label" },
      { key: "stat_2_value", label: "Stat 2 — Value" },
      { key: "stat_2_label", label: "Stat 2 — Label" },
    ],
  },
  about: {
    title: "About Page",
    fields: [
      // Hero
      { key: "hero_eyebrow", label: "Hero Eyebrow" },
      { key: "hero_title", label: "Hero Title", multiline: true },
      { key: "hero_description", label: "Hero Description", multiline: true },
      { key: "hero_button_text", label: "Hero Button Text" },
      { key: "hero_image_url", label: "Hero Image", type: "image" },
      { 
        key: "pillars", 
        label: "Hero Pillars", 
        type: "repeater",
        emptyItem: { icon: "Boxes", label: "", detail: "" },
        fields: [
          { key: "icon", label: "Lucide Icon Name" },
          { key: "label", label: "Label" },
          { key: "detail", label: "Detail" }
        ]
      },
      // Company Story
      { key: "story_eyebrow", label: "Story Eyebrow" },
      { key: "story_title", label: "Story Title", multiline: true },
      { key: "story_description1", label: "Story Paragraph 1", multiline: true },
      { key: "story_description2", label: "Story Paragraph 2", multiline: true },
      { key: "story_timeline_start_label", label: "Timeline Start Label" },
      { key: "story_timeline_start_text", label: "Timeline Start Text", multiline: true },
      { key: "story_timeline_now_label", label: "Timeline Now Label" },
      { key: "story_timeline_now_text", label: "Timeline Now Text", multiline: true },
      { key: "story_button_text", label: "Story Button Text" },
      { key: "story_image_url", label: "Story Image", type: "image" },
      // Mission
      { key: "mission_title", label: "Mission Title" },
      { key: "mission_text", label: "Mission Text", multiline: true },
      { key: "vision_title", label: "Vision Title" },
      { key: "vision_text", label: "Vision Text", multiline: true },
      { key: "why_eyebrow", label: "Why Choose Us Eyebrow" },
      { key: "why_title", label: "Why Choose Us Title", multiline: true },
      { 
        key: "valueProps", 
        label: "Why Choose Us Value Props", 
        type: "repeater",
        emptyItem: { icon: "HardHat", title: "", detail: "" },
        fields: [
          { key: "icon", label: "Lucide Icon Name" },
          { key: "title", label: "Title" },
          { key: "detail", label: "Detail", multiline: true }
        ]
      },
      { key: "team_eyebrow", label: "Team Eyebrow" },
      { key: "team_title", label: "Team Title" },
      { key: "team_name", label: "Team Name" },
      { key: "team_role", label: "Team Role" },
      { key: "team_bio", label: "Team Bio", multiline: true },
      { key: "team_photo", label: "Team Photo", type: "image" },
      // Process
      { key: "process_eyebrow", label: "Process Eyebrow" },
      { key: "process_title", label: "Process Title" },
      { key: "process_description", label: "Process Description", multiline: true },
      { 
        key: "process_steps", 
        label: "Process Steps", 
        type: "repeater",
        emptyItem: { step: "01", icon: "Search", title: "", desc: "" },
        fields: [
          { key: "step", label: "Step Number (e.g. 01)" },
          { key: "icon", label: "Lucide Icon Name" },
          { key: "title", label: "Title" },
          { key: "desc", label: "Description", multiline: true }
        ]
      }
    ],
  },
};

export default function PagesAdmin() {
  const { slug } = useParams(); // "home" | "about"
  const config = PAGE_CONFIG[slug];

  const fetcher = React.useCallback(() => pagesService.get(slug), [slug]);
  const saver = React.useCallback((values) => pagesService.update(slug, values), [slug]);

  const { data, loading, save } = useCrudRecord(fetcher, saver);

  const [content, setContent] = useState(null);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Sync local form state once data loads
  if (data && content === null) {
    setContent(data.content || {});
    setSeoTitle(data.seo_title || "");
    setSeoDescription(data.seo_description || "");
  }

  if (!config) return <p className="text-[13.5px] text-[#D90429]">Unknown page: {slug}</p>;
  if (loading || content === null) return <p className="text-[13.5px] text-[#64748B]">Loading…</p>;

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      await save({ content, seo_title: seoTitle, seo_description: seoDescription });
      setSaved(true);
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-[22px] font-extrabold text-[#0F172A]">{config.title}</h1>
      <p className="mt-1 text-[13.5px] text-[#64748B]">
        Changes here go live on the public site immediately — no rebuild needed.
      </p>

      <form onSubmit={handleSave} className="mt-6 space-y-4 rounded-2xl border border-[#E2E8F0] bg-white p-6">
        {config.fields.map((f) =>
          f.type === "image" ? (
            <ImageUploader
              key={f.key}
              label={f.label}
              value={content[f.key]}
              onChange={(v) => setContent({ ...content, [f.key]: v })}
              folder="pages"
            />
          ) : f.type === "repeater" ? (
            <RepeaterField
              key={f.key}
              label={f.label}
              items={content[f.key] || []}
              onChange={(v) => setContent({ ...content, [f.key]: v })}
              fields={f.fields}
              emptyItem={f.emptyItem}
            />
          ) : f.multiline ? (
            <TextAreaField
              key={f.key}
              label={f.label}
              value={content[f.key] || ""}
              onChange={(v) => setContent({ ...content, [f.key]: v })}
              rows={4}
            />
          ) : (
            <Field
              key={f.key}
              label={f.label}
              value={content[f.key] || ""}
              onChange={(v) => setContent({ ...content, [f.key]: v })}
            />
          )
        )}

        <div className="border-t border-[#F1F5F9] pt-4">
          <Field label="SEO Title" value={seoTitle} onChange={setSeoTitle} />
        </div>
        <TextAreaField label="SEO Description" value={seoDescription} onChange={setSeoDescription} rows={2} />

        {saved && <p className="text-[12.5px] font-medium text-[#166534]">Saved — live on the site now.</p>}
        <SaveButton saving={saving}>Save {config.title}</SaveButton>
      </form>
    </div>
  );
}