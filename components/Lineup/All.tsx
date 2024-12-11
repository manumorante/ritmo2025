import { getPublishedArtists } from "@/util/data"
import cx from "clsx"
import { Fragment } from "react"

export default function All() {
  const artists = getPublishedArtists()

  return (
    <div className="LineupAll text-3xl font-medium">
      {artists.map((artist: any, index: number) => (
        <Fragment key={artist.name}>
          {artist.name}

          {index < artists.length - 1 && (
            <span className="text-primary"> • </span>
          )}
        </Fragment>
      ))}
    </div>
  )
}
