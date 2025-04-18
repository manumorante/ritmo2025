import cx from "clsx"
import { getDictionary } from "@/lib/i18n"
import { Buy, HeroImage } from "@/components"
import Link from "next/link"

export default async function AccommodationPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)
  const optionCx = cx("Option")
  const optionTitleCx = cx("text-primary text-4xl mb-2")
  const textCx = cx("text-xl")
  const noteCx = cx("text-gray")

  return (
    <main className="Page Accommodation">
      <HeroImage src="/granada.jpg" />

      <div className="header-flat" />

      <div className="container">
        <div className="max-w-md mx-auto">
          <h2
            className="text-primary text-4xl lg:text-6xl text-center mb-14 lg:mb-16 mx-7"
            dangerouslySetInnerHTML={{ __html: t("accommodation.intro") }}
          />

          <div className="space-y-20">
            <div className={optionCx}>
              <Link href={`/${lang}/accommodation/camp`} className="no-underline">
                <h3 className={optionTitleCx}>{t("accommodation.camp.title")}</h3>
              </Link>

              <p
                className={textCx}
                dangerouslySetInnerHTML={{
                  __html: t("accommodation.camp.text"),
                }}
              />

              <Link href={`/${lang}/accommodation/camp`}>{t("generic.viewMore")} →</Link>
            </div>

            <div className={optionCx}>
              <h3 className={optionTitleCx}>{t("accommodation.granada.title")}</h3>

              <p
                className={textCx}
                dangerouslySetInnerHTML={{
                  __html: t("accommodation.granada.text"),
                }}
              />
            </div>

            <div className={optionCx}>
              <h3 className={optionTitleCx}>{t("accommodation.pueblos.title")}</h3>

              <p
                className={textCx}
                dangerouslySetInnerHTML={{
                  __html: t("accommodation.pueblos.text"),
                }}
              />
              <p
                className={noteCx}
                dangerouslySetInnerHTML={{
                  __html: t("accommodation.pueblos.note"),
                }}
              />
            </div>

            <div className={optionCx}>
              <h3 className={optionTitleCx}>{t("accommodation.atarfe.title")}</h3>
              <p
                className={textCx}
                dangerouslySetInnerHTML={{
                  __html: t("accommodation.atarfe.text"),
                }}
              />
            </div>
          </div>

          <div className="mx-auto mt-12 flex justify-center">
            <Buy lang={lang} t={t} />
          </div>
        </div>
      </div>
    </main>
  )
}
