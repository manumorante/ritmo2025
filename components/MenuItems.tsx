import { getMenuItems } from "@/util/data"
import Link from "next/link"
export default function MenuItems({ lang }: { lang: string }) {
  const menuItems = getMenuItems({ lang })

  return (
    <>
      {menuItems.map((item) => {
        let href = `/${lang}/${item.href}`
        let target = "_self"
        if (item.href.startsWith("https")) {
          href = item.href
          target = "_blank"
        }

        return (
          <Link href={href} target={target} key={item.title}>
            {item.title}
          </Link>
        )
      })}
    </>
  )
}
