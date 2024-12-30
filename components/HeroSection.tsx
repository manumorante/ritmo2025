import BtnPrimary from "./BtnPrimary"

export default function HeroSection({ lang, t }: { lang: any; t: any }) {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      {/* Video */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/2024/ritmo24-summary.jpg"
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
      </div>

      {/* Text content */}
      <div className="HeroContent container flex flex-col items-center text-center">
        <p className="text-2xl text-white font-light mb-4">{t("about.text")}</p>

        <BtnPrimary href={`/${lang}/tickets`}>
          <div>{t("generic.buyTickets")}</div>
        </BtnPrimary>
      </div>
    </section>
  )
}
