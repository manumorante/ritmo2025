import cx from "clsx"
import Link from "next/link"

export default function BtnSecondary({
  children,
  href,
  target = "_self",
}: {
  children: any
  href: string
  target?: string
}) {
  const buttonCx = cx(
    "block",
    "sm:inline-block",
    "w-full py-2 px-5",
    "sm:w-auto",

    // Text
    "text-center",
    "text-xl font-medium",
    "text-primary",
    "whitespace-nowrap no-underline",
    "bg-white",

    "hover:ring-2 hover:ring-pink-300",

    // FX
    "rounded",
    "shadow",
    "transtiions-all duration-200 ease-in-out"
  )

  return (
    <Link className={buttonCx} href={href} target={target}>
      {children}
    </Link>
  )
}
