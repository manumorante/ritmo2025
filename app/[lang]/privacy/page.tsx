import { PrivacyES, PrivacyEN } from "@/components"
export default async function Privacy({
  params: { lang },
}: {
  params: { lang: string }
}) {
  return (
    <main className="Page Privacy">
      <div className="header-flat" />

      <div className="container">
        {lang === "es" ? <PrivacyES /> : <PrivacyEN />}
      </div>
    </main>
  )
}
