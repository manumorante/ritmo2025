import { getSubMenuItems } from "@/util/data"
import Link from "next/link"
export default function SubMenuItems({ lang }: { lang: string }) {
  const SubmenuItems = getSubMenuItems({ lang })

  return (
    <>
      {SubmenuItems.map((item) => {
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
