import { getDictionary } from "@/util/dictionary"
import { All, Title } from "@/components"
import { TimetablesMenu } from "@/components"

export default async function Timetables({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  return (
    <main className="Page Timetables">
      <div className="header-flat" />

      <div className="container">
        <Title title={t("lineup.title")} />
      </div>

      <TimetablesMenu t={t} lang={lang} active="all" />

      <div className="container">
        <All lang={lang} />
      </div>
    </main>
  )
}
