import cx from "clsx"
import Link from "next/link"
import { getDictionary } from "@/util/dictionary"

export default async function FaqsPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { d, t } = getDictionary(lang)
  const sections = Object.keys(d.faqs.sections)

  const questionCx = cx(
    "cursor-pointer font-medium no-underline text-lg md:text-xl"
  )
  const answerCx = cx(
    "Answer font-light text-gray text-lg md:text-xl",
    // Links
    "[&_a]:text-rose-500"
  )

  return (
    <main className="Page FAQs">
      <div className="header-bg" />

      <div className="container">
        <h2 className="pageTitle">{t("faqs.title")}</h2>

        <p className="mb-6">
          {t("faqs.intro")}
          {sections.map((key) => {
            const sectionKey = key
            const section = d.faqs.sections[sectionKey]
            return (
              <>
                <Link key={key} href={`#${key}`}>
                  {section.title}
                </Link>
                ,{" "}
              </>
            )
          })}
          {"..."}
        </p>

        <div className="Sections space-y-10">
          {sections.map((key) => {
            const sectionKey = key
            const section = d.faqs.sections[sectionKey]
            const items = Object.keys(section.items)
            return (
              <div key={sectionKey} id={sectionKey}>
                <Link className="sectionTitle" href={`#${sectionKey}`}>
                  {section.title}
                </Link>

                <div className="FAQs space-y-8">
                  {items.map((key) => (
                    <div
                      key={key}
                      id={`${sectionKey}-${key}`}
                      className="group"
                    >
                      <Link
                        className={questionCx}
                        href={`#${sectionKey}-${key}`}
                      >
                        {section.items[key].q}
                      </Link>

                      <div
                        className={answerCx}
                        dangerouslySetInnerHTML={{
                          __html: section.items[key].a,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
