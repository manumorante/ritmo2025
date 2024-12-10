import { getPublishedArtists } from "@/util/data"
import cx from "clsx"
import { Fragment } from "react"

export default function All() {
  const artists = getPublishedArtists()
  const nameCx = cx("text-2xl md:text-3xl md:leading-10", "font-semibold")
  const dotCx = cx("text-3xl text-primary font-semibold")

  return (
    <div className="LineupAll flex flex-wrap gap-2 items-center">
      {artists.map((artist: any, index: number) => (
        <Fragment key={artist.name}>
          <span className={nameCx}>{artist.name}</span>
          {index < artists.length - 1 && <span className={dotCx}>•</span>}
        </Fragment>
      ))}
    </div>
  )
}
