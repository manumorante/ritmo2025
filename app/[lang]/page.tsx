import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import { Footer, Logo } from "@/components"
import Link from "next/link"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { d, t } = getDictionary(lang)
  const headerCx = cx("Header", "fixed py-8 top-0 z-40 w-full")
  const videoCx = "w-full h-screen object-cover"

  return (
    <>
      <div className={headerCx}>
        <div className="container">
          <div className="flex gap-2">
            <div className="w-24">
              <Logo />
            </div>
            <Link
              href="https://2024.ritmofestival.com"
              target="_blank"
              className="text-2xl text-pink-400 no-underline hover:underline"
            >
              2024
            </Link>
          </div>

          <div
            className="ml-embedded w-[344px] mt-12 rounded-lg overflow-hidden"
            data-form="8Sa5YY"
          ></div>
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

      <Footer lang={lang} />
    </>
  )
}
