import Link from "next/link"
import { Logo, MenuItems, MobileMenu } from "@/components"

export default function Header({ lang }: { lang: string }) {
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

          <div className="flex gap-x-4 mb-1 *:no-underline *:text-white *:text-xl *:font-normal">
            <MenuItems lang={lang} />
          </div>
        </div>
      </div>

      <div className="pb-[4.6rem]"></div>

      <MobileMenu lang={lang} />
    </div>
  )
}
