import { getDictionary } from "@/util/dictionary"
import { Hero, Lineup, Photos, Location, FeaturedFAQs, HomeImage } from "@/components"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const { d, t } = getDictionary(lang)

  return (
    <main>
      <Hero lang={lang} button={t("generic.buyTickets")} text={t("about.text")} />
      <div className="header-flat" />
      <Lineup lang={lang} t={t} />
      <HomeImage />
      <Location t={t} />
      <Photos />
      <FeaturedFAQs d={d} t={t} lang={lang} />
    </main>
  )
}
