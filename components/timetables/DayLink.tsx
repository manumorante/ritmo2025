import cx from "clsx"
import Link from "next/link"

export default function DayLink({
  title,
  href,
  active,
}: {
  title: string
  href: string
  active?: boolean
}) {
  const dayLinkCx = cx(
    "inline-block px-2 py-1 sm:px-4 sm:py-1 ring-2 rounded-sm",
    "font-medium text-base md:text-lg",
    "whitespace-nowrap no-underline",
    "transition-all duration-200 ease-in-out",
    {
      "text-neutral-600 hover:text-black": !active,
      "ring-neutral-300 hover:ring-pink-600/60": !active,
      "bg-neutral-200": !active,
    },
    {
      "text-black": active,
      "ring-pink-600": active,
      "bg-white": active,
    }
  )
  return (
    <Link href={href} className={dayLinkCx}>
      {title}
    </Link>
  )
}
