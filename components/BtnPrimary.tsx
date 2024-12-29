import cx from "clsx"
import Link from "next/link"

export default function BtnPrimary({
  children,
  href,
  target = "_self",
}: {
  children: any
  href: string
  target?: string
}) {
  const buttonCx = cx(
    "flex",
    "gap-2",
    "sm:inline-flex",
    "w-full py-4 px-8",
    "sm:w-auto",

    // Text
    "justify-center",
    "text-2xl font-medium",
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
