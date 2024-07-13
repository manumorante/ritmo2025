import { getDictionary } from "@/util/dictionary"
import { Map } from "@/components"

export default async function LocationPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  return (
    <main className="Location">
      <div className="container">
        <h2 className="pageTitle">{t("location.title")}</h2>
      </div>

      <div className="container">
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: t("location.large"),
          }}
        />
      </div>

      <div className="xl:container">
        <Map />
      </div>
    </main>
  )
}
