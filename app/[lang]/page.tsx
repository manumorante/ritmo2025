import { getDictionary } from "@/util/dictionary"
import {
  All,
  BuyButton,
  Hero,
  Lineup,
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
      <div className="pointer-events-none">
        <Hero />
      </div>

      <main className="Home h-screen overflow-y-auto">
        <div className="h-[70vh] bg-slate-400"></div>

        {/* Lineup */}
        <div className="Lineup bg-white relative py-14 md:py-24">
          <div className="container">
            <p className="sectionTitle">{t("lineup.title")}</p>
            <All />
          </div>
        </div>

        <Photos />

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
          className="bg-white"
        >
          <div className="md:container">
            <Map />
          </div>
        </PreviewSection>

        <PreviewSection
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
          className="bg-white"
        />

        <PreviewSection
          title={t("airports.title")}
          href={`/${lang}/airports`}
          more={t("airports.more")}
          html={t("airports.intro")}
          className="bg-white"
        />

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
      </main>
    </>
  )
}
