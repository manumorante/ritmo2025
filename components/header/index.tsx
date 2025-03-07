import Link from "next/link"
import { Logo, Date } from "@/components"
import MenuItems from "./MenuItems"
import MobileMenu from "./MobileMenu"

export default function Header({ lang }: { lang: string }) {
  return (
    <div className="Header">
      <div className="Desktop hidden lg:block w-full fixed top-0 left-0 right-0 z-40 container mix-blend-difference">
        <div className="w-full h-[65px] md:w-auto flex items-center justify-between gap-8">
          <Link href="/" className="no-underline flex-grow-0 flex-shrink-0 w-24 invert">
            <Logo />
          </Link>

          <div className="flex items-center gap-x-6">
            <Date />

            <div className="flex items-center *:leading-none *:whitespace-nowrap gap-x-4 *:no-underline *:text-white *:text-lg *:font-light uppercase">
              <MenuItems lang={lang} />
            </div>
          </div>
        </div>
      </div>

      <MobileMenu lang={lang} />
    </div>
  )
}
