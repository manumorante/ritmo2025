import { getDictionary } from "@/util/dictionary"
import {
  HeroDate,
  Photos,
  Lineup,
  All,
  Map,
  FeaturedFAQs,
  PreviewSection,
  BtnPrimary,
  BuyButton,
  BtnSecondary,
} from "@/components"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { d, t } = getDictionary(lang)

  return (
    <main className="Home">
      <HeroDate />

      <Lineup>
        <p className="sectionTitle">{t("lineup.title")}</p>

        <All />

        <div className="w-full flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <BuyButton t={t} />

          <BtnSecondary href={`/${lang}/lineup/friday`}>
            {t("timetables.title")}
          </BtnSecondary>
        </div>
      </Lineup>

      <Photos />
      {/* 
      <PreviewSection title={t("generic.tickets")}>
        <div className="container">
          <div className="sm:flex sm:gap-10 sm:justify-between items-center">
            <p className="text-2xl font-light mb-4">{t("about.text")}</p>

            <BuyButton t={t} />
          </div>
        </div>
      </PreviewSection> */}

      <PreviewSection
        title={t("location.title")}
        href={`/${lang}/location`}
        html={t("location.large")}
      >
        <div className="md:container">
          <Map />
        </div>
      </PreviewSection>

      <PreviewSection
        title={t("about.text")}
        href={`/${lang}/about`}
        more={t("about.more")}
      />

      <PreviewSection
        title={t("accommodation.title")}
        href={`/${lang}/accommodation`}
        more={t("accommodation.more")}
        html={t("accommodation.intro")}
      />

      <PreviewSection
        title={t("airports.title")}
        href={`/${lang}/airports`}
        more={t("airports.more")}
        html={t("airports.intro")}
      />

      <PreviewSection
        title={t("faqs.title")}
        href={`/${lang}/faqs`}
        more={t("faqs.more")}
      >
        <FeaturedFAQs d={d} lang={lang} />
      </PreviewSection>
    </main>
  )
}
