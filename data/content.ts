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
      "15+ years in public-sector data quality, reporting, and records. Open to fully remote roles.",
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
  title: "Building Data-Driven Systems that Improve Public Services",
  description: `I am a data quality, records, and operations support specialist with 15+ years of experience in Philippine public-sector operations. I began in local-government IT, building information systems, mapping business processes, and training users.

For the last decade I have owned a secondary school's learner-records and reporting operations: 100% accuracy across 3,823 records in LIS validation, reports submitted on or ahead of deadlines, and an Outstanding performance rating (4.55, SY 2025–2026).`,
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
        "Build and maintain portfolio website (Vercel-hosted) using AI-assisted coding with Claude Code. Proficient with OpenAI API, Ollama, and Claude Code toolchains.",
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
    "PHP",
    "Laravel",
    "TypeScript",
    "Next.js",
    "React",
    "MySQL",
    "SQL Server",
    "Tailwind CSS",
    "Git",
    "VB.NET",
    "Claude Code",
    "OpenAI API",
    "Ollama",
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
    title: "Learner Records & Reporting Operations",
    subtitle: "DepEd Operations (2016–Present)",
    overview:
      "End-to-end management of learner records and statistical reporting for a secondary school under DepEd supervision.",
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
      "100% LIS validation accuracy across 3,823 records",
      "Statistical reports submitted 4-5 working days early",
      "Year-end archiving completed 1-2 weeks ahead of deadline",
      "Outstanding Performance Rating: 4.55 (SY 2025–2026)",
    ],
    technologies: ["SQL Server", "Database Design", "Data Validation", "Process Documentation"],
    role: "Registrar I | Records & Data Management",
    year: "2016 – Present",
    featured: true,
    image: "/images/projects/mtfrs.svg",
    client: "Department of Education",
    category: "Education Information System",
    status: "completed",
  },
  {
    slug: "lgu-info-systems",
    title: "City Government Information Systems",
    subtitle: "LGU General Santos City (2013–2016)",
    overview:
      "Designed and maintained enterprise information systems for city offices including franchising, health, billing, and tax systems.",
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
      "Built integrated VB.NET/MSSQL systems: LG-MTFRS, Health Information System, Billing/Collection, Form Management, Tax Assessment. Conducted process mapping and user training.",
    impact: [
      "Validated through QA testing and UAT",
      "12 end-user trained for Health Office systems",
      "User manuals and workflow diagrams documented",
      "Seamless transition to automated systems",
    ],
    technologies: ["VB.NET", "MSSQL 2012", "Process Mapping", "Technical Documentation"],
    role: "Computer Operator I | Systems Analyst",
    year: "2013 – 2016",
    featured: false,
    image: "/images/projects/mtfrs.svg",
    client: "LGU General Santos City",
    category: "Government Information System",
    status: "completed",
  },
  {
    slug: "frame-validation",
    title: "F.R.A.M.E. Resident Data Validation",
    subtitle: "LGU Social Welfare Office (2010–2013)",
    overview:
      "Team leadership for resident data validation and database administration for the Social Welfare and Development Office.",
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
      "Led 12-member team in rigorous data validation protocols. Managed database administration and security patch coordination with developers.",
    impact: [
      "99% data accuracy achieved across 26,000+ members",
      "99% registration completion rate",
      "System updates coordinated with development team",
      "Confidential records handled with integrity",
    ],
    technologies: ["Database Administration", "Data Validation", "Team Leadership"],
    role: "Administrative Aide IV | Data Validation Team Leader",
    year: "2010 – 2013",
    featured: false,
    image: "/images/projects/placeholder.svg",
    client: "LGU Social Welfare Office (F.R.A.M.E.)",
    category: "Social Services Data System",
    status: "completed",
  },
  {
    slug: "portfolio-website",
    title: "This Portfolio Website",
    subtitle: "Personal Professional Showcase (2024–Present)",
    overview:
      "Professional portfolio showcasing my career transition from government operations to remote-ready data quality and systems support roles.",
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
      "Built with Next.js 16, TypeScript, Tailwind CSS, and Vercel deployment. Content structured for data-driven maintenance. AI-assisted development with Claude Code.",
    impact: [
      "Professional online presence established",
      "Showcases data quality and operations expertise",
      "Ready for remote role opportunities",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Claude Code", "AI-Assisted Development"],
    role: "Full-Stack Developer & Content Strategist",
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