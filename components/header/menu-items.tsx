import { getMenuItems } from "@/lib/data"
import Link from "next/link"

export default function MenuItems({ lang }: { lang: string }) {
  const menuItems = getMenuItems({ lang })

  const getDisabledText = (title: string) => {
    if (lang === "es") {
      return `${title} (No disponible)`
    } else if (lang === "ca") {
      return `${title} (No disponible)`
    } else {
      return `${title} (Not available)`
    }
  }

  return (
    <>
      {menuItems.map((item) => {
        if (!item.href || item.href === "") {
          return (
            <span key={item.title} className="text-gray-400 cursor-default">
              {getDisabledText(item.title)}
            </span>
          )
        }

        const isExternalLink = item.href.startsWith("https")
        const href = isExternalLink ? item.href : `/${lang}/${item.href}`
        const target = isExternalLink ? "_blank" : "_self"

        return (
          <Link href={href} target={target} key={item.title}>
            {item.title}
          </Link>
        )
      })}
    </>
  )
}
