import { getDictionary } from "@/lib/i18n"
import { Hero, Lineup, Photos, Location, FeaturedFAQs, HomeImage, Button } from "@/components"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const { d, t } = getDictionary(lang)

  return (
    <main>
      <Hero lang={lang} button={t("generic.buyTickets")} text={t("about.text")} />
      <div className="header-flat" />
      <Lineup lang={lang} t={t} />
      <div className="mx-auto mb-24 flex justify-center">
        <Button href={`${lang}/lineup/friday`}>
          <div>{t("generic.schedule")}</div>
        </Button>
      </div>
      <HomeImage />
      <Location t={t} />
      <Photos />
      <FeaturedFAQs d={d} t={t} lang={lang} />
    </main>
  )
}
