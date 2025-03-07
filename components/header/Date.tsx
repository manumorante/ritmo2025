"use client"

import { usePathname } from "next/navigation"

export default function Date() {
  const pathname = usePathname()
  const isSpanish = pathname?.includes("/es/")
  const dateText = isSpanish ? "30 - 31 Mayo" : "30 - 31 May"

  return (
    <div className="text-white text-lg font-light whitespace-nowrap py-1 border border-white px-2 leading-none">
      {dateText}
    </div>
  )
}
