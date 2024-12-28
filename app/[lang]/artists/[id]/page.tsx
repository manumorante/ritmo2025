import { getDictionary } from "@/util/dictionary"
import { getArtistById } from "@/util/data"
import Image from "next/image"
import Link from "next/link"

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

      <div className="container">
        <h1 className=" text-primary text-4xl sm:text-5xl lg:text-7xl mb-5">
          {artist?.name && artist.name}
        </h1>

        {t(`artists.${id}.bio`) && (
          <div
            className=" text-2xl lg:text-xl"
            dangerouslySetInnerHTML={{ __html: t(`artists.${id}.bio`) }}
          />
        )}

        {artist?.session && (
          <p>
            <Link
              href={artist?.session}
              className="text-2xl text-primary no-underline"
            >
              SoundCloud →
            </Link>
          </p>
        )}
      </div>
    </main>
  )
}
