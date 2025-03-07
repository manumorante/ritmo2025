import "./globals.css"

// Core
import type { ReactNode } from "react"
import { Signika } from "next/font/google"

// Components
import { ReactLenis } from "@/util/lenis"
import { Footer, Partners, Newsletter, Header } from "@/components"

// Tracking
import { FBPixel, MailerLiteUniversal } from "@/components"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

// Utils & Types
import { type Locale } from "@/i18n"
import { getDictionary } from "@/util/dictionary"

const font = Signika({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
})

interface RootLayoutProps {
  children: ReactNode
  params: {
    lang: Locale
  }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = params
  const { t } = getDictionary(lang)

  return (
    <html lang={lang}>
      <ReactLenis root>
        <body className={font.className}>
          <Header lang={lang} />
          <main>{children}</main>

          <Newsletter lang={lang} t={t} />
          <Partners
            organizer={t("generic.organizer")}
            partners={t("generic.partners")}
            ticketing={t("generic.ticketing")}
          />
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
