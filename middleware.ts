import { i18n, type Locale } from "@/i18n"
import { NextRequest, NextResponse } from "next/server"

function getLocale(req: NextRequest) {
  const acceptLanguage = req.headers.get("accept-language")
  const locale = acceptLanguage?.split(",")[0].split("-")[0] // en-US -> en, es-ES -> es

  if (locale && i18n.locales.includes(locale as Locale)) {
    return locale
  }

  return locale || i18n.defaultLocale
}

export default function middleware(req: NextRequest) {
  const locale = getLocale(req)

  // Rewrite the path (`/`) to the localized page (pages/[locale]/[country])
  req.nextUrl.pathname = `/${locale}/`
  return NextResponse.rewrite(req.nextUrl)
}

export const config = {
  matcher: ["/"],
}
