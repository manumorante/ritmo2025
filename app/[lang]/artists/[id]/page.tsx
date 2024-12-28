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
      <div className="Artist relative z-20">
        <div className="h-[4.8rem] -mb-[4rem] bg-white w-full sticky top-0 z-20"></div>

        <div className="Lineup bg-white relative section ">
          <div className="container">
            <p className="text-primary text-4xl sm:text-5xl lg:text-7xl">
              {artist?.name && artist.name}
            </p>
          </div>

          <div className="lg:flex gap-12">
            {/* Photo */}
            <div className="Photo flex-[1] mb-8">
              <Image
                src={`/artists/${id}/${id}.jpg`}
                alt={id}
                width={1000}
                height={500}
              />
            </div>

            <div className="flex-[2]">
              <div className="container">
                {t(`artists.${id}.bio`) && (
                  <div
                    dangerouslySetInnerHTML={{ __html: t(`artists.${id}.bio`) }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
