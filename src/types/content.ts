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

export interface FeatureItem {
  type: string
  year: string | number
  title: string
  description: string
  tags?: string[]
  links?: NavLink[]
}

export interface SimpleItem {
  title: string
  description: string
  year: string | number
}

export interface HomeContent {
  hero: HeroContent
  education: TimelineItem[]
  publications: FeatureItem[]
  projects: FeatureItem[]
  others: SimpleItem[]
}
