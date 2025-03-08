import cx from "clsx"
import Link from "next/link"

interface ViewMoreProps {
  href: string
  text: string
  className?: string
}

export default function ViewMore({ href, text, className }: ViewMoreProps) {
  const styles = {
    main: cx(
      "flex items-center justify-center",
      "min-w-[300px] h-[200px]",
      "p-8",
      "bg-white rounded-lg",
      "hover:bg-neutral-50 transition-colors",
      className
    ),
  }

  return (
    <Link href={href} className={styles.main}>
      <span className="text-lg font-medium">{text}</span>
    </Link>
  )
}
