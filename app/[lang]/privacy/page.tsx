import { Logo, PrivacyES, PrivacyEN } from "@/components"
import { getDictionary } from "@/util/dictionary"
import Link from "next/link"
export default async function Page({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { d, t } = getDictionary(lang)
  return (
    <>
      <div className="container">
        <Link href="/" className="block my-8 w-24 invert">
          <Logo />
        </Link>
        {lang === "es" ? <PrivacyES /> : <PrivacyEN />}
      </div>
    </>
  )
}
