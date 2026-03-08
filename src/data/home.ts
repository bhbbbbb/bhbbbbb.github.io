import type { HomeContent } from '@/types/content'
import type { SiteContent } from '@/types/header'

export const siteContent: SiteContent = {
  brand: 'Shao-En Lin',

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Publications', href: '#publications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Others', href: '#others' },
  ],
}

export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'ML / AI Engineer',
    name: 'Shao-En Lin',
    intro:
      'I build machine learning systems and practical AI applications, with interests in LLMs, retrieval, knowledge systems, and developer-facing tools.',
    focusTitle: 'Currently focused on',
    focuses: ['LLM systems', 'Retrieval / RAG', 'Knowledge graphs', 'ML engineering'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Scholar', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'CV', href: '#' },
    ],
  },

  education: [
    {
      title: 'M.S. in Electrical Engineering',
      organization: 'University Name',
      description:
        'Focus on machine learning, representation learning, retrieval systems, and practical AI applications.',
      period: '2023 — Present',
    },
    {
      title: 'B.S. in Computer Science',
      organization: 'University Name',
      description:
        'Coursework in algorithms, distributed systems, software engineering, and machine learning.',
      period: '2019 — 2023',
    },
  ],

  publications: [
    {
      type: 'Conference',
      year: '2024',
      title: 'Paper Title Example for a Research Publication',
      description:
        'A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly.',
      tags: ['LLM', 'Retrieval', 'Knowledge Graph'],
      links: [
        { label: 'Paper', href: '#' },
        { label: 'Code', href: '#' },
        { label: 'Project', href: '#' },
      ],
    },
    {
      type: 'Journal',
      year: '2024',
      title: 'Paper Title Example for a Research Publication',
      description:
        'A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly.',
      tags: ['Representation Learning', 'Graph ML', 'Evaluation'],
      links: [
        { label: 'Paper', href: '#' },
        { label: 'Code', href: '#' },
        { label: 'Project', href: '#' },
      ],
    },
  ],

  projects: [
    {
      type: 'Project',
      year: '2025',
      title: 'Project Example: AI Assistant for Portfolio Website',
      description:
        'An interactive assistant that answers grounded questions about my background, projects, and research using retrieved evidence from structured and unstructured sources.',
      tags: ['FastAPI', 'Vue', 'RAG', 'LLM'],
      links: [
        { label: 'Code', href: '#' },
        { label: 'Demo', href: '#' },
        { label: 'Docs', href: '#' },
      ],
    },
    {
      type: 'Project',
      year: '2024',
      title: 'Project Example: Developer Tooling / VSCode Extension',
      description:
        'A developer-focused tool that improves workflow efficiency. This row layout gives enough space to explain the problem, implementation, and practical value.',
      tags: ['TypeScript', 'VSCode', 'DX'],
      links: [
        { label: 'Code', href: '#' },
        { label: 'Marketplace', href: '#' },
        { label: 'Docs', href: '#' },
      ],
    },
  ],

  others: [
    {
      title: 'Scholarship / Honor / Certificate',
      description: 'Short description of the recognition or achievement.',
      year: '2024',
    },
    {
      title: 'Scholarship / Honor / Certificate',
      description: 'Short description of the recognition or achievement.',
      year: '2023',
    },
  ],
}
