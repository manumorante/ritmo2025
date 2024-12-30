import "./globals.css"

import { ReactLenis } from "@/util/lenis"
import { type Locale } from "@/i18n"
import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Signika } from "next/font/google"
import { Footer, Partners, FBPixel, MailerLiteUniversal, Header } from "@/components"

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

  return (
    <html lang={lang}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="white-translucent"
        />
      </head>
      <ReactLenis root>
        <body className={`${font.className}`}>
          <Header lang={lang} />
          {children}
          <Partners />
          <Footer lang={lang} />

          <MailerLiteUniversal />
          <FBPixel />
          <SpeedInsights />
          <Analytics />
        </body>
      </ReactLenis>
    </html>
  )
}

export const metadata: Metadata = {
  title: "RITMO Festival",
  description:
    "Festival de música electrónica en plena naturaleza para un aforo muy reducido.",
  openGraph: {
    url: "https://ritmofestival.com",
    type: "website",
    title: "RITMO Festival",
    description:
      "Festival de música electrónica en plena naturaleza para un aforo muy reducido.",
    images: [
      {
        url: "/og-ritmo-festival.jpg",
        width: 800,
        height: 600,
        alt: "RITMO Festival",
      },
    ],
  },
}
