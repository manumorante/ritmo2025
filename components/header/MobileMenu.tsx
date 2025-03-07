"use client"

import cx from "clsx"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Lang, Logo, Date } from "@/components"
import MenuItems from "./MenuItems"
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
    "BurgerMenu mix-blend-difference lg:hidden",
    "flex items-center justify-between gap-2",
    "fixed top-0 left-0 right-0 z-40 px-5 h-[65px]"
  )

  const mainCx = cx(
    "Mobile",
    "fixed inset-0 z-40 lg:hidden",
    // box
    "flex flex-col items-center justify-between gap-5",
    "transition-opacity bg-neutral-50",
    {
      "opacity-100": open,
      "opacity-0 pointer-events-none": !open,
    }
  )

  return (
    <>
      <div className={burgerCx}>
        <Link href="/" className="no-underline flex-grow-0 flex-shrink-0 w-24 invert">
          <Logo />
        </Link>

        <div className="flex items-center gap-x-4">
          <Date />

          <button className="flex-shrink-0 flex-grow-0 text-primary" onClick={toggle}>
            <Bars3Icon className="w-9 h-9 text-white" />
          </button>
        </div>
      </div>

      <div className={mainCx} onClick={toggle}>
        <div className="flex items-center justify-end  w-full px-5 h-[65px]">
          <button>
            <XMarkIcon className="text-primary w-9 h-9" onClick={toggle} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-start gap-5 [&_a]:text-3xl [&_a]:text-neutral-500 [&_a]:uppercase [&_a]:no-underline">
          <Link href={`/${lang}`} className="no-underline">
            Home
          </Link>
          <MenuItems lang={lang} />
        </div>

        <div className="h-[65px]">
          <Lang lang={lang} />
        </div>
      </div>
    </>
  )
}
