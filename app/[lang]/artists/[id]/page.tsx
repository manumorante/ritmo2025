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
  const playerOptions =
    "color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"

  return (
    <main className="Artist pb-16">
      <Image
        src={`/artists/${id}/${id}.jpg`}
        className="w-full relative z-0"
        alt={id}
        width={1000}
        height={500}
      />

      <div className="header-flat" />

      <div className="block sticky top-16 py-3  bg-white/80 backdrop-blur">
        <div className="container">
          <h1 className="text-primary font-light text-5xl sm:text-5xl lg:text-7xl my-0">
            {artist?.name && artist.name}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="lg:flex gap-8">
          <div className="lg:flex-[2] mb-6">
            {t(`artists.${id}.intro`).length > 45 && (
              <p className="lg:flex-[2] text-2xl lg:text-xl">
                {t(`artists.${id}.intro`)}
              </p>
            )}

            {artist?.session && (
              <div className="my-10">
                <iframe
                  width="100%"
                  height={166}
                  style={{ border: "0px" }}
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${artist?.session_id}&${playerOptions}`}
                />
              </div>
            )}
          </div>

          {t(`artists.${id}.bio`) && (
            <div
              className="lg:flex-[2] text-xl lg:text-xl px-4 lg:pl-6"
              dangerouslySetInnerHTML={{ __html: t(`artists.${id}.bio`) }}
            />
          )}
        </div>
      </div>
    </main>
  )
}
