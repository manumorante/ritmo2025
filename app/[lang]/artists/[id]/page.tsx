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
    <main className="Artist pb-16">
      <Image
        src={`/artists/${id}/${id}.jpg`}
        className="w-full relative z-0"
        alt={id}
        width={1000}
        height={500}
      />

      <div className="header-flat" />

      <div className="block sticky top-16 py-3 text-primary text-4xl sm:text-5xl lg:text-7xl bg-white/80 backdrop-blur">
        <div className="container">{artist?.name && artist.name}</div>
      </div>

      <div className="container">
        <div className="lg:flex gap-8">
          {t(`artists.${id}.bio`) && (
            <div
              className="flex-[2] text-2xl lg:text-xl lg:pl-6"
              dangerouslySetInnerHTML={{ __html: t(`artists.${id}.bio`) }}
            />
          )}

          <div className="flex-[2] text-right">
            {artist?.session && (
              <iframe
                width="100%"
                height={166}
                style={{ border: "0px" }}
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${artist?.session_id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
