import Link from "next/link"
import { getMenuItems, getSubMenuItems } from "@/util/data"
import { Logo, MobileMenu } from "@/components"

export default function Header({ lang }: { lang: string }) {
  const menuItems = getMenuItems({ lang })
  const subMenuItems = getSubMenuItems({ lang })
  return (
    <div className="Header ">
      <div className="Desktop hidden lg:block fixed top-3 left-0 right-0 z-40 container mix-blend-difference">
        <div className="w-full md:w-auto flex items-center justify-between py-3 gap-8">
          <Link
            href="/"
            className="no-underline flex-grow-0 flex-shrink-0 w-24 invert"
          >
            <Logo />
          </Link>

          <div className="flex gap-x-4 mb-1">
            {menuItems.map((item) => {
              return (
                <Link
                  className="no-underline text-white text-xl font-medium"
                  href={`/${lang}/${item.href}`}
                  key={item.title}
                >
                  {item.title}
                </Link>
              )
            })}

            {subMenuItems.map((item) => {
              return (
                <Link
                  className="no-underline text-white text-xl font-medium"
                  href={`/${lang}/${item.href}`}
                  key={item.title}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <MobileMenu lang={lang} />
    </div>
  )
}
