import type { HomeContent } from '@/types/content'
import type { SiteContent } from '@/types/header'
import type { EntityBundle } from '@/types/bundle'
import { timelineDefs } from '@/data/timeline'
import { expandBundles } from '@/utils/bundle'
import marketplace from '../../data/marketplace.json'

export const siteContent: SiteContent = {
  brand: 'Shao-En Lin',
  description: 'Portfolio of Shao-En Lin',

  nav: [
    { label: 'Home', href: '#' },
    // { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    // { label: 'Others', href: '#others' },
  ],
}

const bundles: EntityBundle[] = [
  {
    id: 'atomhin',
    timeline: 'ms',
    tags: ['graph', 'gnn', 'rdb', '[](ml)', '[](python)', '[](pydantic)', '[](dgl)'],
    links: [
      { label: 'Paper', href: 'https://openreview.net/pdf?id=AG7fjg5azU' },
      { label: 'Code', href: 'https://github.com/ntuidssplab/AtomHIN' },
    ],
    image: '/atomhin-2.png',

    project: {
      title: 'AtomHIN',
      year: '2026',
      description:
        'Introduces a schema optimization framework for heterogeneous information networks (HINs), enabling systematic design of task-specific graph schemas. The project also releases optimized schemas as reusable datasets via a Python package and simple API.',
      meta: ['[ICLR 2026](atomhin)', '[M.S. Thesis](atomhin)'],
    },

    publication: {
      title: 'Atomic HINs: Entity-Attribute Duality for Heterogeneous Graph Modeling',
      venue: 'International Conference on Learning Representations (ICLR)',
      year: '2026',
      authors: ['**Shao-En Lin**', 'Ming-Yi Hong', 'Miao-Chen Chiang', 'Chih-Yu Wang', 'Che Lin'],
      meta: ['[ICLR 2026](atomhin)', '[M.S. Thesis](atomhin)'],
    },
  },

  {
    id: 'betag',
    timeline: 'ms',
    tags: ['llm', 'lora', 'recsys', 'ir', '[](ml)', '[](python)'],
    links: [
      { label: 'Paper', href: 'https://dl.acm.org/doi/10.1145/3696410.3714769' },
      { label: 'Code', href: 'https://github.com/idssplab/BETag?tab=readme-ov-file' },
    ],
    image: '/betag.png',

    project: {
      title: 'BETag',
      year: '2025',
      description:
        'Behavior-enhanced automatic tagging system that finetunes LLMs using user interaction histories for retrieval and recommendation tasks. BETags are generated offline with zero runtime latency, improving tagging quality by 18% over manual annotations.',
      meta: ['[WWW 2025](betag)', '[Best Project Award](betag)'],
    },

    publication: {
      title: 'BETag: Behavior-enhanced Item Tagging with Finetuned Large Language Models',
      venue: 'In Proceedings of the ACM on Web Conference (WWW)',
      year: '2025',
      authors: [
        '**Shao-En Lin**',
        'Brian Liu',
        'Miao-Chen Chiang',
        'Ming-Yi Hong',
        'Yu-Shiang Huang',
        'Chuan-Ju Wang',
        'Che Lin',
      ],
      meta: ['[WWW 2025](betag)', '[Best Project Award](betag)'],
    },

    awards: [
      {
        title: 'NTU FinTech Best Project Award (First Place)',
        description:
          'Awarded for BETag, an early version of the project later developed into the WWW 2025 paper.',
        year: '2024',
        show: false,
        meta: ['betag'],
      },
    ],
  },

  {
    id: 'synhing',
    timeline: 'ms',
    tags: ['graph', 'xai', 'gnn', '[](dgl)', '[](ml)', '[](python)'],
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2401.04133' }],
    image: '/synhing.png',

    project: {
      title: 'SynHING',
      year: '2024',
      description:
        'Framework for generating explainable synthetic heterogeneous information networks (HINs). I optimized the core merge algorithm from O(n²) to O(n), enabling million-scale graph generation in under 10 minutes.',
      meta: ['[Arxiv 2024](synhing)'],
    },

    publication: {
      title:
        'SynHING: Synthetic Heterogeneous Information Network Generation for Graph Learning and Explanation',
      venue: 'Arxiv',
      year: '2024',
      authors: [
        'Ming-Yi Hong',
        'Yi-Hsiang Huang',
        '**Shao-En Lin**',
        'You-Chen Teng',
        'Chih-Yu Wang',
        'Che Lin',
      ],
      meta: ['[Arxiv 2024](synhing)'],
    },
  },

  {
    id: 'ahkdoc',
    timeline: 'bs',
    tags: ['ts', 'vscode-ext', 'ahk'],
    links: [
      { label: 'Code', href: 'https://github.com/bhbbbbb/vscode-autohotkey-ahkdoc' },
      {
        label: 'Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=bhbbbbb.vscode-autohotkey-ahkdoc',
      },
    ],
    image: '/ahkdoc.jpg',

    project: {
      title: 'AHKDoc',
      year: '2024',
      description: `VSCode extension that adds JSDoc-style documentation utilities to the AutoHotkey language service. The extension has been downloaded over ${Math.floor(marketplace['https://marketplace.visualstudio.com/items?itemName=bhbbbbb.vscode-autohotkey-ahkdoc'].statistics.install / 100) / 10}k times from the VSCode Marketplace.`,
      meta: [],
    },
  },
]

const {
  projects,
  publications,
  others,
  timelines: enrichedTimelines,
} = expandBundles(bundles, timelineDefs)

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
      { label: 'GitHub', href: 'https://github.com/bhbbbbb' },
      // { label: 'Scholar', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaoenlin' },
      { label: 'CV', href: '/shaoen-cv.pdf' },
      // { label: 'Email', href: 'mailto:shaoenlin.tw@gmail.com' },
    ],
  },

  timeline: enrichedTimelines,
  projects,
  publications,
  others,
}
