"use client"
import { LanguageIcon } from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"
import Link from "next/link"

const locales = {
  en: "English",
  es: "Español",
}

export default function LocaleSwitcher({ lang }: { lang: string }) {
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
            <Link
              key={key}
              href={redirectedPathName(key)}
              className="inline-flex gap-1 py-2 pr-3 pl-2 bg-white text-gray no-underline rounded"
            >
              <LanguageIcon className="w-6 h-6" />
              {value}
            </Link>
          )
      })}
    </>
  )
}
