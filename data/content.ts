// Single source of truth for all portfolio content
// Mirrors Part 2 of docs/Portfolio_Update_Kit_Claude_Code.md

import { Project } from "@/types/project";

export const seo = {
  title: "Kent Niño Paler — Data Quality, Records & Operations Support Specialist",
  description:
    "15+ years in public-sector data quality, reporting, and records. Open to fully remote roles. Database design, process documentation, AI-assisted coding.",
  keywords: [
    "Data Quality",
    "Records Management",
    "Operations Support",
    "Database Design",
    "Process Documentation",
    "AI-Assisted Coding",
    "Public Sector",
    "Remote Work",
  ],
  openGraph: {
    title: "Kent Niño Paler — Data Quality, Records & Operations Support Specialist",
    description:
      "15+ years in public-sector data quality, reporting, and records. Open to fully remote roles. Database design, process documentation, AI-assisted coding.",
  },
};

export const profile = {
  name: "Kent Niño Paler",
  headline: "Data Quality, Records & Operations Support Specialist",
  tagline:
    "15+ years in Philippine public-sector operations and information systems, now open to fully remote roles.",
  location: "General Santos City, Philippines",
  email: "Ayamenakayama27@gmail.com",
  phone: "+63 916 227 5205",
  github: "https://github.com/kxianne27",
  linkedin: "https://linkedin.com/in/palerkentnino",
  resume: "/Kent_Nino_Paler_Resume.pdf",
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Training", href: "#training" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const heroButtons = [
  { label: "Download Resume", href: profile.resume, variant: "default" as const },
  { label: "Contact Me", href: "#contact", variant: "ghost" as const },
  { label: "LinkedIn", href: profile.linkedin, variant: "ghost" as const },
];

export const about = {
  title: "Data, records, and systems for remote operations support",
  description: `Data, records, and systems professional with 15+ years in Philippine public-sector operations, moving into fully remote data quality, reporting, documentation, and operations-support roles.

I began in local-government IT, building city information systems, mapping business processes, and training users. For the last decade I have owned a secondary school's learner-records and reporting operations: 100% accuracy across 3,823 records in LIS validation, reports submitted on or ahead of deadlines, and an Outstanding performance rating (4.55, SY 2025–2026).

My current title is Registrar, but the work is data validation, statutory reporting, documentation, and process discipline under Data Privacy Act (RA 10173) controls, which are the same skills remote teams depend on. I also bring hands-on range in database design, QA and user acceptance testing, technical writing, and AI-assisted coding.`,
  highlights: [
    "15+ Years Government Service",
    "Data Validation & Quality Assurance",
    "Records Management (DepEd, LGU)",
    "Statistical Reporting",
    "Database Design & Administration",
    "Business Process Automation",
    "Process Documentation",
    "AI-Assisted Coding",
  ],
  expertise: [
    {
      title: "Data Quality & Validation",
      description:
        "Own end-to-end data integrity for learner records and statistical reporting systems. Achieve 100% validation accuracy across 3,823 records.",
    },
    {
      title: "Records Management",
      description:
        "Design and maintain secure records systems for government compliance (RA 10173). Manage confidential data with integrity and confidentiality protocols.",
    },
    {
      title: "Process Documentation",
      description:
        "Create technical documentation, user manuals, and workflow diagrams. Write procedures that enable smooth system handovers and training.",
    },
    {
      title: "AI-Assisted Development",
      description:
        "Build and maintain a personal portfolio hosted on Vercel using AI-assisted coding.",
    },
  ],
};

export const skills = {
  groups: [
    {
      name: "Data Quality & Reporting",
      items: [
        "Data Validation & Reconciliation",
        "Data Quality Assurance",
        "Statutory & Statistical Reporting",
        "Report Consolidation",
        "LIS / EBEIS Data Management",
      ],
    },
    {
      name: "Records & Documentation",
      items: [
        "Records Management",
        "Records Archiving & Retrieval",
        "Document Control & Verification",
        "Audit Trails",
        "Technical Documentation",
        "Workflow Diagrams",
        "User Manuals",
      ],
    },
    {
      name: "Systems & Process Improvement",
      items: [
        "Business Process Mapping",
        "Requirements Gathering",
        "Database Design (MSSQL 2012)",
        "Visual Basic.NET",
        "QA & User Acceptance Testing",
        "End-User Training",
      ],
    },
    {
      name: "AI-Assisted Coding & Digital Tools",
      items: [
        "AI-assisted web development with Claude",
        "Personal portfolio website (Vercel-hosted)",
        "Microsoft Word",
        "Excel",
        "PowerPoint",
      ],
    },
    {
      name: "Compliance & Security",
      items: [
        "Data Privacy Act (RA 10173)",
        "Confidential Records Handling",
        "DICT Data Privacy and Cybersecurity Training",
      ],
    },
    {
      name: "Remote-Ready Strengths",
      items: [
        "Self-directed ownership of end-to-end workflows with deadlines met early",
        "Written documentation and audit logs",
        "Digital security and confidentiality",
        "Coordination with department heads, developers, and division-level offices",
      ],
    },
  ],
  techStack: [
    "Data Validation",
    "Statutory Reporting",
    "Records Management",
    "Visual Basic.NET",
    "MSSQL 2012",
    "AI-Assisted Coding",
  ],
};

export const experience = [
  {
    company:
      "Department of Education — General Santos City National Secondary School of Arts and Trades",
    position:
      "Registrar I | Learner Records, Data Validation & Statistical Reporting",
    period: "Sep 2016 – Present",
    description:
      "Own the learner-records lifecycle for a secondary school (enrollment, LIS/EBEIS data management, verification, issuance, archiving) with 100% LIS validation accuracy across 3,823 records and an Outstanding performance rating (4.55, SY 2025–2026).",
    achievements: [
      "Consolidate and submit statistical and budget reports (School Forms, BEIS Profile, WinS, BEDs, BARs) to DepEd/DBM standards on or ahead of deadlines.",
    ],
  },
  {
    company:
      "Local Government of General Santos City — City Mayor's Office, ICT Division",
    position:
      "Computer Operator I | Information Systems, Process Mapping & Technical Documentation",
    period: "May 2013 – Aug 2016",
    description:
      "Designed, built, and maintained government information systems in Visual Basic.NET and MSSQL 2012; led business process mapping and requirements gathering with department heads and end users.",
    achievements: [
      "Led implementation and training for the City Health office (12 end-users) and produced user manuals, procedures, and workflow diagrams.",
    ],
  },
  {
    company:
      "Local Government of General Santos City — City Social Welfare & Development Office (F.R.A.M.E.)",
    position:
      "Administrative Aide IV | Resident Data Validation, Team Leadership & Database/IT Administration",
    period: "Nov 2010 – May 2013",
    description:
      "Team Leader for 12 members validating resident records at 99% data accuracy and reaching 99% registration completion of 26,000 members.",
    achievements: [
      "Information System and Database Administrator and computer-maintenance in-charge, coordinating system updates and security patches with developers.",
    ],
  },
];

export const education = [
  {
    degree: "Master's in Public Administration",
    institution: "Notre Dame of Dadiangas University, General Santos City",
    period: "Jun 2015 – Mar 2018",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Notre Dame of Dadiangas University, General Santos City",
    period: "Jun 2006 – Mar 2010",
  },
];

export const certificates = [
  {
    name: "DICT-ICT012: Advanced Level of Digital Transformation",
    issuer: "DICT",
    year: "March 2024",
  },
  {
    name: "DICT-ICT007: Data Privacy — Good Governance",
    issuer: "DICT",
    year: "February 2024",
  },
  {
    name: "Cybersecurity Competency Framework Training",
    issuer: "DICT",
    year: "November 2023",
  },
  {
    name: "Digital Transformative Technologies",
    issuer: "DICT",
    year: "July 2022",
  },
  {
    name: "Digital Governance and Management Training",
    issuer: "DICT",
    year: "October 2021",
  },
];

export const languages = ["English", "Filipino"];

export const contact = {
  location: "General Santos City, Philippines",
  email: profile.email,
  phone: profile.phone,
  linkedin: profile.linkedin,
  status: "Open to fully remote roles.",
};

export const projects: Project[] = [
  {
    slug: "deped-lis",
    title: "Learner Records & Reporting Operations (DepEd, 2016–Present)",
    subtitle: "DepEd, 2016–Present",
    overview:
      "Owned the learner-records lifecycle for a secondary school: enrollment, LIS/EBEIS data management, verification, issuance, and archiving.",
    challenge: [
      {
        title: "Manual Processing",
        items: [
          "Paper-based enrollment and record issuance",
          "Time-consuming data verification processes",
          "Risk of human error in statistical reports",
        ],
      },
    ],
    solution:
      "Managed automated Learner Information System (LIS) for enrollment, data validation, issuance, and archiving. Implemented strict data quality protocols for 100% accuracy.",
    impact: [
      "100% accuracy across 3,823 learner records in LIS validation, zero backlog, same-day retrieval (SY 2025–2026)",
      "BEDs/BARs submitted 4–5 working days early",
      "Year-end archiving 1–2 weeks ahead of deadlines",
    ],
    technologies: ["Data Validation", "Statutory Reporting", "Records Management", "RA 10173"],
    role: "Registrar I | Learner Records, Data Validation & Statistical Reporting",
    year: "2016 – Present",
    featured: true,
    image: "/images/projects/mtfrs.svg",
    client: "Department of Education",
    category: "Education Information System",
    status: "completed",
  },
  {
    slug: "lgu-info-systems",
    title: "City Government Information Systems (LGU General Santos City, 2013–2016)",
    subtitle: "LGU General Santos City, 2013–2016",
    overview:
      "Designed, built, and maintained systems for city offices: motorized tricycle franchising (LG-MTFRS), City Health Information, Billing and Collection, Accountable Form Management, Community Tax, and Real Property Assessment and Tax.",
    challenge: [
      {
        title: "Process Inefficiency",
        items: [
          "Manual franchising applications",
          "Disparate billing and collection systems",
          "Fragmented resident data management",
        ],
      },
    ],
    solution:
      "Designed, built, and maintained systems for city offices: motorized tricycle franchising (LG-MTFRS), City Health Information, Billing and Collection, Accountable Form Management, Community Tax, and Real Property Assessment and Tax.",
    impact: [
      "Validated through QA testing, user acceptance testing, and time-and-motion studies before rollout",
      "Trained 12 end-users for the City Health office",
      "Wrote user manuals, procedures, and workflow diagrams",
    ],
    technologies: ["Visual Basic.NET", "MSSQL 2012", "Process Mapping", "QA/UAT", "Technical Documentation"],
    role: "Computer Operator I | Information Systems, Process Mapping & Technical Documentation",
    year: "2013 – 2016",
    featured: false,
    image: "/images/projects/mtfrs.svg",
    client: "LGU General Santos City",
    category: "Government Information System",
    status: "completed",
  },
  {
    slug: "frame-validation",
    title: "F.R.A.M.E. Resident Data Validation (LGU General Santos City, 2010–2013)",
    subtitle: "LGU General Santos City, 2010–2013",
    overview:
      "Led a 12-member team validating resident records (personal details, family background, PhilHealth and contribution data).",
    challenge: [
      {
        title: "Data Accuracy",
        items: [
          "26,000+ resident records to validate",
          "99% accuracy requirement",
          "Ongoing system maintenance needs",
        ],
      },
    ],
    solution:
      "Led a 12-member team validating resident records (personal details, family background, PhilHealth and contribution data).",
    impact: [
      "99% data accuracy",
      "99% registration completion out of 26,000 members, including during a barangay registration campaign",
    ],
    technologies: ["Data Validation", "Team Leadership", "Database Administration"],
    role: "Administrative Aide IV | Resident Data Validation, Team Leadership & Database/IT Administration",
    year: "2010 – 2013",
    featured: false,
    image: "/images/projects/placeholder.svg",
    client: "LGU General Santos City",
    category: "Social Services Data System",
    status: "completed",
  },
  {
    slug: "portfolio-website",
    title: "This Portfolio Website",
    subtitle: "Personal portfolio hosted on Vercel",
    overview:
      "Personal portfolio hosted on Vercel, built and maintained using AI-assisted coding.",
    challenge: [
      {
        title: "Career Transition",
        items: [
          "Showcase 15+ years government experience",
          "Highlight data quality expertise",
          "Position for fully remote opportunities",
        ],
      },
    ],
    solution:
      "Personal portfolio hosted on Vercel, built and maintained using AI-assisted coding.",
    impact: [
      "Personal portfolio hosted on Vercel, built and maintained using AI-assisted coding.",
    ],
    technologies: ["AI-Assisted Coding", "Vercel", "Next.js", "TypeScript", "React", "Tailwind CSS"],
    role: "Personal portfolio",
    year: "2024 – Present",
    featured: true,
    image: "/images/projects/placeholder.svg",
    client: "Self",
    category: "Professional Portfolio",
    status: "completed",
  },
];

// Legacy export for backward compatibility during transition
export const techStack = skills.techStack;