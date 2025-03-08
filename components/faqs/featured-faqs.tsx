import cx from "clsx"
import { FAQ, ViewMore } from "@/components"
import { getFAQById } from "@/lib/utils"

interface FAQ {
  section: string
  question: string
  answer: string
}

interface FeaturedFAQsProps {
  d: Record<string, any>
  t: (path: string) => string
  lang: string
}

export default function FeaturedFAQs({ d, t, lang }: FeaturedFAQsProps) {
  const faqIds = ["acampa", "autobus", "parking"]

  const styles = {
    main: cx("FeaturedFAQs", "py-16", "bg-neutral-100"),
    container: cx("xl:container"),
    list: cx(
      "FAQs",
      "flex",
      "gap-12",
      "px-7 xl:px-0",
      "snap-x xl:snap-none",
      "overflow-x-auto xl:overflow-x-visible"
    ),
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.list}>
          {faqIds.map((id) => {
            const faq = getFAQById(d, id)
            if (!faq) return null

            return (
              <FAQ
                key={id}
                q={faq.question}
                a={faq.answer}
                href={`/${lang}/faqs#${faq.section}-${id}`}
              />
            )
          })}
          <ViewMore text={t("generic.viewMore") + " → "} href={`/${lang}/faqs`} />
        </div>
      </div>
    </div>
  )
}
