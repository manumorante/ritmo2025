import cx from "clsx"
import Link from "next/link"
export default function FAQ({
  q,
  a,
  href,
  className,
}: {
  q: string
  a?: string
  href: string
  className?: string
}) {
  const boxCx = cx(
    "snap-proximity shrink-0",
    "w-[85%] sm:w-[45%] md:w-[35%] lg:w-[30%] xl:w-[24%] h-auto",
    className
  )

  return (
    <div className={boxCx} key={q}>
      <Link className="block no-underline text-3xl mb-2" href={href}>
        {q}
      </Link>

      {a && <div dangerouslySetInnerHTML={{ __html: a }} />}
    </div>
  )
}
