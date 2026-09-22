# Project: Kent Niño Paler — Personal Portfolio

## Purpose
This portfolio supports Kent's career change from school registrar (DepEd) to fully remote
data quality, reporting, records, and operations-support roles. The site must match his resume.

## Source of truth
- Content lives in Part 2 of `docs/portfolio-update-kit.md`. After the content refactor,
  the single content data file becomes the source of truth (path recorded below).
- If the site and the resume text disagree, the resume text wins.
- Content data file path: (fill in after the refactor)

## Truthfulness rules (non-negotiable)
- Never invent employers, job titles, tools, metrics, dates, certifications, testimonials,
  project results, or remote-work experience.
- If a fact is missing, insert a visible `[VERIFY: what is needed]` placeholder and list every
  placeholder in your final message.
- Official titles stay accurate: Registrar I, Computer Operator I, Administrative Aide IV.
  A descriptive label may sit beside a title but never replaces it.
- No skill-level bars, percentages, or star ratings (they are unverifiable).
- No real learner, resident, or government records, names, or screenshots anywhere on the site
  (Data Privacy Act, RA 10173).
- Do not add new personal data (home address, birthdate, ID numbers).

## Working agreements
- Read this file and inspect the relevant files before editing.
- For any change touching more than 3 files, show a short plan first.
- Work on a branch named `content/<topic>`. Never commit directly to `main`. Small, clear commits.
- After edits, run the project's lint and build commands (find them in package.json / README),
  fix any errors, then summarize the changed files in plain language.
- Do not add dependencies, switch frameworks, or redesign the layout unless asked.
- Match the existing components, spacing, and styling conventions.
- Never touch `.env*` files or commit secrets.

## Quality bar
- Accessibility: one h1 per page, logical heading order, alt text on images, sufficient color
  contrast, keyboard-navigable, works at 360px width.
- Performance: optimize images, no unused libraries, no layout shift.
- SEO: page title, meta description, and Open Graph tags consistent with the headline.

## Writing style
Plain, professional, specific, and metric-led. Active voice. Use the resume's terms
(data validation, statutory reporting, records management, process mapping). No buzzwords,
no "passionate", no exaggeration.

## Commands
- `dev`: `npm run dev`
- `build`: `npm run build`
- `lint`: `npm run lint`

## Structure notes
- Pages live in `app/`:
  - `app/page.tsx` (homepage sections: hero/about/experience/projects/resume/contact)
  - `app/projects/[slug]/page.tsx` (project case study)
  - `app/layout.tsx` (RootLayout + metadata + global CSS)
- Reusable UI/components live in `components/`:
  - `components/layout/*` (Navbar/Footer/Container/Section)
  - `components/home/*`, `components/about/*`, `components/experience/*`, `components/projects/*`,
    `components/resume/*`, `components/contact/*`
  - `components/ui/*` (shared UI primitives like `SectionTitle`)
- Content data lives in `data/`:
  - `data/profile.ts`, `data/navigation.ts`, `data/about.ts`, `data/experience.ts`,
    `data/skills.ts`, `data/projects.ts`
- Static assets live in `public/` (images + SVGs; resume PDF expected in `public/`)
