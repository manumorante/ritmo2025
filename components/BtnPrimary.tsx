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
    "w-full py-2 px-5",
    "sm:w-auto",

    // Text
    "justify-center",
    "text-xl font-medium",
    "text-white",
    "whitespace-nowrap no-underline",
    "bg-gradient-to-r",
    "from-pink-700 via-pink-600 to-pink-700",

    "hover:ring-2 hover:ring-pink-300",

    // FX
    "rounded",
    "transtiions-all duration-200 ease-in-out"
  )

  return (
    <Link className={buttonCx} href={href} target={target}>
      {children}
    </Link>
  )
}
