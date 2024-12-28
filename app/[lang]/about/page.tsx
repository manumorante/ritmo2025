import { getDictionary } from "@/util/dictionary"
import { BuyButton, HeroImage } from "@/components"

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  return (
    <main className="Page About">
      <div className="header-flat" />

      <div className="container">
        <h2 className="pageTitle">{t("about.title")}</h2>
        <p
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: t("about.text") }}
        />
      </div>

      <HeroImage src="/about.jpg" />

      <div className="container">
        <div className="sm:flex gap-6">
          <p
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: t("about.text2") }}
          />
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: t("about.text3") }}
          />
        </div>
        <p dangerouslySetInnerHTML={{ __html: t("about.text4") }} />

        <BuyButton lang={lang} t={t} />
      </div>
    </main>
  )
}
