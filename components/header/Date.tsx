import cx from "clsx"

export default function Date({ d }: { d: any }) {
  const { xs, sm, lg } = d.header.date

  const mainCx = cx(
    "Date",
    "pointer-events-none",
    "fixed top-0 right-0 left-0 z-50"
  )
  const pillCx = cx(
    "flex items-center justify-center",
    "text-center text-white bg-primary",
    "px-3 py-2",
    "mm:px-4 mm:py-2",
    "sm:px-4 sm:py-2",
    "rounded-b-lg"
  )
  const xsCx = cx(
    "md:hidden",
    "font-light text-sm leading-tight",
    "mm:text-base mm:leading-none"
  )
  const smCx = cx("hidden md:block xl:hidden", "text-lg leading-tight")
  const lgCx = cx("hidden xl:block", "text-lg leading-tight")

  return (
    <div className={mainCx}>
      <div className="container flex justify-end">
        <div className={pillCx}>
          <div className={xsCx} dangerouslySetInnerHTML={{ __html: xs }} />
          <div className={smCx} dangerouslySetInnerHTML={{ __html: sm }} />
          <div className={lgCx} dangerouslySetInnerHTML={{ __html: lg }} />
        </div>
      </div>
    </div>
  )
}
