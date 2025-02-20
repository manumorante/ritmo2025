import cx from "clsx"
import { getDictionary } from "@/util/dictionary"
import { Button } from "@/components"
import Image from "next/image"

export default async function AccommodationPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const { t } = getDictionary(lang)
  const listCx = cx("list-disc list-outside ml-8 text-xl space-y-4")

  return (
    <main className="Page AccommodationCamp">
      {/* <HeroImage src="/camper.jpg" /> */}

      <div className="header-flat" />

      <div className="container">
        <div className="max-w-md mx-auto">
          <Image
            className=" object-cover w-full"
            src="/camper.jpg"
            alt="Camper"
            width={688}
            height={341}
          />
          <h2
            className="text-primary text-4xl lg:text-6xl text-center mt-10 mb-6  mx-7"
            dangerouslySetInnerHTML={{ __html: t("accommodation.camp.title") }}
          />

          <p
            className="text-xl mb-8"
            dangerouslySetInnerHTML={{
              __html: t("accommodation.camp.text"),
            }}
          />

          <div className="space-y-12">
            {[1, 2, 3, 4, 5].map((ruleNum) => (
              <div key={ruleNum}>
                <p className="text-primary text-3xl mb-5">
                  {t(`accommodation.camp.rules${ruleNum}.title`)}
                </p>
                <ul
                  className={listCx}
                  dangerouslySetInnerHTML={{
                    __html: t(`accommodation.camp.rules${ruleNum}.list`),
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex justify-center">
            <Button href={t("tickets.camp")} target="_blank">
              <div>{t("generic.buyTickets")}</div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
