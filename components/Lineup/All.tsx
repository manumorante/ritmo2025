import Link from "next/link"
import { getPublishedArtists } from "@/util/data"
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
    <div className="Lineup text-3xl lg:text-4xl xl:text-5xl font-medium">
      {artists.map((artist, index) => (
        <Fragment key={index}>
          <Link
            href={`${lang}/artists/${artist.id}`}
            className="Name no-underline md:hover:text-primary inline whitespace-nowrap transition-colors duration-200"
          >
            {artist.name}
          </Link>

          {artist.b2b && <span className="text-[0.6em]"> B2B </span>}
          {artist.br && <div className="Br" />}
          {!artist.b2b && !artist.br && <Dot />}
        </Fragment>
      ))}
    </div>
  )
}
