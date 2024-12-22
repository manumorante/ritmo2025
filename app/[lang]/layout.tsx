import "./globals.css"

import { i18n, type Locale } from "@/i18n"
import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
// import { getDictionary } from "@/util/dictionary"
import { Signika } from "next/font/google"
import {
  Footer,
  FBPixel,
  MailerLiteUniversal,
  Header,
} from "@/components"

export async function generateStaticParams(): Promise<{ lang: string }[]> {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const font = Signika({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
})

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const lang = params.lang
  // const { d } = getDictionary(lang)
  return (
    <html lang={lang}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${font.className}`}>
        <Header lang={lang} />

        {children}

        <Footer lang={lang} />

        <MailerLiteUniversal />
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
