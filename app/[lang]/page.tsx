import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import { Logo } from "@/components"
import Link from "next/link"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { d, t } = getDictionary(lang)
  const headerCx = cx("Header", "fixed top-6 left-0 right-0 z-50")
  const videoCx = "w-screen h-screen object-cover"

  return (
    <>
      <div className={headerCx}>
        <div className="container">
          <div className="inline-block rounded-full backdrop-filter backdrop-blur-lg bg-neutral-400/20 px-6 py-3">
            <div className="flex gap-2">
              <Logo />
              <Link
                href="https://2024.ritmofestival.com"
                target="_blank"
                className="text-2xl text-pink-400 no-underline hover:underline"
              >
                2024
              </Link>
            </div>
          </div>
        </div>
      </div>

      <video
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        className={videoCx}
        poster="/hero.jpg"
      >
        <source
          src="/2024/ritmo24-summary-medium.mp4"
          type="video/mp4"
          media="(min-width: 601px)"
        />
        <source
          src="/2024/ritmo24-summary-small.mp4"
          type="video/mp4"
          media="(max-width: 600px)"
        />
      </video>
    </>
  )
}
