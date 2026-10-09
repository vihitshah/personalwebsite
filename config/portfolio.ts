/* ─────────────────────────────────────────────────────────────────────
   PORTFOLIO CONFIG — your personal content.
   Visual settings (colors, animations, section labels) → design.ts

   Edit these sections:
       ME               your name, email, GitHub/LinkedIn, resume path
       HERO             greeting, taglines, bio, photo, CTA buttons
       EDUCATION        school, degree, courses
       EXPERIENCE       jobs and internships
       CONTACT_BLURB    short paragraph above your contact links
       PROJECTS         things you've built
   ───────────────────────────────────────────────────────────────────── */

import { SECTIONS, LABELS } from './design';

// ── 1. Your info — fill this in first ────────────────────────────────
// Every URL, page title, and footer link is built from these values.
export const ME = {
  firstName: 'Vihit',
  lastName: 'Shah',
  role: 'Software Engineer',  // shown in hero and page title
  email: 'vihitshah@g.ucla.edu',
  github: 'vihitshah',       // GitHub username only — no URL
  linkedin: 'vihit-shah-cs',       // LinkedIn username only — no URL
  resumePath: '/resume.pdf',        // path under public/ — see README.md
};

// ─────────────────────────────────────────────────────────────────────
// Everything below is derived automatically — no need to edit.
// ─────────────────────────────────────────────────────────────────────

const GITHUB_URL = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF = `mailto:${ME.email}`;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

// ── Who you are ───────────────────────────────────────────────────────
export const PERSON = {
  firstName: ME.firstName,
  lastName: ME.lastName,
  fullName: `${ME.firstName} ${ME.lastName}`,
  role: ME.role,
};

// ── Site metadata ─────────────────────────────────────────────────────
export const SITE = {
  url: SITE_URL,
  title: `${PERSON.fullName} | ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description: `Personal portfolio of ${PERSON.fullName}, a ${PERSON.role}.`,
};

// ── Navigation ────────────────────────────────────────────────────────
// Built automatically from SECTIONS in design.ts — hidden sections
// are excluded from the nav without any extra edits here.
export const NAV_LINKS = [
  SECTIONS.experience && { label: LABELS.experience.nav, href: '#experience' },
  SECTIONS.projects && { label: LABELS.projects.nav, href: '#projects' },
  SECTIONS.contact && { label: LABELS.contact.nav, href: '#contact' },
].filter(Boolean) as { label: string; href: string }[];

// ── 2. Hero ───────────────────────────────────────────────────────────
export const HERO = {
  greeting: "Hi, I'm",
  // Rotate through multiple taglines with a typing effect (configure in design.ts)
  taglines: [
    'Aspiring Software Engineer',
    'CS Student @ UCLA',
    'AI/ML + Full-Stack Builder',
  ] as string[],
  bio: "I'm a CS freshman at UCLA who builds with Python, C++, and LLMs. I care about craft, speed, and shipping things that make a real impact.",
  // Set to '/photo.jpg' to show your photo (place file at public/photo.jpg).
  // undefined shows your initials. To hide the frame entirely, set showPhoto: false in design.ts.
  photo: undefined as string | undefined,
  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true },
    { label: 'Get in touch', href: '#contact', primary: false },
  ],
};

// ── 3. Education ──────────────────────────────────────────────────────
// Shown inside the Experience section (order/visibility in design.ts).
export interface EducationEntry {
  school: string;
  degree: string;
  minor?: string;
  gpa?: string;
  graduation: string;
  courses: string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'University of California, Los Angeles',
    degree: 'B.S. Computer Science',
    minor: '',
    gpa: '',
    graduation: 'June 2030',
    courses: [
      'Introduction to Object-Oriented Programming (CS 31)',
      'Introduction to Computer Science (CS 1)',
      'Calculus of Several Variables (MATH 32A)',
      'Astrobiology (EPS SCI 3)',
    ],
  },
];

// ── 4. Experience ─────────────────────────────────────────────────────
// One entry per job/internship, most recent first.
export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Bruin Software Engineering Fellowship',
    role: 'Fellow in LLM Inference Track',
    location: 'Los Angeles, California',
    start: 'Oct 2026',
    end: 'Dec 2026',
    bullets: [
      "Member of the LLM Inference Track in the BSE Fellowship. More updates soon to come!"
    ],
    tech: ['LLMs', 'Node.js', 'Homebrew', 'Git'],
  },
  {
    company: 'NEXUS (CS/AI & Physics Society)',
    role: 'Founder & President',
    location: 'New Delhi, India',
    start: 'Mar 2025',
    end: 'Mar 2026',
    bullets: [
      "Founded the school's first CS/AI and Physics Society, growing it into a recognized school society within months.",
      'Introduced 50+ students to Python, C++, LLMs, AI/ML, and classical mechanics through hands-on demos and workshops.',
      'Organized a hackathon, 2 guest sessions, and 2 inter-school outreach initiatives.',
    ],
    tech: ['Python', 'C++', 'LLMs'],
  },
  {
    company: 'Universe to Us',
    role: 'Co-Founder & Head of Logistics',
    location: 'New Delhi, India',
    start: 'Oct 2024',
    end: 'Jan 2026',
    bullets: [
      'Co-founded a science education nonprofit teaching physics and STEM to 200+ underprivileged students across India.',
      'Managed logistics for 30+ volunteers and coordinated external collaborations and fundraising.',
      'Automated internal workflows with Notion and Google Sheets; organized 2 science fairs and led over 50 interactive STEM sessions.',
    ],
    tech: ['Notion', 'Google Sheets'],
  },
];
// ── 5. Contact blurb ──────────────────────────────────────────────────
// Short paragraph shown above your contact links.
export const CONTACT_BLURB = "I'm actively looking for internships and new grad roles. If you're working on something interesting or just want to chat, my inbox is always open.";

// ── 6. Projects ───────────────────────────────────────────────────────
// `featured: true` highlights the card with an accent-colored border.
export interface ProjectEntry {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'ToxiChecker',
    description: 'A cheminformatics platform that predicts compound toxicity for early-stage drug discovery using Tox21 and PubChem data, Morgan fingerprints, and a Random Forest classifier. INSPIRE-MANAK Award winner.',
    tech: ['Python', 'RDKit', 'scikit-learn', 'Machine Learning'],
    github: `https://github.com/vihitshah/ToxiChecker`,
    featured: true,
  },
  {
    name: 'Gmail MCP Server',
    description: 'A Model Context Protocol server that connects Gmail to Claude Desktop over OAuth 2.0, with tools to read unread mail, search, and draft emails in natural language.',
    tech: ['Python', 'FastMCP', 'OAuth 2.0', 'MCP'],
    github: `https://github.com/vihitshah/Gmail-MCP`,
    featured: true,
  },
  {
    name: 'PhotosyntheSound',
    description: 'A bioelectricity system that captures plant electrical signals with Arduino and piezoelectric sensors and turns them into music. National finalist, presented to the Minister of Education.',
    tech: ['Arduino', 'Piezoelectric Sensors', 'Signal Processing'],
    github: `https://github.com/vihitshah/PhotosyntheSound`,
    featured: false,
  },
];
 
// ── Social links ──────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email', href: EMAIL_HREF },
];

// ── Contact ───────────────────────────────────────────────────────────
export const CONTACT = {
  email: ME.email,
  blurb: CONTACT_BLURB,
  links: [
    { label: 'Email', href: EMAIL_HREF, display: ME.email },
    { label: 'GitHub', href: GITHUB_URL, display: `github.com/${ME.github}` },
    { label: 'LinkedIn', href: LINKEDIN_URL, display: `linkedin.com/in/${ME.linkedin}` },
    { label: 'Resume', href: ME.resumePath, display: 'Download PDF' },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: `${PERSON.role} building things for the web.`,
  columns: [
    {
      heading: 'Portfolio',
      links: [
        SECTIONS.experience && { label: LABELS.experience.nav, href: '#experience' },
        SECTIONS.projects && { label: LABELS.projects.nav, href: '#projects' },
        SECTIONS.contact && { label: LABELS.contact.nav, href: '#contact' },
      ].filter(Boolean) as { label: string; href: string }[],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub', href: GITHUB_URL },
        { label: 'LinkedIn', href: LINKEDIN_URL },
        { label: 'Email', href: EMAIL_HREF },
        { label: 'Resume', href: ME.resumePath },
      ],
    },
  ],
};
