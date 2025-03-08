import cx from "clsx"

export default function Stage({
  title,
  artists,
}: {
  title: string
  artists: any[]
}) {
  const mainCx = cx("w-[70vw] sm:w-[44vw]")
  const lineupList = cx("flex flex-col")

  const titleCx = cx(
    "h-12 mx-1",
    "text-xl font-medium text-white",
    "text-pink-600 bg-pink-800/70 content-center text-center",
    "rounded-t-lg shadow-sm"
  )

  const duration = {
    0.5: "3rem", // h-12
    1: "6rem", // h-24
    1.5: "9rem", // h-36
    2: "12rem", // h-48
    3: "18rem", // h-72
  }

  return (
    <div className={mainCx}>
      <div className={titleCx}>{title}</div>

      <div className={lineupList}>
        {artists.map((artist: any) => (
          <div
            key={artist.name}
            className="group content-center text-center relative"
            style={{
              height: `${duration[artist.duration as keyof typeof duration]}`,
            }}
          >
            <div className="absolute inset-1 shadow-sm rounded content-center text-black bg-gradient-to-b from-white/80 to-white">
              <div className="text-neutral-700 text-xl md:text-2xl">
                {artist.name}
              </div>
              <div className="text-lg opacity-50">
                {artist.start}-{artist.end}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
