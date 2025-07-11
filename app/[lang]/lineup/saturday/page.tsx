import { timetables } from "@/lib/data"
import { getDictionary } from "@/lib/i18n"
import { TimetablesPage, TimetablesMenu, Title, DoorTag } from "@/components"

export default async function Timetables({ params: { lang } }: { params: { lang: string } }) {
  const { t } = getDictionary(lang)

  return (
    <main className="Page Timetables Saturday ">
      <div className="header-flat" />

      <div className="container">
        <Title title={t("timetables.saturday.day")} subtitle={t("timetables.title")} />
      </div>

      <div className="bg-gray/10">
        <TimetablesMenu t={t} lang={lang} active="saturday" />
        <div className="md:hidden ml-3 mb-4">
          <DoorTag title={t("timetables.saturday.opening")} />
        </div>

        <TimetablesPage t={t} day={timetables.saturday} />
      </div>
    </main>
  )
}
