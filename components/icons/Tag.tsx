import cx from "clsx"

export default function Tag({
  children,
  title,
  color,
}: {
  children: React.ReactNode
  title: string
  color: string
}) {
  return (
    <div
      className={cx(
        "text-lg rounded-full inline-flex gap-2 items-center  py-0.5 pr-4 pl-2",
        color
      )}
    >
      {children}
      <span className="text-white">{title}</span>
    </div>
  )
}
