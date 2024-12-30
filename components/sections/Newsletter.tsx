export default function Newsletter({ lang, t }: { lang: string; t: any }) {
  return (
    <div className="py-16 bg-neutral-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 lg:items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t("newsletter.title")}</h3>
            <p className="text-xl mb-4 ">{t("newsletter.text")}</p>
          </div>
          <div
            className="ml-embedded w-full md:w-[460px] shrink-0"
            data-form={lang === "es" ? "qcWPXv" : "yT3TRe"}
          ></div>
        </div>
      </div>
    </div>
  )
}
