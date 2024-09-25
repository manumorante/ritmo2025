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
  const headerCx = cx("Header", "absolute py-8 top-0 z-40 w-full h-screen")
  const videoCx = "w-full h-screen object-cover"

  return (
    <>
      <div className={headerCx}>
        <div className="container">
          <div className="flex flex-col justify-between">
            <div className="flex gap-2">
              <div className="w-24">
                <Logo />
              </div>
              <span className="text-2xl text-pink-400">2025</span>
            </div>

            <div
              className="ml-embedded mt-10 w-[344px] rounded-lg overflow-hidden"
              data-form="8Sa5YY"
            ></div>
          </div>
        </div>
      </div>

      <video muted loop autoPlay playsInline preload="auto" className={videoCx}>
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
