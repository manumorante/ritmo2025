import { Button } from "@/components"
import { getDictionary } from "@/lib/i18n"
import Image from "next/image"
import type { Metadata } from "next"

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const { t } = getDictionary(lang)

  return {
    title: t("bus.title"),
    description: t("bus.intro"),
    robots: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
    openGraph: {
      title: t("bus.title"),
      description: t("bus.intro"),
      images: [
        {
          url: "/bus.jpg",
          width: 688,
          height: 393,
          alt: "Bus",
        },
      ],
    },
  }
}

export default async function BusPage({ params: { lang } }: { params: { lang: string } }) {
  const { t } = getDictionary(lang)

  return (
    <main className="Page Bus">
      <div className="header-flat" />

      <div className="container">
        <div className="max-w-md mx-auto">
          <Image
            className=" object-cover w-full"
            src="/bus.jpg"
            alt="Bus"
            width={688}
            height={393}
          />
          <h2
            className="text-primary text-4xl lg:text-6xl text-center mt-10 mb-6  mx-7"
            dangerouslySetInnerHTML={{ __html: t("bus.title") }}
          />

          <p
            className="text-xl mb-8"
            dangerouslySetInnerHTML={{
              __html: t("bus.intro"),
            }}
          />

          <div className="space-y-3">
            {Array.from({ length: 8 }, (_, i) => (
              <p
                key={i}
                className="text-xl"
                dangerouslySetInnerHTML={{ __html: t(`bus.p${i + 1}`) }}
              />
            ))}
          </div>

          <div className="mx-auto mt-12 flex justify-center">
            <Button href={t("tickets.bus")} target="_blank">
              <div>{t("generic.buyTickets")}</div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
