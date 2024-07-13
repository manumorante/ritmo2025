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
    "w-[70%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[24%] h-auto",
    "p-6",

    "font-normal",
    "bg-neutral-100/50 dark:bg-zinc-900/50",
    "ring-1 ring-neutral-200 dark:ring-neutral-700",
    "overflow-hidden",
    "rounded",
    "shadow",
    "transition-all",
    "hover:ring-neutral-400/50"
  )
  const questionCx = cx("no-underline font-semibold")
  const answerCx = cx("text-gray")

  return (
    <div className={boxCx} key={q}>
      <Link className={questionCx} href={href}>
        {q}
      </Link>

      <div className={answerCx} dangerouslySetInnerHTML={{ __html: a }} />
    </div>
  )
}
