import cx from "clsx"
import Link from "next/link"

export default function Button({
  children,
  href,
  target = "_self",
}: {
  children: any
  href: string
  target?: string
}) {
  const buttonCx = cx(
    "inline-flex",
    "gap-2",
    "w-auto py-4 px-8",

    // Text
    "justify-center",
    "text-xl font-medium",
    "text-white",
    "whitespace-nowrap no-underline",
    "bg-black"
  )

  return (
    <Link className={buttonCx} href={href} target={target}>
      {children}
    </Link>
  )
}
