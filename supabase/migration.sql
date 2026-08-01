-- ============================================================
-- MJD CMS Full Migration Script
-- Run this in your Supabase SQL Editor
-- ============================================================

-- ─────────────────────────────────────────────────────────────
-- 1. CATEGORIES TABLE (new)
-- ─────────────────────────────────────────────────────────────
create table if not exists categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text not null unique,
  description text,
  published   boolean not null default true,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- 2. SERVICES TABLE — add missing columns
-- ─────────────────────────────────────────────────────────────
alter table services
  add column if not exists eyebrow          text,
  add column if not exists short_description text,
  add column if not exists about_heading    text,
  add column if not exists about_paragraph  text,
  add column if not exists about_image_url  text,
  add column if not exists benefits_heading text,
  add column if not exists benefits_image_url text,
  add column if not exists icon_name        text,
  add column if not exists sort_order       integer not null default 0,
  add column if not exists gallery          jsonb not null default '[]'::jsonb;

-- ─────────────────────────────────────────────────────────────
-- 3. BLOGS TABLE — add relationship columns
-- ─────────────────────────────────────────────────────────────
alter table blogs
  add column if not exists service_id  uuid references services(id) on delete set null,
  add column if not exists tags        jsonb not null default '[]'::jsonb,
  add column if not exists featured    boolean not null default false;

-- ─────────────────────────────────────────────────────────────
-- 4. TESTIMONIALS TABLE — add relationship columns
-- ─────────────────────────────────────────────────────────────
alter table testimonials
  add column if not exists service_id   uuid references services(id) on delete set null,
  add column if not exists category     text,
  add column if not exists designation  text,
  add column if not exists sort_order   integer not null default 0;

-- ─────────────────────────────────────────────────────────────
-- 5. FAQS TABLE — add relationship columns
-- ─────────────────────────────────────────────────────────────
alter table faqs
  add column if not exists service_id  uuid references services(id) on delete set null,
  add column if not exists category    text,
  add column if not exists sort_order  integer not null default 0;

-- ─────────────────────────────────────────────────────────────
-- 6. CONTACT_MESSAGES TABLE — add management columns
-- ─────────────────────────────────────────────────────────────
alter table contact_messages
  add column if not exists status      text not null default 'new',
  add column if not exists notes       text,
  add column if not exists phone       text,
  add column if not exists source_page text;

-- ─────────────────────────────────────────────────────────────
-- 7. PROJECTS TABLE — add missing columns
-- ─────────────────────────────────────────────────────────────
alter table projects
  add column if not exists seo_title        text,
  add column if not exists seo_description  text,
  add column if not exists short_description text,
  add column if not exists gallery          jsonb not null default '[]'::jsonb,
  add column if not exists live_url         text,
  add column if not exists github_url       text;

-- ─────────────────────────────────────────────────────────────
-- 8. INDEXES on foreign keys and common filters
-- ─────────────────────────────────────────────────────────────
create index if not exists idx_blogs_service_id         on blogs(service_id);
create index if not exists idx_blogs_published          on blogs(published);
create index if not exists idx_blogs_slug               on blogs(slug);
create index if not exists idx_testimonials_service_id  on testimonials(service_id);
create index if not exists idx_testimonials_published   on testimonials(published);
create index if not exists idx_faqs_service_id          on faqs(service_id);
create index if not exists idx_faqs_published           on faqs(published);
create index if not exists idx_faqs_section             on faqs(section);
create index if not exists idx_projects_service_id      on projects(service_id);
create index if not exists idx_projects_published       on projects(published);
create index if not exists idx_projects_slug            on projects(slug);
create index if not exists idx_services_slug            on services(slug);
create index if not exists idx_services_published       on services(published);
create index if not exists idx_categories_slug          on categories(slug);

-- ─────────────────────────────────────────────────────────────
-- 9. ROW LEVEL SECURITY (RLS)
-- ─────────────────────────────────────────────────────────────

-- Enable RLS on categories
alter table categories enable row level security;

-- Public read for published categories
create policy if not exists "Public read published categories"
  on categories for select
  using (published = true);

-- Authenticated admin write
create policy if not exists "Admins manage categories"
  on categories for all
  using (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────────────────────
-- 10. SEED: Initial categories from existing static data
-- ─────────────────────────────────────────────────────────────
insert into categories (name, slug, published, sort_order) values
  ('Facebook Ads',          'facebook-ads',         true, 1),
  ('Google Ads',            'google-ads',            true, 2),
  ('CRM Systems',           'crm-systems',           true, 3),
  ('AI Automation',         'ai-automation',         true, 4),
  ('Sales Funnels',         'sales-funnels',         true, 5),
  ('Dashboards & Reporting','dashboards-reporting',  true, 6),
  ('Web Development',       'web-development',       true, 7),
  ('Digital Marketing',     'digital-marketing',     true, 8),
  ('AI Integration',        'ai-integration',        true, 9)
on conflict (slug) do nothing;

-- ─────────────────────────────────────────────────────────────
-- 11. SEED: Site settings (contact info, social links)
-- ─────────────────────────────────────────────────────────────
insert into settings (key, value) values
  ('contact_info', '{
    "email": "hello@mjdaiautomation.com",
    "phone": "+1 (302) 555-0139",
    "address": "Remote-first · Serving clients worldwide"
  }'::jsonb),
  ('social_links', '{
    "linkedin": "https://linkedin.com",
    "instagram": "https://instagram.com",
    "facebook": "https://facebook.com",
    "twitter": "https://x.com"
  }'::jsonb),
  ('site_info', '{
    "company_name": "MJD AI Automation",
    "tagline": "Automate. Innovate. Grow."
  }'::jsonb)
on conflict (key) do update set value = excluded.value;
