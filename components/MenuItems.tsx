import { getMenuItems } from "@/util/data"
import Link from "next/link"
export default function MenuItems({ lang }: { lang: string }) {
  const menuItems = getMenuItems({ lang })

  return (
    <>
      {menuItems.map((item) => {
        return (
          <Link
            key={item.title}
            className="no-underline text-current"
            href={`/${lang}/${item.href}`}
          >
            {item.title}
          </Link>
        )
      })}
    </>
  )
}
