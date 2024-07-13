import { getMenuItems } from "@/util/data"
import Link from "next/link"
export default function MenuItems({ lang }: { lang: string }) {
  const menuItems = getMenuItems({ lang })

  return (
    <>
      {menuItems.map((item) => {
        return (
          <Link
            className="no-underline hover:text-pink-600 transition-colors duration-100"
            key={item.title}
            href={`/${lang}/${item.href}`}
          >
            {item.title}
          </Link>
        )
      })}
    </>
  )
}
