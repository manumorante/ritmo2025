import cx from "clsx"
import Link from "next/link"
import { Logo, MenuItems, SubMenuItems, Date, MobileMenu } from "@/components"

export default function Header({ d, lang }: { d: any; lang: string }) {
  const mainCx = cx("Header", "fixed top-0 left-0 right-0 z-50")

  return (
    <div className={mainCx}>
      <div className="container rounded-full bg-header shadow-md">
        <div className="flex items-start justify-between gap-6">
          <div className="w-full md:w-auto flex items-center justify-between py-3 gap-8">
            <Link href="/" className="no-underline flex-grow-0 flex-shrink-0">
              <Logo />
            </Link>
          </div>
        </div>
      </div>

      <MobileMenu lang={lang} />
    </div>
  )
}
