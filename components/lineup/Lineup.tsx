import cx from "clsx"
import Image from "next/image"
export default function Lineup({ children }: { children?: any }) {
  const mainCx = cx("Lineup", " relative overflow-hidden py-8 md:py-24")

  const bgCx = cx(
    "absolute inset-0 z-0 w-full h-full",
    "invert dark:invert-0",
    "opacity-50"
  )

  return (
    <div className={mainCx}>
      <Image
        className={bgCx}
        src="/bg.jpg"
        width={1600}
        height={800}
        alt="Fondo"
      />
      <div className="container">
        <div className="relative z-10">{children}</div>
      </div>

      <div
        aria-hidden
        className="absolute z-20 top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-zinc-950"
      />
    </div>
  )
}
