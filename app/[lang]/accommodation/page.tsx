import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import { HeroImage } from "@/components"

export default async function AccommodationPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)
  const optionsCx = cx("grid grid-cols-1 sm:grid-cols-3 gap-4")
  const optionCx = cx("Option")
  const optionTitleCx = cx("text-2xl mb-6 line-clamp-3")
  const noteCx = cx("text-base text-gray")

  return (
    <main className="Page Accommodation text-lg">
      <div className="header-flat" />

      <div className="container">
        <h2 className="pageTitle">{t("accommodation.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("accommodation.intro") }} />
      </div>

      <HeroImage src="/granada.jpg" />

      <div className="container">
        <div className={optionsCx}>
          <div className={optionCx}>
            <h3 className={optionTitleCx}>
              {t("accommodation.granada.title")}
            </h3>

            <p
              dangerouslySetInnerHTML={{
                __html: t("accommodation.granada.text"),
              }}
            />
          </div>

          <div className={optionCx}>
            <h3 className={optionTitleCx}>
              {t("accommodation.pueblos.title")}
            </h3>

            <p
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
              dangerouslySetInnerHTML={{
                __html: t("accommodation.atarfe.text"),
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
