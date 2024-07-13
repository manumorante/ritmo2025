import { getPublishedArtists } from "@/util/data"
import cx from "clsx"

export default function All() {
  const artists = getPublishedArtists()
  const nameCx = cx("text-2xl md:text-3xl md:leading-10", "font-semibold")
  const dotCx = cx("text-5xl leading-[0] text-primary font-semibold")

  return (
    <div className="LineupAll flex flex-wrap gap-x-3 sm:gap-x-4">
      {artists.map((artist: any) => (
        <div className={nameCx} key={artist.name}>
          {artist.name}
          <span className={dotCx}>.</span>
        </div>
      ))}
    </div>
  )
}
