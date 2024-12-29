import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import { HeroImage } from "@/components"
import Image from "next/image"

export default async function AirportsPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  const optionCx = cx("[&>p]:py-3")
  const optionTitleCx = cx("text-primary text-5xl font-light pt-0 mt-12 mb-2")
  const boxTitleCx = cx("text-4xl font-light pt-0 mb-2")

  return (
    <main className="Page Airports">
      <Image
        className="w-full h-[40vh] sm:h-[300px] object-cover"
        src="/air.jpg"
        width={1120}
        height={721}
        alt="Img"
      />

      <div className="header-flat" />

      <div className="container">
        <div className="max-w-md mx-auto">
          <h2 className="pageTitle">{t("airports.title")}</h2>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: t("airports.intro") }}
          />

          <div className={optionCx}>
            <h3 className={optionTitleCx}>{t("airports.granada.title")}</h3>
            <p>{t("airports.granada.text")}</p>

            <div className="flex gap-6">
              <div className="flex-[1]">
                <p className={boxTitleCx}>{t("airports.taxi")}</p>
                <p>{t("airports.granada.taxi")}</p>
              </div>

              <div className="flex-[2]">
                <p className={boxTitleCx}>{t("airports.bus")}</p>
                <p>{t("airports.granada.bus")}</p>
              </div>
            </div>
          </div>

          <div className={optionCx}>
            <h3 className={optionTitleCx}>{t("airports.malaga.title")}</h3>

            <p>{t("airports.malaga.text")}</p>
            <div className="flex gap-6">
              <div className="flex-[1]">
                <p className={boxTitleCx}>{t("airports.bus")}</p>
                <p>{t("airports.malaga.bus")}</p>
              </div>

              <div className="flex-[2]">
                <p className={boxTitleCx}>{t("airports.rent")}</p>
                <p>{t("airports.malaga.rent")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
