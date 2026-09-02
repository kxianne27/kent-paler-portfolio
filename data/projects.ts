import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "mtfrs",

    title: "MTFRS",

    subtitle: "Motorized Tricycle Franchising Management System",

    overview:
      "Enterprise information system developed to digitize and streamline the management of tricycle franchise applications and records.",

    challenge: [
      {
        title: "Manual Processing",
        items: [
          "Franchise applications were processed manually using paper forms.",
          "Approval workflows were slow and required multiple office visits.",
          "Physical records made retrieval difficult and time-consuming.",
        ],
      },
      {
        title: "Data Management",
        items: [
          "Records were inconsistent across departments.",
          "Duplicate franchise records occurred frequently.",
          "Reporting required manual consolidation.",
        ],
      },
      {
        title: "Operational Efficiency",
        items: [
          "Limited monitoring of franchise status.",
          "No centralized database for applicants.",
          "Decision-making lacked real-time information.",
        ],
      },
    ],
    solution:
      "Designed and developed a centralized desktop-based information system for franchise management, applicant tracking, reporting, and record maintenance.",

    impact: [
      "Reduced manual processing",
      "Improved transparency",
      "Centralized records",
      "Enhanced reporting",
    ],

    technologies: ["SQL Server 2012", "VB.NET"],

    role: "Systems Analyst & Software Developer",

    year: "2013",

    featured: true,

    image: "/images/projects/mtfrs.svg",

    client: "Local Government Unit - General Santos City",

    category: "Transportation Management",
  },

  {
    slug: "chis",

    title: "City Health Information System",

    subtitle:
      "Integrated Public Health Records & Health Card Management System",

    overview:
      "The City Health Information System (CHIS) is an enterprise information system developed for the City Health Office of General Santos City to digitize, centralize, and streamline public health services. The system replaced fragmented paper-based processes with a unified digital platform for patient records, health card issuance, medical clearances, and Department of Health (DOH) reporting, improving operational efficiency, regulatory compliance, and public service delivery.",

    challenge: [
      {
        title: "Legacy Bottlenecks",
        items: [
          "Manual registration and paper-based filing created long processing queues.",
          "Physical logbooks made record retrieval slow and labor-intensive.",
          "Growing service demand exceeded the capacity of manual workflows.",
        ],
      },
      {
        title: "Compliance & Revenue Exposure",
        items: [
          "Paper health certificates were vulnerable to forgery.",
          "Unauthorized fast-tracking bypassed mandatory medical examinations.",
          "Weak validation processes increased compliance and revenue risks.",
        ],
      },
      {
        title: "Reporting & Data Integrity",
        items: [
          "Health records were fragmented across multiple units.",
          "DOH statistical reports required extensive manual consolidation.",
          "Field personnel had no real-time mechanism to verify health records.",
        ],
      },
    ],

    solution:
      "Designed, developed, and deployed a centralized desktop-based information system that digitized patient records, automated health card issuance, streamlined medical clearance processing, generated mandatory DOH statistical reports, and strengthened data integrity through standardized workflows and centralized record management.",

    impact: [
      "Reduced manual processing and document handling",
      "Improved operational efficiency across health offices",
      "Centralized patient and health card records",
      "Accelerated DOH statistical reporting",
      "Strengthened data integrity and fraud prevention",
      "Improved transparency and public service delivery",
    ],

    technologies: ["VB.NET", "SQL Server 2012"],

    modules: [
      "Patient Registration",
      "Health Card Issuance",
      "Medical Clearance",
      "Laboratory",
      "Certificate Printing",
      "Billing",
      "DOH Statistical Reports",
      "User Management",
    ],

    responsibilities: [
      "Requirements Gathering",
      "Business Process Analysis",
      "Database Design",
      "System Architecture",
      "Desktop Application Development",
      "SQL Server Database Development",
      "Crystal Reports Development",
      "Deployment & User Training",
      "Technical Support",
    ],

    architecture: "Client-Server Desktop Information System",

    role: "Systems Analyst & Software Developer",

    year: "2013",

    featured: true,

    image: "/images/projects/chis.svg",

    client: "City Health Office • General Santos City",

    category: "Healthcare Information System",
  },

  {
    slug: "usims",

    title: "USIMS",

    subtitle: "Unified School Information Management System",

    overview:
      "A Laravel-based school information management system currently under active development. USIMS is designed to modernize and unify school operations by providing a comprehensive platform for student management, enrollment, attendance tracking, grade management, and government reporting compliance. The system replaces fragmented manual processes and legacy tools with a centralized, role-based web application built on modern PHP practices.",

    challenge: [
      {
        title: "Fragmented School Operations",
        items: [
          "Student records scattered across multiple spreadsheets and paper files.",
          "Enrollment process is manual, time-consuming, and error-prone.",
          "No centralized system for tracking student progression across grade levels.",
          "Teacher assignments and class scheduling managed through informal channels.",
        ],
      },
      {
        title: "Government Reporting Compliance",
        items: [
          "SF1 (School Form 1) and other DepEd reports require manual compilation.",
          "Data inconsistencies across sources lead to reporting delays and rejections.",
          "No audit trail for enrollment changes, transfers, or dropouts.",
          "Multiple reporting deadlines throughout the school year create bottlenecks.",
        ],
      },
      {
        title: "Legacy System Limitations",
        items: [
          "Existing tools are desktop-based, offline, and lack multi-user collaboration.",
          "No role-based access control — all users have full data access.",
          "Data backup and recovery processes are informal and unreliable.",
          "Technical debt from years of ad-hoc modifications makes maintenance difficult.",
        ],
      },
      {
        title: "Scalability & Modernization Needs",
        items: [
          "Growing student population exceeds capacity of current tools.",
          "Need for parent/guardian portal for transparency and engagement.",
          "Mobile-responsive design required for field use by teachers.",
          "Integration potential with national learner databases (LIS, BOSY/EOSY).",
        ],
      },
    ],

    solution:
      "Developing a comprehensive, Laravel-based web application that centralizes all school information management functions. The system implements a modular architecture with role-based access control (Admin, Registrar, Teacher, Adviser), standardized UI components, and automated government report generation. Built with Laravel 13, PHP 8.3, MySQL, AdminLTE, and Vite, following modern development practices including testing infrastructure, database migrations, and Git-based version control.",

    impact: [
      "Centralized student information with single source of truth",
      "Automated SF1 and government report generation",
      "Role-based access control for data privacy and security",
      "Streamlined enrollment workflow reducing processing time",
      "Real-time attendance tracking with adviser dashboards",
      "Foundation for parent portal and mobile access (planned)",
      "Standardized codebase with testing infrastructure for maintainability",
    ],

    technologies: ["Laravel 13", "PHP 8.3", "MySQL", "AdminLTE", "Vite", "JavaScript", "Git/GitHub", "Tailwind CSS"],

    modules: [
      "Master Data Management (School Year, Grade Levels, Sections, Subjects)",
      "Student Management (Enrollment, Transfers, Promotion, Graduation)",
      "SF1 Import & Validation (DepEd School Form 1 processing)",
      "Enrollment Management (Old/New/Transferee/Returnee workflows)",
      "Teacher & Class Assignment (Advisory, Subject Teaching Loads)",
      "Attendance Tracking (Daily, Summary, Adviser Dashboard)",
      "Grade Management (Quarterly Grades, Report Cards, Ranking)",
      "Reports & Analytics (SF1, SF2, SF3, SF5, EOSY, BOSY)",
      "User Management & Role-Based Access Control",
      "System Settings & Audit Trail",
    ],

    responsibilities: [
      "System Architecture & Database Design",
      "Laravel Backend Development (Models, Controllers, Services, Policies)",
      "Frontend Development (Blade, AdminLTE, Alpine.js, Tailwind)",
      "Database Migrations, Seeders, Factories",
      "Automated Testing (Pest, PHPUnit, Feature/Unit Tests)",
      "SF1 Import Logic & Validation Rules",
      "Government Report Generation (PDF/Excel)",
      "Role-Based Access Control Implementation",
      "Deployment Configuration (Docker, CI/CD)",
      "Technical Documentation & User Guides",
    ],

    architecture: "Laravel 13 Modular Monolith with Service Layer, Repository Pattern, and Policy-Based Authorization",

    role: "Full-Stack Developer & System Architect",

    year: "2024 – Present",

    featured: true,

    image: "/images/projects/usims.svg",

    client: "General Santos City National Secondary School of Arts and Trades",

    category: "Education Information System",

    status: "under-development",

    progress: {
      completed: [
        "Master Data (School Year, Grade Levels, Sections, Subjects)",
        "Student Management (CRUD, Enrollment Status, Transfers)",
        "SF1 Import (Parser, Validation, Preview, Commit)",
        "Database Architecture (Migrations, Relationships, Indexes)",
        "Testing Infrastructure (Pest, Factories, Feature Tests)",
        "Standardized UI (AdminLTE, Blade Components, Tailwind)",
        "User Authentication & Role-Based Access Control",
        "Audit Trail & Activity Logging",
      ],
      inDevelopment: [
        "Enrollment Workflows (Old/New/Transferee/Returnee)",
        "Teacher/Class Assignment (Advisory, Teaching Loads)",
        "Attendance (Daily Recording, Summary, Adviser Dashboard)",
      ],
      planned: [
        "Grade Management (Quarterly, Report Cards, Ranking)",
        "Reports (SF1, SF2, SF3, SF5, EOSY, BOSY, Custom)",
        "Parent/Guardian Portal",
        "Mobile-Responsive Teacher Interface",
        "LIS/BOSY/EOSY API Integration",
      ],
    },
  },
];
