import cx from "clsx"
import Link from "next/link"
export default function FAQ({
  q,
  a,
  href,
}: {
  q: string
  a: string
  href: string
}) {
  const boxCx = cx(
    "snap-proximity shrink-0",
    "w-[85%] sm:w-[45%] md:w-[35%] lg:w-[30%] xl:w-[24%] h-auto",
    "font-normal"
  )

  return (
    <div className={boxCx} key={q}>
      <Link className="no-underline font-semibold text-3xl" href={href}>
        {q}
      </Link>

      <div
        className="text-gray font-light"
        dangerouslySetInnerHTML={{ __html: a }}
      />
    </div>
  )
}
