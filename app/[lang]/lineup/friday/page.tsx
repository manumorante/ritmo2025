import { timetables } from "@/lib/data"
import { getDictionary } from "@/lib/i18n"
import { TimetablesPage, TimetablesMenu, Title, DoorTag } from "@/components"

export default async function Timetables({ params: { lang } }: { params: { lang: string } }) {
  const { t } = getDictionary(lang)

  return (
    <main className="Page Timetables Friday">
      <div className="header-flat" />
      <div className="container">
        <Title title={t("timetables.friday")} subtitle={t("timetables.title")} />
      </div>

      <TimetablesMenu t={t} lang={lang} active="friday" />

      <div className="md:hidden ml-3 mb-4">
        <DoorTag title={t("timetables.opening")} />
      </div>

      <TimetablesPage t={t} day={timetables.friday} />
    </main>
  )
}
