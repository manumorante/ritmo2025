import cx from "clsx"

export default function Stage({ title, artists }: { title: string; artists: any[] }) {
  const mainCx = cx("w-[70vw] sm:w-[44vw]")
  const lineupList = cx("flex flex-col")

  const titleCx = cx(
    "h-12 mx-1",
    "text-xl font-medium text-white",
    "text-pink-600 bg-primary content-center text-center",
    "rounded-t-lg shadow-sm"
  )

  const getBoxHeight = (duration: number) => {
    // Una hora es un bloque de 6rem
    const boxHeight = 6
    return duration * boxHeight + "rem"
  }

  return (
    <div className={mainCx}>
      <div className={titleCx}>{title}</div>

      <div className={lineupList}>
        {artists.map((artist: any) => (
          <div
            key={artist.name}
            className="group content-center text-center relative"
            style={{ height: getBoxHeight(artist.duration) }}
          >
            {artist.name !== "" && (
              <div
                className={cx(
                  "absolute inset-1 shadow-lg rounded content-center",
                  "text-black bg-gradient-to-b from-white/80 to-white",
                  "md:hover:shadow-xl md:hover:ring-2 md:hover:ring-primary",
                  "md:transition-all"
                )}
              >
                <div className="text-neutral-700 text-xl md:text-2xl">{artist.name}</div>
                <div className="text-lg opacity-50">
                  {artist.start}-{artist.end}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
