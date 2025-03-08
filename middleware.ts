import { i18n } from "@/lib/i18n/i18n"
import { Locale } from "@/types"
import { NextRequest, NextResponse } from "next/server"
import acceptLanguage from "accept-language"

acceptLanguage.languages([...i18n.locales])

function getLocale(request: NextRequest): string {
  // Verificar si hay una cookie de idioma
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale && i18n.locales.includes(cookieLocale as Locale)) {
    return cookieLocale
  }

  // Usar accept-language para analizar el encabezado
  const acceptHeader = request.headers.get("accept-language") || ""
  const detectedLocale = acceptLanguage.get(acceptHeader)

  return detectedLocale || i18n.defaultLocale
}

export default function middleware(request: NextRequest) {
  request.nextUrl.pathname = `/${getLocale(request)}/`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: ["/"],
}
