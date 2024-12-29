"use client"

import cx from "clsx"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { MenuItems, LocaleSwitcher, Logo } from "@/components"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MobileMenu({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  useEffect(() => {
    if (open) {
      document.body.classList.add("is-modal-open")
    } else {
      document.body.classList.remove("is-modal-open")
    }
  }, [open])

  const burgerCx = cx(
    "BurgerMenu",
    "mix-blend-difference",
    "lg:hidden",
    "flex items-center justify-between gap-2",
    "fixed top-0 left-0 right-0 z-40 px-5 h-[65px]"
  )
  const burgerIconCx = cx("flex-shrink-0 flex-grow-0 text-primary")

  const mainCx = cx(
    "Mobile",
    { "opacity-100": open, "opacity-0 pointer-events-none": !open },

    // Box
    "fixed inset-0 z-40 lg:hidden",

    // Filters
    "transition-opacity backdrop-filter backdrop-blur-sm bg-opacity-90 bg-white/90 dark:bg-black/80",

    // List
    "flex flex-col items-start justify-start gap-5",

    // Items
    "[&_a]:text-4xl [&_a]:pl-5 [&_a]:no-underline"
  )

  return (
    <>
      <div className={burgerCx}>
        <Link
          href="/"
          className="no-underline flex-grow-0 flex-shrink-0 w-24 invert"
        >
          <Logo />
        </Link>

        <button className={burgerIconCx} onClick={toggle}>
          <Bars3Icon className="w-9 h-9 text-white" />
        </button>
      </div>

      <div className={mainCx} onClick={toggle}>
        <div className="flex items-center justify-end  w-full px-5 h-[65px]">
          <button>
            <XMarkIcon className="text-primary w-9 h-9 " onClick={toggle} />
          </button>
        </div>

        <Link href={`/${lang}`} className="no-underline">
          Home
        </Link>
        <MenuItems lang={lang} />
        <LocaleSwitcher lang={lang} />
      </div>
    </>
  )
}
