import Link from "next/link"
import { Section } from "@/components"

export default function PreviewSection({
  title,
  href,
  more,
  html,
  children,
}: {
  title: string
  href?: string
  more?: string
  html?: string
  children?: any
}) {
  return (
    <Section title={title} href={href}>
      {html && (
        <div className="container">
          <div
            className="md:text-xl mb-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      )}

      {children}

      {href && more && (
        <div className="container">
          <Link href={href}>{more} →</Link>
        </div>
      )}
    </Section>
  )
}
