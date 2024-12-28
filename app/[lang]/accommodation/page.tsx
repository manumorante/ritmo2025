import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import Image from "next/image"

export default async function AccommodationPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)
  const optionCx = cx("Option")
  const optionTitleCx = cx("text-primary text-5xl mb-2")
  const textCx = cx("text-2xl px-4")
  const noteCx = cx("text-gray")

  return (
    <main className="Page Accommodation">
      <Image
        className="w-full h-[40vh] sm:h-[500px] object-cover"
        src="/granada.jpg"
        width={1120}
        height={721}
        alt="Img"
      />

      <div className="header-flat" />

      <div className="container">
        <h2
          className="pageTitle text-center mb-12"
          dangerouslySetInnerHTML={{ __html: t("accommodation.intro") }}
        />

        <div className="max-w-md mx-auto space-y-20">
          <div className={optionCx}>
            <h3 className={optionTitleCx}>
              {t("accommodation.granada.title")}
            </h3>

            <p
              className={textCx}
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
      </div>
    </main>
  )
}
