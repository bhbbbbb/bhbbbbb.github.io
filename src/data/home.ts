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
    eyebrow: 'M.S. @ National Taiwan University',
    name: 'Shao-En Lin',
    intro:
      // 'I build machine learning systems and practical AI applications, with interests in LLMs, retrieval, knowledge systems, and developer-facing tools.',
      'I build practical systems across machine learning and developer tooling. My work ranges from research prototypes to tools and infrastructure.',
    focusTitle: 'At a Glance',
    focuses: ['ICLR / WWW publications', 'Seeking ML / SWE roles', 'Taipei, Taiwan'],
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      // { label: 'Scholar', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaoenlin' },
      { label: 'CV', href: '/shaoen-cv.pdf' },
      // { label: 'Email', href: 'mailto:shaoenlin.tw@gmail.com' },
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
        'Introduces a schema optimization framework for heterogeneous information networks (HINs), enabling systematic design of task-specific graph schemas. The project also releases optimized schemas as reusable datasets via a Python package and simple API.',
      tags: ['Graph', 'Graph Neural Networks', 'DGL'],
      links: [
        // { label: 'Paper', href: '#' },
        { label: 'Code', href: 'https://github.com/ntuidssplab/AtomHIN' },
        { label: "ICLR'26", href: '#iclr2026-atomic-hins' },
      ],
      image: '/src/assets/atomhin-2.png',
    },
    {
      id: 'betag',
      meta: ['WWW 2025'],
      year: '2025',
      title: 'BETag',
      description:
        'Behavior-enhanced automatic tagging system that finetunes LLMs using user interaction histories for retrieval and recommendation tasks. BETags are generated offline with zero runtime latency, improving tagging quality by 18% over manual annotations.',
      tags: ['LLMs', 'LoRA', 'Information Retrieval', 'Recommendation Systems'],
      links: [
        { label: 'Code', href: 'https://github.com/idssplab/BETag' },
        { label: "WWW'25", href: '#www25-betag' },
      ],
      image: '/src/assets/betag.png',
    },
    {
      id: 'synhing',
      meta: ['Arxiv'],
      year: '2024',
      title: 'SynHING',
      description:
        'Framework for generating explainable synthetic heterogeneous information networks (HINs). I optimized the core merge algorithm from O(n²) to O(n), enabling million-scale graph generation in under 10 minutes.',
      tags: ['Graph', 'XAI'],
      links: [{ label: 'Arxiv', href: '#arxiv-synhing' }],
      image: '/src/assets/synhing.png',
    },
    {
      id: 'ahk-doc',
      meta: ['Project'],
      year: '2024',
      title: 'AHKDoc',
      description:
        'VSCode extension that adds JSDoc-style documentation utilities to the AutoHotkey language service. The extension has been downloaded over 1.8k times from the VSCode Marketplace.',
      tags: ['TypeScript', 'VSCode Extension', 'AutoHotkey'],
      links: [
        { label: 'Code', href: 'https://github.com/bhbbbbb/vscode-autohotkey-ahkdoc' },
        {
          label: 'Marketplace',
          href: 'https://marketplace.visualstudio.com/items?itemName=bhbbbbb.vscode-autohotkey-ahkdoc',
        },
      ],
      image: '/src/assets/ahkdoc.jpg',
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
    {
      id: 'arxiv-synhing',
      meta: ['Arxiv'],
      year: '2024',
      title:
        'SynHING: Synthetic Heterogeneous Information Network Generation for Graph Learning and Explanation',
      // description: 'A short summary of the work, the technical contribution, and why it matters. Keep this compact but informative enough for a recruiter or hiring manager to scan quickly.',
      // description: 'In Proceedings of the ACM on Web Conference (WWW), 2025',
      venue: 'Arxiv',
      tags: ['Graph', 'XAI'],
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2401.04133' },
        // { label: 'Code', href: 'https://github.com/idssplab/BETag?tab=readme-ov-file' },
        { label: 'Project', href: '#synhing' },
      ],
      authors: [
        { name: 'Ming-Yi Hong' },
        { name: 'Yi-Hsiang Huang' },
        { name: 'Shao-En Lin', highlight: true },
        { name: 'You-Chen Teng' },
        { name: 'Chih-Yu Wang' },
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
    //   // {
    //   //   title: 'Scholarship / Honor / Certificate',
    //   //   description: 'Short description of the recognition or achievement.',
    //   //   year: '2024',
    //   // },
    //   // {
    //   //   title: 'Scholarship / Honor / Certificate',
    //   //   description: 'Short description of the recognition or achievement.',
    //   //   year: '2023',
    //   // },
  ],
}
