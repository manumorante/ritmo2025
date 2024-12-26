import { getDictionary } from "@/util/dictionary"

export default async function Artists({
  params: { lang, id },
}: {
  params: { lang: string; id: string }
}) {
  const { d, t } = getDictionary(lang)

  return (
    <main>
      <div className="Artist relative z-20">
        <div className="h-[4.8rem] -mb-[4rem] bg-white w-full sticky top-0 z-20"></div>

        <div className="Lineup bg-white relative section">
          <div className="container">
            <p className="text-primary text-xl">{id}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
