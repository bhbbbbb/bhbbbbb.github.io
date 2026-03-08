export interface SiteNavItem {
  label: string
  href: string
}

export interface SiteContent {
  brand: string
  nav: SiteNavItem[]
}
