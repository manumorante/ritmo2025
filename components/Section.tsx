import cx from "clsx"
import Link from "next/link"

export const sectionCx = cx("Section section")

export default function Section({
  children,
  id,
  title,
  href,
  className,
}: {
  children: React.ReactNode
  id?: string
  title?: string
  href?: string
  className?: string
}) {
  const mainCx = cx(sectionCx, className)
  return (
    <div id={id} className={mainCx}>
      {title && (
        <div className="container">
          {href ? (
            <Link href={href} className="sectionTitle">
              {title}
            </Link>
          ) : (
            <div className="sectionTitle">{title}</div>
          )}
        </div>
      )}

      {children}
    </div>
  )
}
