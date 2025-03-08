// Locale types
export type Locale = "en" | "es"

// Artist types
export type Artist = {
  id: string
  name: string
  b2b?: boolean
  br?: boolean
}

// Menu types
export type MenuItem = {
  title: string
  href: string
}

// Props types
export interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}
