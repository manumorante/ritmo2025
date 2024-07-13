import "./globals.css"

import { i18n, type Locale } from "@/i18n"
import type { Metadata } from "next"
import { getDictionary } from "@/util/dictionary"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Exo_2 } from "next/font/google"
import { Header, Footer, FBPixel } from "@/components"

export async function generateStaticParams(): Promise<{ lang: string }[]> {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "900"],
})

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const lang = params.lang
  const { d } = getDictionary(lang)
  return (
    <html lang={lang}>
      <body className={exo2.className}>
        <Header d={d} lang={lang} />
        {children}
        <Footer lang={lang} />

        <FBPixel />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "RITMO Festival",
  description:
    "Festival de música electrónica en plena naturaleza para un aforo muy reducido.",
}
