import type { RowTag } from './tag'
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
  tags?: RowTag[]
  badge?: string
}

export interface ProjectItem {
  id: string
  meta: string[]
  year: string | number
  title: string
  description: string
  image?: string
  tags?: RowTag[]
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
  tags?: RowTag[]
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
  tags?: RowTag[]
}

export interface HomeContent {
  hero: HeroContent
  education: TimelineItem[]
  publications: PublicationItem[]
  projects: ProjectItem[]
  others: SimpleItem[]
}
