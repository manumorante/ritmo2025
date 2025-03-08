"use client"

import { usePathname, useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { i18n } from "@/lib/i18n/i18n"

const LANGUAGE_NAMES = {
  es: "Español",
  en: "English",
} as const

export default function Lang({ lang, className }: { lang: string; className?: string }) {
  const router = useRouter()
  const currentPath = usePathname() || "/"

  function getNewPath(newLanguage: string) {
    const urlParts = currentPath.split("/")
    urlParts[1] = newLanguage
    return urlParts.join("/")
  }

  function switchLanguage(newLanguage: string) {
    Cookies.set("NEXT_LOCALE", newLanguage, { expires: 365 })
    router.push(getNewPath(newLanguage))
  }

  return (
    <>
      {i18n.locales.map((locale) => {
        if (locale === lang) return null

        return (
          <button className={className} key={locale} onClick={() => switchLanguage(locale)}>
            {LANGUAGE_NAMES[locale]}
          </button>
        )
      })}
    </>
  )
}
