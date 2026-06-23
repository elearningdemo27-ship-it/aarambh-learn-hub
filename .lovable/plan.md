## Scope

Premium corporate L&D site for **Aarambh Resource Management Solutions** with static marketing pages + dynamic Blog and Success Stories managed via an admin panel. Backend on Lovable Cloud (Supabase under the hood) for auth, data, and image storage.

## Design direction

- Clean, premium consulting aesthetic: white background, deep navy/charcoal text, brand purple (from logo) as primary accent, warm gold as secondary accent, soft beige/grey section bands.
- Typography: elegant serif display (e.g. Instrument Serif) + modern sans body (Inter/Work Sans).
- Generous whitespace, rounded cards, soft shadows, subtle scroll/hover animations (framer-motion), professional iconography (lucide).
- Logo used in header, footer, admin login.

## Pages (frontend)

- `/` Home — hero, industries, differentiators, services overview, impact numbers, client logos, testimonials, CTA banner
- `/about` — story, who we are, differentiators, founder profiles (Capt. Shikha Saxena, Anil Saxena), philosophy
- `/solutions` — 6 service cards with anchors to detail sections (single page with rich sections per solution)
- `/success-stories` — dynamic list with category filter + search; `/success-stories/$slug` detail with related stories
- `/blog` — dynamic list with category filter + search; `/blog/$slug` detail with recent + related posts
- `/contact` — form (name/email/phone/org/service interest/message) saving to DB, company info, CTA

## Admin panel (under `_authenticated/admin`)

- `/auth` login (email+password) — only listed admin emails can access admin via `has_role('admin')`
- `/admin` dashboard with counts (blogs total/published/draft, stories total/published/draft)
- `/admin/blogs` list + search + status filter; create/edit (`/admin/blogs/new`, `/admin/blogs/$id`); delete; publish toggle
- `/admin/success-stories` same CRUD pattern
- Rich text via lightweight markdown textarea (Tiptap is heavy; will use a simple markdown editor with preview — keeps bundle lean and Worker-safe)
- Image upload to Supabase Storage bucket `media` (public read)
- Logout

## Backend (Lovable Cloud)

Tables:
- `blogs` (id, title, slug unique, excerpt, content, featured_image, author, category, tags text[], status, seo_title, seo_description, created_at, updated_at)
- `success_stories` (id, title, slug unique, summary, client_context, challenge, approach, outcome, category, featured_image, status, seo_title, seo_description, created_at, updated_at)
- `contact_submissions` (id, name, email, phone, organisation, service_interest, message, created_at)
- `user_roles` (id, user_id, role app_role) + `has_role()` security-definer fn
- Storage bucket `media` (public)

RLS:
- `blogs`/`success_stories`: anyone (anon+auth) can SELECT rows where `status='published'`; admins (has_role) full CRUD
- `contact_submissions`: anon INSERT only; admins SELECT
- `user_roles`: admins SELECT; users SELECT own

First admin: created via a one-time seed migration that grants `admin` role to a specified email once the user signs up (or via SQL after signup). I'll provide instructions to sign up then grant role.

## Tech details (for reviewers)

- TanStack Start, file-based routes under `src/routes/`
- Public reads use server publishable client in loaders + TanStack Query
- Admin mutations use browser Supabase client (RLS enforces admin)
- Image uploads via `supabase.storage.from('media').upload()`
- Forms validated with zod
- Auth uses `_authenticated/route.tsx` gate (managed)
- SEO: per-route `head()` with title/description/og tags; slug pages derive from loader data

## Out of scope / assumptions

- Using **email + password** admin auth only (no Google OAuth, no forgot-password page — can add later)
- Placeholder hero/section images via image generation; client logos as text/grey tiles
- Markdown editor instead of full WYSIWYG (Worker-compatible, lean). Confirm if you want full Tiptap WYSIWYG instead.
- Initial admin account: you'll sign up on `/auth` with your email, then I'll run a SQL insert to grant admin. Tell me the email you want.

## Build order

1. Enable Lovable Cloud
2. Migration: tables, RLS, roles, storage bucket
3. Design system tokens + logo asset + shared layout (header/footer)
4. Static pages (Home, About, Solutions, Contact)
5. Blog + Success Stories public pages (list + detail)
6. Admin auth gate + dashboard + CRUD screens
7. Polish, responsive QA

Reply **go** to proceed (and share the admin email), or tell me what to adjust.