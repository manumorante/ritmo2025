import clsx from "clsx"
import Image from "next/image"

export default function Partners({ t }: { t: any }) {
  const partners = [
    {
      cat: t("generic.organizer"),
      alt: "La máquina de escribir",
      src: "/logos/la-maquina-de-escribir-logo.png",
      boxWidth: "w-[70px] lg:w-[90px]",
      width: 220,
      height: 96,
    },
    {
      cat: t("generic.partners"),
      alt: "Ayuntamiento de Atarfe",
      src: "/logos/ayntamiento-atarfe-logo.png",
      boxWidth: "w-[110px] lg:w-[130px]",
      width: 312,
      height: 177,
    },
    {
      alt: "Latido",
      src: "/logos/latido-logo.png",
      boxWidth: "w-[85px] lg:w-[110px]",
      width: 313,
      height: 108,
    },
    {
      alt: "Mordisco Club",
      src: "/logos/mordisco-club-logo.png",
      boxWidth: "w-[115px] lg:w-[140px]",
      width: 384,
      height: 78,
    },
    {
      alt: "Radio 3",
      src: "/logos/radio-3-logo.png",
      boxWidth: "w-[70px] lg:w-[90px]",
      width: 261,
      height: 92,
    },
    {
      cat: t("generic.ticketing"),
      alt: "Tickbox",
      src: "/logos/tickbox-logo.png",
      boxWidth: "w-[100px] lg:w-[110px]",
      width: 369,
      height: 80,
    },
  ]
  return (
    <aside className="w-full bg-neutral-600">
      <div className="md:container flex overflow-x-auto items-center gap-8 lg:gap-14 px-6 lg:justify-between">
        {partners.map((e) => {
          return (
            <div className={clsx("flex-none pt-6 h-[140px] relative", e.boxWidth)} key={e.src}>
              <span className="text-white uppercase text-sm absolute top-6">{e.cat}</span>
              <Image
                className="w-full h-full object-contain"
                alt={e.alt}
                src={e.src}
                width={e.width}
                height={e.height}
              />
            </div>
          )
        })}
      </div>
    </aside>
  )
}
