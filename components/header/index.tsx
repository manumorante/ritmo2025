import cx from "clsx"
import Link from "next/link"
import { Logo, MenuItems, SubMenuItems, Date, MobileMenu } from "@/components"

export default function Header({ d, lang }: { d: any; lang: string }) {
  const mainCx = cx("Header", "min-h-[4.5rem] lg:min-h-[6rem]")
  const desktopCx = cx(
    "Desktop",
    "hidden lg:flex",
    "fixed top-3 left-0 right-0 z-40"
  )

  return (
    <div className={mainCx}>
      <div className={desktopCx}>
        <div className="container">
          <div className="w-full md:w-auto flex items-center justify-between py-3 gap-8">
            <Link
              href="/"
              className="no-underline flex-grow-0 flex-shrink-0 w-24 invert"
            >
              <Logo />
            </Link>

            <div className="w-full flex items-center justify-between gap-6">
              <div className="flex gap-x-4 text-xl font-medium uppercase text-neutral-300 mb-1">
                <MenuItems lang={lang} />
              </div>
              <div className="hidden lg:flex gap-x-3 text-base font-medium uppercase text-neutral-300">
                <SubMenuItems lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Date d={d} /> */}
      <MobileMenu lang={lang} />
    </div>
  )
}
