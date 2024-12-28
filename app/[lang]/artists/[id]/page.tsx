import { getDictionary } from "@/util/dictionary"
import { getArtistById } from "@/util/data"
import Image from "next/image"

export default async function Artists({
  params: { lang, id },
}: {
  params: { lang: string; id: string }
}) {
  const { t } = getDictionary(lang)
  const artist = getArtistById(id)

  return (
    <main>
      <div className="header-flat" />

      <div className="Artist">
        <div className="sticky top-20">
          <h1 className="inline-block text-primary text-4xl sm:text-5xl lg:text-7xl mb-4 mt-3 pl-5 pr-3 pt-1 bg-white/70 backdrop-blur-lg">
            {artist?.name && artist.name}
          </h1>
        </div>

        <div className="lg:flex lg:gap-8 lg:px-10">
          {/* Photo */}
          <div className="Photo flex-[1] mb-8">
            <Image
              src={`/artists/${id}/${id}.jpg`}
              alt={id}
              width={1000}
              height={500}
            />
          </div>

          <div className="Info flex-[1] px-5">
            {t(`artists.${id}.bio`) && (
              <div
                dangerouslySetInnerHTML={{ __html: t(`artists.${id}.bio`) }}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
