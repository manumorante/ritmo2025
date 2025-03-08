import { getDictionary } from "@/lib/i18n"
import { Buy, HeroImage } from "@/components"
import Image from "next/image"

export default async function AboutPage({ params: { lang } }: { params: { lang: string } }) {
  const { t } = getDictionary(lang)
  const textCx = "text-xl mx-10"
  const imageCx = "w-full h-[40vh] sm:h-[500px] object-cover my-12"

  return (
    <main className="Page About">
      <HeroImage src="/about.jpg" />

      <div className="header-flat" />

      <div className="max-w-md mx-auto">
        <p
          className="text-primary text-4xl lg:text-6xl text-center mb-12 mx-7"
          dangerouslySetInnerHTML={{ __html: t("about.text") }}
        />

        <p className={textCx} dangerouslySetInnerHTML={{ __html: t("about.text2") }} />

        <Image className={imageCx} src="/photos/12.jpg" width={1120} height={721} alt="Img" />

        <p className={textCx} dangerouslySetInnerHTML={{ __html: t("about.text3") }} />

        <Image className={imageCx} src="/photos/14.jpg" width={1120} height={721} alt="Img" />

        <p className={textCx} dangerouslySetInnerHTML={{ __html: t("about.text4") }} />

        <p className={textCx} dangerouslySetInnerHTML={{ __html: t("about.text5") }} />

        <div className="container mt-12 flex justify-center">
          <Buy lang={lang} t={t} />
        </div>
      </div>
    </main>
  )
}
