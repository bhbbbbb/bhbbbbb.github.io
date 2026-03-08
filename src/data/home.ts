import type { HomeContent } from '@/types/content'
import type { SiteContent } from '@/types/header'

export const siteContent: SiteContent = {
  brand: 'Shao-En Lin',

  nav: [
    { label: 'About', href: '#about' },
    // { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    // { label: 'Others', href: '#others' },
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
      { label: 'GitHub', href: 'https://github.com' },
      // { label: 'Scholar', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaoenlin' },
      { label: 'CV', href: '#' },
    ],
  },

  education: [
    {
      title: 'M.S. in Data Science',
      organization: 'National Taiwan University',
      // description: 'Focus on machine learning, representation learning, retrieval systems, and practical AI applications.',
      tags: [
        // 'Heterogeneous Graphs',
        'Graph Neural Networks',
        'LLMs',
        'Recommendation Systems',
        'Machine Learning',
      ],
      period: '2023 — 2026',
      // badge: '/src/assets/ntu.svg',
    },
    {
      title: 'B.S. in Electrical Engineering',
      organization: 'National Cheng Kung University',
      // description: 'Coursework in algorithms, distributed systems, software engineering, and machine learning.',
      period: '2019 — 2023',
      // tags: ['abc', 'def'],
      // badge: '/src/assets/ncku.png',
    },
  ],

  projects: [
    {
      id: 'atomhin',
      meta: ['ICLR 2026', 'M.S. Thesis'],
      year: '2026',
      title: 'AtomHIN',
      description:
        'A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly.',
      tags: ['Graph', 'Graph Neural Networks', 'DGL'],
      links: [
        // { label: 'Paper', href: '#' },
        { label: 'Code', href: 'https://github.com/ntuidssplab/AtomHIN' },
        { label: "ICLR'26", href: '#iclr2026-atomic-hins' },
      ],
      // image: '/src/assets/betag.png',
    },
    {
      id: 'betag',
      meta: ['WWW 2025'],
      year: '2025',
      title: 'BETag',
      description:
        'An interactive assistant that answers grounded questions about my background, projects, and research using retrieved evidence from structured and unstructured sources.',
      tags: ['LLMs', 'LoRA', 'Recommendation Systems'],
      links: [
        { label: 'Code', href: 'https://github.com/idssplab/BETag' },
        { label: "WWW'25", href: '#www25-betag' },
      ],
      image: '/src/assets/betag.png',
    },
    {
      id: 'new-project',
      meta: ['Project'],
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

  publications: [
    {
      id: 'iclr2026-atomic-hins',
      meta: ['ICLR 2026', 'M.S. Thesis'],
      year: '2026',
      title: 'Atomic HINs: Entity-Attribute Duality for Heterogeneous Graph Modeling',
      venue: 'International Conference on Learning Representations (ICLR)',
      tags: ['Graph', 'Graph Neural Networks', 'Relational Database'],
      links: [
        { label: 'Paper', href: 'https://openreview.net/pdf?id=AG7fjg5azU' },
        { label: 'Code', href: 'https://github.com/ntuidssplab/AtomHIN' },
        { label: 'Project', href: '#atomhin' },
      ],
      authors: [
        { name: 'Shao-En Lin', highlight: true },
        { name: 'Ming-Yi Hong' },
        { name: 'Miao-Chen Chiang' },
        { name: 'Chih-Yu Wang' },
        { name: 'Che Lin' },
      ],
    },
    {
      id: 'www2025-betag',
      meta: ['WWW 2025'],
      year: '2025',
      title: 'BETag: Behavior-enhanced Item Tagging with Finetuned Large Language Models',
      // description: 'A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly.',
      // description: 'In Proceedings of the ACM on Web Conference (WWW), 2025',
      venue: 'In Proceedings of the ACM on Web Conference (WWW)',
      tags: ['LLMs', 'LoRA', 'Recommendation Systems'],
      links: [
        { label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3696410.3714769' },
        { label: 'Code', href: 'https://github.com/idssplab/BETag?tab=readme-ov-file' },
        { label: 'Project', href: '#betag' },
      ],
      authors: [
        { name: 'Shao-En Lin', highlight: true },
        { name: 'Brian Liu' },
        { name: 'Miao-Chen Chiang' },
        { name: 'Ming-Yi Hong' },
        { name: 'Yu-Shiang Huang' },
        { name: 'Chuan-Ju Wang' },
        { name: 'Che Lin' },
      ],
    },
    // {
    //   meta: ['Journal'],
    //   year: '2024',
    //   title: 'Paper Title Example for a Research Publication',
    //   description:
    //     'A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly.',
    //   tags: ['Representation Learning', 'Graph ML', 'Evaluation'],
    //   links: [
    //     { label: 'Paper', href: '#' },
    //     { label: 'Code', href: '#' },
    //     { label: 'Project', href: '#' },
    //   ],
    // },
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
