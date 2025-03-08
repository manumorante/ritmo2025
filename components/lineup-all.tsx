import Link from "next/link"
import { getPublishedArtists } from "@/lib/data"
import { Fragment } from "react"

export default function All({ lang }: { lang: string }) {
  const artists = getPublishedArtists()

  const Dot = () => (
    <>
      <div className="Dot hidden md:inline-block text-primary mx-2">•</div>
      <div className="Br block md:hidden" />
    </>
  )

  return (
    <div className="Lineup text-3xl lg:text-5xl xl:text-6xl font-medium">
      {artists.map((artist, index) => (
        <Fragment key={index}>
          {artist.id ? (
            <Link
              href={`${lang}/artists/${artist.id}`}
              className="Name uppercase no-underline md:hover:text-primary inline whitespace-nowrap transition-colors duration-200"
            >
              {artist.name}
            </Link>
          ) : (
            <span className="Name uppercase">{artist.name}</span>
          )}

          {artist.b2b && <span className="text-[0.6em]"> B2B </span>}
          {artist.br && <div className="Br" />}
          {!artist.b2b && !artist.br && <Dot />}
        </Fragment>
      ))}
    </div>
  )
}
