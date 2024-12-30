import { getDictionary } from "@/util/dictionary"
import { All, Photos, FeaturedFAQs } from "@/components"
import HeroSection from "@/components/HeroSection"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { d, t } = getDictionary(lang)
  const newsLetterID = lang === "es" ? "qcWPXv" : "yT3TRe"

  return (
    <>
      <HeroSection lang={lang} t={t} />

      <main>
        <div className="Home relative z-20">
          <div className="header-flat" />

          {/* Lineup */}
          <div className="Lineup bg-white relative section -mt-[3rem]">
            <div className="text-center">
              <p className="sectionTitle">{t("lineup.title")}</p>
              <All lang={lang} />
              <p className="text-xl uppercase my-8 text-primary">
                {t("lineup.more")}
              </p>
            </div>
          </div>

          <div className="Photos bg-white">
            <Photos />
          </div>

          <div className="Section py-20 lg:py-40 bg-white">
            <div className="container text-center">
              <div
                className="text-3xl text-primary text-center mb-4"
                dangerouslySetInnerHTML={{ __html: t("location.large") }}
              />
              <a
                target="_blank"
                className="no-underline"
                href="https://www.google.com/maps?ll=37.236176,-3.687694&z=15&t=m&hl=es-ES&gl=US&mapclient=embed&cid=7038520705456199891"
              >
                Google Maps →
              </a>
            </div>
          </div>

          <div className="Section py-16 bg-neutral-100">
            <FeaturedFAQs d={d} t={t} lang={lang} />
          </div>

          <div className="py-16 bg-neutral-50">
            <div className="container">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 lg:items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {t("newsletter.title")}
                  </h3>
                  <p className="text-xl mb-4 ">{t("newsletter.text")}</p>
                </div>
                <div
                  className="ml-embedded w-full md:w-[460px] shrink-0"
                  data-form={newsLetterID}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
