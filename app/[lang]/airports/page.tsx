import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import { HeroImage } from "@/components"

export default async function AirportsPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  const optionsCx = cx("grid grid-cols-1 sm:grid-cols-2 gap-10")
  const optionCx = cx("[&>p]:py-3")
  const optionTitleCx = cx("text-2xl line-clamp-3")
  const boxCx = cx("p-4 sm:p-6 border border-neutral-500/50 rounded mb-6")
  const boxTitleCx = cx("text-xl font-light text-gray pt-0")

  return (
    <main className="Airports">
      <div className="container">
        <h2 className="pageTitle">{t("airports.title")}</h2>
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: t("airports.intro") }}
        />
      </div>

      <HeroImage src="/air.jpg" />

      <div className="container">
        <div className={optionsCx}>
          <div className={optionCx}>
            <h3 className={optionTitleCx}>{t("airports.granada.title")}</h3>
            <p>{t("airports.granada.text")}</p>
            <p>{t("airports.granada.how")}</p>

            <div className={boxCx}>
              <p className={boxTitleCx}>{t("airports.taxi")}</p>
              <p>{t("airports.granada.taxi")}</p>
            </div>

            <div className={boxCx}>
              <p className={boxTitleCx}>{t("airports.bus")}</p>
              <p>{t("airports.granada.bus")}</p>
            </div>
          </div>

          <div className={optionCx}>
            <h3 className={optionTitleCx}>{t("airports.malaga.title")}</h3>

            <p>{t("airports.malaga.text")}</p>
            <p>{t("airports.malaga.how")}</p>
            <div className={boxCx}>
              <p className={boxTitleCx}>{t("airports.bus")}</p>
              <p>{t("airports.malaga.bus")}</p>
            </div>

            <div className={boxCx}>
              <p className={boxTitleCx}>{t("airports.rent")}</p>
              <p>{t("airports.malaga.rent")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
