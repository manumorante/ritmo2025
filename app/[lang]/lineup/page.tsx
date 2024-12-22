import { getDictionary } from "@/util/dictionary"
import { All } from "@/components"
import { TimetablesMenu, Title } from "@/components"

export default async function Timetables({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  return (
    <main className="Page Timetables">
      <div className="container">
        <Title title={t("lineup.title")} />
      </div>

      <TimetablesMenu t={t} lang={lang} active="all" />

      <div className="container">
        <All />
      </div>
    </main>
  )
}
