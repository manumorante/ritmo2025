import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import { Buy, HeroImage } from "@/components"

export default async function AirportsPage({ params: { lang } }: { params: { lang: string } }) {
  const { t } = getDictionary(lang)

  const optionTitleCx = cx(" text-3xl lg:text-4xl font-light pt-0 mb-2")
  const boxTitleCx = cx("text-3xl  font-light pt-0 mb-2")
  const idCx = cx(
    "inline-block text-2xl leading-none  font-mono font-normal text-primary  border-2 rounded-lg px-1.5 py-1 mb-3"
  )

  return (
    <main className="Page Airports">
      <HeroImage src="/air.jpg" />

      <div className="header-flat" />

      <div className="container">
        <div className="max-w-md mx-auto">
          <h2
            className="text-primary text-4xl lg:text-6xl text-center mb-16 mx-7"
            dangerouslySetInnerHTML={{ __html: t("airports.intro") }}
          />

          <div className="">
            <p className={idCx}>GRX</p>

            <h3 className={optionTitleCx}>{t("airports.granada.title")}</h3>
            <p className="text-2xl mb-8">{t("airports.granada.text")}</p>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-[1]">
                <p className={boxTitleCx}>{t("airports.taxi")}</p>
                <p>{t("airports.granada.taxi")}</p>
              </div>

              <div className="flex-[1]">
                <p className={boxTitleCx}>{t("airports.bus")}</p>
                <p>{t("airports.granada.bus")}</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className={idCx}>AGP</p>
            <h3 className={optionTitleCx}>{t("airports.malaga.title")}</h3>

            <p className="text-2xl mb-8">{t("airports.malaga.text")}</p>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-[1]">
                <p className={boxTitleCx}>{t("airports.bus")}</p>
                <p>{t("airports.malaga.bus")}</p>
              </div>

              <div className="flex-[1]">
                <p className={boxTitleCx}>{t("airports.rent")}</p>
                <p>{t("airports.malaga.rent")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex justify-center">
          <Buy lang={lang} t={t} />
        </div>
      </div>
    </main>
  )
}
