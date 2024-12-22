import Link from "next/link"
import { getAllMenuItems } from "@/util/data"
import { Logo, MobileMenu } from "@/components"

export default function Header({ lang }: { lang: string }) {
  const menuItems = getAllMenuItems({ lang })

  return (
    <div className="Header">
      <div className="Desktop hidden lg:block h-[4.6rem] fixed top-3 left-0 right-0 z-40 container mix-blend-difference">
        <div className="w-full md:w-auto flex items-center justify-between py-3 gap-8">
          <Link
            href="/"
            className="no-underline flex-grow-0 flex-shrink-0 w-24 invert"
          >
            <Logo />
          </Link>

          <div className="flex gap-x-4 mb-1">
            {menuItems.map((item) => {
              let href = `/${lang}/${item.href}`
              let target = "_self"
              if (item.href.startsWith("https")) {
                href = item.href
                target = "_blank"
              }

              return (
                <Link
                  className="no-underline text-white text-xl font-normal"
                  href={href}
                  target={target}
                  key={item.title}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="pb-[4.6rem]"></div>

      <MobileMenu lang={lang} />
    </div>
  )
}
