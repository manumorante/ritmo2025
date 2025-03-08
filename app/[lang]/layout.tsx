import "./globals.css"

// Core
import { Signika } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

// Components
import { Footer, Partners, Newsletter, Header } from "@/components"
import { ReactLenis } from "@/lib/lenis"

// Tracking
import { FBPixel, MailerLiteUniversal } from "@/components"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Utils & Types
import { RootLayoutProps } from "@/types"
import { getDictionary } from "@/lib/i18n"

const font = Signika({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
})

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
