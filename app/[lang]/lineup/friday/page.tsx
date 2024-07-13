import { timetables } from "@/util/data"
import { getDictionary } from "@/util/dictionary"
import { TimetablesPage, TimetablesMenu, Title, DoorTag } from "@/components"

export default async function Timetables({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  return (
    <>
      <div className="container">
        <Title
          title={t("timetables.friday")}
          subtitle={t("timetables.title")}
        />
      </div>

      <TimetablesMenu t={t} lang={lang} active="friday" />

      <div className="md:hidden ml-3 mb-4">
        <DoorTag title={t("timetables.opening")} />
      </div>

      <TimetablesPage t={t} day={timetables.friday} />
    </>
  )
}
