import { getDictionary } from "@/lib/i18n"
import { getArtistById, getNextArtistById, getPreviousArtistById } from "@/lib/data"
import { Buy, ArtistImage } from "@/components"
import Link from "next/link"

export default async function Artists({
  params: { lang, id },
}: {
  params: { lang: string; id: string }
}) {
  const { t } = getDictionary(lang)
  const artist = getArtistById(id)
  const nextArtist = getNextArtistById(id)
  const previousArtist = getPreviousArtistById(id)
  const playerOptions =
    "color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"

  return (
    <main className="Artist pb-16">
      <ArtistImage src={`/artists/${id}/${id}.jpg`} />

      <div className="header-flat" />

      <div className="block sticky top-16 py-3  bg-white/80 backdrop-blur">
        <div className="container">
          <h1 className="text-primary font-light text-5xl sm:text-5xl lg:text-7xl my-0">
            {artist?.name && artist.name}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className=" mb-6">
          {t(`artists.${id}.intro`).length > 45 && (
            <p className="text-2xl lg:text-4xl mb-14 lg:mb-24">{t(`artists.${id}.intro`)}</p>
          )}

          <div className="max-w-lg mx-auto">
            {artist?.session && (
              <div className="mb-10">
                <iframe
                  width="100%"
                  height={166}
                  style={{ border: "0px" }}
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${artist?.session_id}&${playerOptions}`}
                />
              </div>
            )}

            {t(`artists.${id}.bio`) && (
              <div
                className="text-xl lg:text-xl px-4 "
                dangerouslySetInnerHTML={{ __html: t(`artists.${id}.bio`) }}
              />
            )}

            <div className="mt-16 flex justify-center">
              <Buy lang={lang} t={t} />
            </div>

            <div className="mt-16 flex justify-between items-center">
              <Link
                className="text-primary text-2xl no-underline"
                href={`/${lang}/artists/${previousArtist?.id}`}
              >
                ← {previousArtist?.name}
              </Link>

              <Link
                className="text-primary text-2xl no-underline"
                href={`/${lang}/artists/${nextArtist?.id}`}
              >
                {nextArtist?.name} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
