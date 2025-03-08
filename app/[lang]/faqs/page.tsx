import Link from "next/link"
import { getDictionary } from "@/lib/i18n"

type FAQSection = {
  title: string
  items: Record<string, { q: string; a: string }>
}

export default async function FaqsPage({ params: { lang } }: { params: { lang: string } }) {
  const { d, t } = getDictionary(lang)

  if (
    !d ||
    typeof d !== "object" ||
    !("faqs" in d) ||
    !d.faqs ||
    typeof d.faqs !== "object" ||
    !("sections" in d.faqs)
  ) {
    return (
      <main className="Page FAQs">
        <div className="container">
          <div className="max-w-md mx-auto">
            <h2 className="pageTitle">FAQs</h2>
            <p>No FAQs available at this moment.</p>
          </div>
        </div>
      </main>
    )
  }

  const faqs = d.faqs as { sections: Record<string, FAQSection> }
  const sections = Object.keys(faqs.sections)

  return (
    <main className="Page FAQs">
      <div className="header-flat" />

      <div className="container">
        <div className="max-w-md mx-auto">
          <h2 className="pageTitle">{t("faqs.title")}</h2>

          <p className="mb-6">
            {t("faqs.intro")}{" "}
            {sections.map((key) => {
              const section = faqs.sections[key]
              return (
                <span key={key}>
                  <Link href={`#${key}`}>{section.title}</Link>,{" "}
                </span>
              )
            })}
            {"..."}
          </p>
          <div className="Sections space-y-10">
            {sections.map((key) => {
              const section = faqs.sections[key]
              const items = Object.keys(section.items)
              return (
                <div key={key} id={key}>
                  <Link className="sectionTitle" href={`#${key}`}>
                    {section.title}
                  </Link>

                  <div className="FAQs space-y-10 max-w-md mx-auto">
                    {items.map((itemKey) => (
                      <div key={itemKey} id={`${key}-${itemKey}`} className="group">
                        <Link
                          className="cursor-pointer font-medium text-[1.2em] block mb-1 no-underline"
                          href={`#${key}-${itemKey}`}
                        >
                          {section.items[itemKey].q}
                        </Link>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: section.items[itemKey].a,
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
      </div>
    </main>
  )
}
