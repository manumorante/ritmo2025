import { LegalES, LegalEN } from "@/components"
export default async function Legal({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return (
    <main className="Page Legal">
      <div className="header-flat" />

      <div className="container">
        {lang === "es" ? <LegalES /> : <LegalEN />}
      </div>
    </main>
  )
}
