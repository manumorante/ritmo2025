import { getDictionary } from "@/util/dictionary"

export default async function TicketsPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)

  return (
    <main className="Tickets ">
      <div className="header-flat" />

      <div className="container">
        <h2 className="pageTitle">{t("generic.tickets")}</h2>
      </div>
      <div className="md:container">
        <iframe
          src="https://venta.enterticket.es/buy/?id=40440&amp;color=ec4899"
          id="etktfrm31225"
          width="100%"
          style={{ height: "1000px" }}
        ></iframe>
      </div>
    </main>
  )
}
