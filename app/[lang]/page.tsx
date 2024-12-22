import { getDictionary } from "@/util/dictionary"
import {
  VideoHero,
  All,
  BuyButton,
  Photos,
  Map,
  PreviewSection,
  FeaturedFAQs,
} from "@/components"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { d, t } = getDictionary(lang)
  const newsLetterID = lang === "es" ? "qcWPXv" : "yT3TRe"

  return (
    <>
      <VideoHero className="fixed z-10 top-0 left-0 w-full h-screen object-cover pointer-events-none" />
      <div className="h-[80vh]" />

      <main>
        <div className="Home relative z-20">
          <div className="h-[4.8rem] -mb-[4rem] bg-white w-full sticky top-0 z-20"></div>

          {/* Lineup */}
          <div className="Lineup bg-white relative section">
            <div className="text-center">
              <p className="sectionTitle">{t("lineup.title")}</p>
              <All />
            </div>
          </div>

          <div className="Photos bg-white">
            <Photos />
          </div>

          <PreviewSection title={t("generic.tickets")} className="bg-white">
            <div className="container">
              <div className="sm:flex sm:gap-10 sm:justify-between items-center">
                <p className="text-2xl font-light mb-4">{t("about.text")}</p>

                <BuyButton t={t} />
              </div>
            </div>
          </PreviewSection>

          <PreviewSection
            title={t("location.title")}
            // href={`/${lang}/location`}
            html={t("location.large")}
            className="bg-neutral-100"
          >
            {/* <div className="md:container">
              <Map />
            </div> */}
            <div className="container">
              <a
                target="_blank"
                href="https://www.google.com/maps?ll=37.236176,-3.687694&z=15&t=m&hl=es-ES&gl=US&mapclient=embed&cid=7038520705456199891"
              >
                Google Maps →
              </a>
            </div>
          </PreviewSection>

          {/* <PreviewSection
            title={t("about.text")}
            href={`/${lang}/about`}
            more={t("about.more")}
            className="bg-white"
          />

          <PreviewSection
            title={t("accommodation.title")}
            href={`/${lang}/accommodation`}
            more={t("accommodation.more")}
            html={t("accommodation.intro")}
            className="bg-neutral-100"
          />

          <PreviewSection
            title={t("airports.title")}
            href={`/${lang}/airports`}
            more={t("airports.more")}
            html={t("airports.intro")}
            className="bg-white"
          /> */}

          <PreviewSection
            title={t("faqs.title")}
            href={`/${lang}/faqs`}
            more={t("faqs.more")}
            className="bg-white"
          >
            <FeaturedFAQs d={d} lang={lang} />
          </PreviewSection>

          <div className="py-16 bg-neutral-100">
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
