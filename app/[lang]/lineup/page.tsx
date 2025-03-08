import { getDictionary } from "@/lib/i18n"
import { LineupAll, Title } from "@/components"
import { TimetablesMenu } from "@/components"

export default async function Timetables({ params: { lang } }: { params: { lang: string } }) {
  const { t } = getDictionary(lang)

  return (
    <main className="Page Timetables">
      <div className="header-flat" />

      <div className="container">
        <Title title={t("lineup.title")} />
      </div>

      <TimetablesMenu t={t} lang={lang} active="all" />

      <div className="container">
        <LineupAll lang={lang} />
      </div>
    </main>
  )
}
