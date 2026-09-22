# Portfolio Update Kit — Kent Niño Paler

Purpose: make https://kentpalerportfolio.vercel.app/ match the functional-hybrid resume and add AI-assisted coding as a technical skill, using Claude (Claude Code or chat) to do the editing.

**Before you start:** Claude could not open the live portfolio while this kit was prepared, so nothing below assumes your framework. Prompt 0 makes Claude read your actual code first. Save this whole file inside your portfolio repo as `docs/portfolio-update-kit.md` so Claude can read it.

## How the workflow fits together

1. Portfolio source code lives in a Git repo (ideally connected to Vercel, so every branch gets its own preview URL).
2. Open the repo in Claude Code (terminal or desktop app; setup is in the Claude Code docs at docs.claude.com).
3. Drop **Part 1** into the repo as `CLAUDE.md`. Claude Code reads it at the start of each session, so your rules apply every time.
4. Run the prompts in **Part 3** one at a time, in order. Review each result on a branch before moving on.
5. Use **Part 4** for everyday edits later.

No Git repo or Claude Code? The same prompts work in a normal Claude chat: paste the relevant files and add "here are my project files" before each prompt.

---

## Part 1 — CLAUDE.md (paste into the repo root)

````markdown
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
(fill in after the audit: dev, build, lint)

## Structure notes
(fill in after the audit: where pages, components, and content live)
````

---

## Part 2 — Portfolio content (mirrors the resume)

### SEO
- **Title:** Kent Niño Paler — Data Quality, Records & Operations Support Specialist
- **Meta description:** 15+ years in public-sector data quality, reporting, and records. Open to fully remote roles. Database design, process documentation, AI-assisted coding.

### Hero
- **Name:** Kent Niño Paler
- **Headline:** Data Quality, Records & Operations Support Specialist
- **Subline:** 15+ years in Philippine public-sector operations and information systems, now open to fully remote roles.
- **Buttons:** Download Resume | Contact Me | LinkedIn (linkedin.com/in/palerkentnino)

### About
Data, records, and systems professional with 15+ years in Philippine public-sector operations, moving into fully remote data quality, reporting, documentation, and operations-support roles.

I began in local-government IT, building city information systems, mapping business processes, and training users. For the last decade I have owned a secondary school's learner-records and reporting operations: 100% accuracy across 3,823 records in LIS validation, reports submitted on or ahead of deadlines, and an Outstanding performance rating (4.55, SY 2025–2026).

My current title is Registrar, but the work is data validation, statutory reporting, documentation, and process discipline under Data Privacy Act (RA 10173) controls, which are the same skills remote teams depend on. I also bring hands-on range in database design, QA and user acceptance testing, technical writing, and AI-assisted coding.

### Skills (grouped; no ratings or percentage bars)
- **Data Quality & Reporting:** Data Validation & Reconciliation, Data Quality Assurance, Statutory & Statistical Reporting, Report Consolidation, LIS / EBEIS Data Management
- **Records & Documentation:** Records Management, Records Archiving & Retrieval, Document Control & Verification, Audit Trails, Technical Documentation, Workflow Diagrams, User Manuals
- **Systems & Process Improvement:** Business Process Mapping, Requirements Gathering, Database Design (MSSQL 2012), Visual Basic.NET, QA & User Acceptance Testing, End-User Training
- **AI-Assisted Coding & Digital Tools:** AI-assisted web development with Claude; personal portfolio website (Vercel-hosted) built and maintained using AI-assisted coding; Microsoft Word, Excel, PowerPoint
- **Compliance & Security:** Data Privacy Act (RA 10173), Confidential Records Handling, DICT Data Privacy and Cybersecurity Training
- **Remote-Ready Strengths:** Self-directed ownership of end-to-end workflows with deadlines met early; written documentation and audit logs; digital security and confidentiality; coordination with department heads, developers, and division-level offices

### Projects / Case studies
Use the site's existing project-card style. No real records or screenshots of real data.

1. **Learner Records & Reporting Operations (DepEd, 2016–Present)**
   Owned the learner-records lifecycle for a secondary school: enrollment, LIS/EBEIS data management, verification, issuance, and archiving.
   Results: 100% accuracy across 3,823 learner records in LIS validation, zero backlog, same-day retrieval (SY 2025–2026); BEDs/BARs submitted 4–5 working days early; year-end archiving 1–2 weeks ahead of deadlines.
   Tags: Data Validation, Statutory Reporting, Records Management, RA 10173

2. **City Government Information Systems (LGU General Santos City, 2013–2016)**
   Designed, built, and maintained systems for city offices: motorized tricycle franchising (LG-MTFRS), City Health Information, Billing and Collection, Accountable Form Management, Community Tax, and Real Property Assessment and Tax.
   Results: validated through QA testing, user acceptance testing, and time-and-motion studies before rollout; trained 12 end-users for the City Health office; wrote user manuals, procedures, and workflow diagrams.
   Tags: Visual Basic.NET, MSSQL 2012, Process Mapping, QA/UAT, Technical Documentation

3. **F.R.A.M.E. Resident Data Validation (LGU General Santos City, 2010–2013)**
   Led a 12-member team validating resident records (personal details, family background, PhilHealth and contribution data).
   Results: 99% data accuracy; 99% registration completion out of 26,000 members, including during a barangay registration campaign.
   Tags: Data Validation, Team Leadership, Database Administration

4. **This Portfolio Website**
   Personal portfolio hosted on Vercel, built and maintained using AI-assisted coding.
   Tags: AI-Assisted Coding, Vercel, [VERIFY: framework and languages found in the repo audit]

### Experience
- **Department of Education — General Santos City National Secondary School of Arts and Trades** | Sep 2016 – Present
  *Registrar I | Learner Records, Data Validation & Statistical Reporting*
  - Own the learner-records lifecycle for a secondary school (enrollment, LIS/EBEIS data management, verification, issuance, archiving) with 100% LIS validation accuracy across 3,823 records and an Outstanding performance rating (4.55, SY 2025–2026).
  - Consolidate and submit statistical and budget reports (School Forms, BEIS Profile, WinS, BEDs, BARs) to DepEd/DBM standards on or ahead of deadlines.
- **Local Government of General Santos City — City Mayor's Office, ICT Division** | May 2013 – Aug 2016
  *Computer Operator I | Information Systems, Process Mapping & Technical Documentation*
  - Designed, built, and maintained government information systems in Visual Basic.NET and MSSQL 2012; led business process mapping and requirements gathering with department heads and end users.
  - Led implementation and training for the City Health office (12 end-users) and produced user manuals, procedures, and workflow diagrams.
- **Local Government of General Santos City — City Social Welfare & Development Office (F.R.A.M.E.)** | Nov 2010 – May 2013
  *Administrative Aide IV | Resident Data Validation, Team Leadership & Database/IT Administration*
  - Team Leader for 12 members validating resident records at 99% data accuracy and reaching 99% registration completion of 26,000 members.
  - Information System and Database Administrator and computer-maintenance in-charge, coordinating system updates and security patches with developers.

### Education
- Master's in Public Administration, Notre Dame of Dadiangas University, General Santos City (Jun 2015 – Mar 2018)
- Bachelor of Science in Information Technology, Notre Dame of Dadiangas University, General Santos City (Jun 2006 – Mar 2010)

### Training & Certificates
- DICT-ICT012: Advanced Level of Digital Transformation — March 2024
- DICT-ICT007: Data Privacy — Good Governance — February 2024
- Cybersecurity Competency Framework Training — November 2023
- Digital Transformative Technologies — July 2022
- Digital Governance and Management Training — October 2021

### Languages
English, Filipino

### Contact
General Santos City, Philippines | Ayamenakayama27@gmail.com | +63 916 227 5205 | linkedin.com/in/palerkentnino
Status line: "Open to fully remote roles."

---

## Part 3 — Prompt sequence for Claude Code

Run these in order. Each one is a separate Claude Code session or message. After each, review the diff and preview before continuing.

### Prompt 0 — Audit (read-only)
```text
Read CLAUDE.md (if it exists) and docs/portfolio-update-kit.md. Do NOT change any files yet.

Audit this repo and report:
1. Framework, language, styling approach, and how it deploys.
2. A tree of the key pages and components.
3. Where each current section's content lives (hero, about, skills, projects, experience,
   contact) and whether it is hardcoded in components or stored in data files.
4. The dev, build, and lint commands.
5. Gaps between the current site content and the Part 2 content in the kit.
6. Risks: outdated dependencies, missing alt text, broken links, oversized images.

Finish with a short step-by-step plan for making the site match Part 2. Keep the report concise.
```

### Prompt 1 — Create CLAUDE.md
```text
Create CLAUDE.md at the repo root from Part 1 of docs/portfolio-update-kit.md. Fill in the
Commands and Structure notes using what you found in the audit. Show me the file before you
commit anything.
```

### Prompt 2 — Single content file (no visual changes)
```text
On a new branch content/single-source, create one content data file that follows this repo's
language and conventions (for example data/content.ts or content.json) and holds all the copy
from Part 2 of docs/portfolio-update-kit.md. Refactor the components so they read from it.
Do not change the design. Run lint and build, then tell me the file path so I can record it
in CLAUDE.md.
```

### Prompt 3 — Hero and About
```text
On branch content/hero-about, update the Hero and About sections to the Part 2 copy: name,
headline, subline, buttons, and the three About paragraphs. Keep the existing design. Add a
small "Open to fully remote roles" status line near the hero. Run lint and build and summarize
what changed.
```

### Prompt 4 — Skills, including AI-assisted coding
```text
On branch content/skills, restructure the Skills section into the six groups in Part 2, with
"AI-Assisted Coding & Digital Tools" as its own visible group. Use the site's existing visual
style (chips or cards). Do not add proficiency bars, percentages, or star ratings. Do not add
any tool or skill that is not listed in Part 2. Run lint and build and summarize.
```

### Prompt 5 — Experience, Education, Training
```text
On branch content/experience, update Experience, Education, and Training & Certificates to
match Part 2 exactly. Keep official job titles as written, with the descriptive label shown
beside them. Keep reverse-chronological order. Run lint and build and summarize.
```

### Prompt 6 — Projects and case studies
```text
On branch content/projects, replace or restructure the Projects section with the four
case studies in Part 2, using the existing project-card style. Do not add screenshots or any
real learner, resident, or government data. For project 4, fill the [VERIFY] tag with the
framework and languages you found in the repo, and tell me what you filled in.
```

### Prompt 7 — Resume download and contact
```text
On branch content/resume-contact, wire the "Download Resume" button to /Kent_Nino_Paler_Resume.pdf
in the public folder (I will add the PDF myself; use a temporary placeholder link if the file is
missing and tell me). Update the Contact section to match Part 2. Make sure LinkedIn and email
links open correctly.
```

### Prompt 8 — SEO, accessibility, performance
```text
On branch content/polish, apply the SEO title, meta description, and Open Graph tags from Part 2.
Then check accessibility (heading order, alt text, contrast, keyboard navigation), test the layout
at 360px, 768px, and 1280px widths, and fix problems with minimal changes. Report before-and-after
for anything you fixed. Do not redesign.
```

### Prompt 9 — Final consistency review
```text
Compare all visible copy on the site against Part 2 of docs/portfolio-update-kit.md. Produce a
table of any differences (section, site text, kit text). Fix every difference so the site matches
the kit, list any remaining [VERIFY] placeholders, then run lint and build.
```

### Deploy
1. Push each branch and open the Vercel preview URL. Check it on your phone.
2. Merge to `main` when you are happy, and Vercel publishes the update.
3. Export the resume as PDF, name it `Kent_Nino_Paler_Resume.pdf`, and place it in the repo's public folder.

---

## Part 4 — Reusable prompts for everyday edits

**Change a sentence**
```text
In the [section] of the portfolio, change "[old text]" to "[new text]". Edit the content data
file, not the component. Change nothing else. Show me the diff.
```

**Add a project**
```text
Add a new project card to the Projects section using the existing style. Title: [title].
Description: [what it is]. Results: [only verified facts]. Tags: [tags]. Use [VERIFY] for
anything I have not given you. Do not invent details.
```

**Add a certificate**
```text
Add this certificate to Training & Certificates, newest first: [name] — [month year].
Keep the format of the existing entries.
```

**Sync after a resume change**
```text
Here is my updated resume text: [paste]. Compare it with the site copy, list the differences,
update the content file so the site matches the resume, and run lint and build.
```

**Fix a layout bug**
```text
At [width]px the [component] [describe the problem]. Reproduce it, fix it with the smallest
CSS change possible, and show me the diff.
```

**Try a variation safely**
```text
On a new branch experiment/[name], try [describe change]. Do not touch main. Tell me the branch
name so I can view its Vercel preview.
```

**Explain in plain language**
```text
Explain what each changed file does and why you changed it, in plain language. I am not a
full-time developer.
```

---

## Part 5 — Review checklist before every merge

- [ ] `git diff` reviewed; only the files you expected changed
- [ ] Preview opened on phone and desktop
- [ ] Every number matches the resume (3,823 records, 100%, 99%, 26,000, 12, 4.55)
- [ ] No real learner, resident, or government data anywhere
- [ ] No `[VERIFY]` placeholder left in visible text
- [ ] Resume PDF downloads and matches the latest resume
- [ ] Links work (LinkedIn, email, portfolio)
- [ ] No secrets or `.env` files committed
