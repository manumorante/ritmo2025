"use client"

import { usePathname } from "next/navigation"

const locales = {
  en: "English",
  es: "Español",
}

export default function Lang({ lang, className }: { lang: string; className?: string }) {
  const pathName = usePathname()
  const redirectedPathName = (lang: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = lang
    return segments.join("/")
  }

  return (
    <>
      {Object.entries(locales).map(([key, value]) => {
        if (key !== lang)
          return (
            <a className={className} key={key} href={redirectedPathName(key)}>
              {value}
            </a>
          )
      })}
    </>
  )
}
