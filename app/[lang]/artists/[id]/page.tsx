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

        <div className="Lineup bg-white relative section lg:px-[20vw]">
          <div className="container">
            <p className="text-primary text-7xl">{t(`artists.${id}.name`)}</p>
            {t(`artists.${id}.bio`) && (
              <p dangerouslySetInnerHTML={{ __html: t(`artists.${id}.bio`) }} />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
