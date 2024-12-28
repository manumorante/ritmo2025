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
      <div className="container relative z-10">
        <div className="h-[65px]" />

        <h2 className="pageTitle">{t("location.title")}</h2>

        <div
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: t("location.large"),
          }}
        />
      </div>

      <div className="w-screen h-screen">
        <iframe
          style={{
            height: "100%",
            width: "100%",
            border: 0,
            transform: "translate(0, 0)",
          }}
          src="https://www.google.com/maps/embed/v1/place?q=Mirador+de+La+Ermita+de+los+Tres+Juanes,+18230+Atarfe,+Granada,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
    </main>
  )
}
