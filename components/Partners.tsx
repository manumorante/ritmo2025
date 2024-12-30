import Image from "next/image"

export default function Partners({ t }: { t: any }) {
  const partners = [
    {
      name: "Ayuntamiento de Atarfe",
      logo: "/logos/ayntamiento-atarfe-logo.png",
      width: 312,
      height: 177,
    },
    {
      name: "Radio 3",
      logo: "/logos/radio-3-logo.png",
      width: 261,
      height: 92,
    },
    {
      name: "Tickbox",
      logo: "/logos/tickbox-logo.png",
      width: 369,
      height: 80,
    },
    {
      name: "Mordisco Club",
      logo: "/logos/mordisco-club-logo.png",
      width: 384,
      height: 78,
    },
    {
      name: "La máquina de escribir",
      logo: "/logos/la-maquina-de-escribir-logo.png",
      width: 220,
      height: 96,
    },
    {
      name: "Latido",
      logo: "/logos/latido-logo.png",
      width: 313,
      height: 108,
    },
  ]
  return (
    <aside className="w-full py-16 bg-neutral-500">
      <div className="container">
        <p className="text-white">{t("generic.partners")}</p>
        <div className="flex flex-wrap items-center justify-between gap-5 sm:gap-10">
          {partners.map((partner, index) => (
            <Image
              className="w-auto h-auto"
              style={{ maxWidth: partner.width / 2 }}
              key={index}
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}
