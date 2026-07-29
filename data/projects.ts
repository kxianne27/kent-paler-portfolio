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

    image: "/images/projects/mtfrs.jpg",

    client: "Local Government Unit - General Santos City",

    category: "Transportation Management",
  },

  {
    slug: "city-health-information-system",

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

    role: "Systems Analyst & Software Developer",

    year: "2013",

    featured: true,

    image: "/images/projects/chis.jpg",

    client: "City Health Office • General Santos City",

    category: "Healthcare Information System",
  },
];
