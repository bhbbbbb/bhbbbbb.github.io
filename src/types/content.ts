export interface NavLink {
  label: string
  href: string
}

export interface HeroLink {
  label: string
  href: string
}

export interface HeroContent {
  eyebrow: string
  name: string
  intro: string
  focusTitle: string
  focuses: string[]
  links: HeroLink[]
}

export interface TimelineItem {
  title: string
  organization: string
  description?: string
  period: string
  tags?: string[]
  badge?: string
}

export interface ProjectItem {
  id: string
  meta: string[]
  year: string | number
  title: string
  description: string
  image?: string
  tags?: string[]
  links?: NavLink[]
}

export interface PublicationAuthor {
  name: string
  highlight?: boolean
}

export interface PublicationItem {
  id: string
  title: string
  authors: PublicationAuthor[]
  venue: string
  year?: string | number
  meta?: string[]
  tags?: string[]
  links?: {
    label: string
    href: string
  }[]
  description?: string
}

export interface SimpleItem {
  title: string
  description: string
  year: string | number
}

export interface HomeContent {
  hero: HeroContent
  education: TimelineItem[]
  publications: PublicationItem[]
  projects: ProjectItem[]
  others: SimpleItem[]
}
