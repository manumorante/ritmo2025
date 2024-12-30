import Image from "next/image"

export default function Partners() {
  return (
    <aside className="w-full py-16 bg-neutral-500">
      <div className="container">
        <div className="flex flex-wrap gap-5 sm:gap-10 items-center justify-center">
          <Image
            src="/logos/la-maquina-de-escribir-logo.png"
            alt="La máquina de escribir"
            className="w-16 h-auto"
            width={269}
            height={150}
          />
          <Image
            src="/logos/ayntamiento-atarfe-logo.png"
            alt="Ayuntamiento de Atarfe"
            className="w-28 h-auto"
            width={358}
            height={212}
          />
          <Image
            src="/logos/latido-logo.png"
            alt="Latido"
            className="w-24 h-auto"
            width={371}
            height={112}
          />
          <Image
            src="/logos/mordisco-logo.png"
            alt="Mordisco"
            className="w-28 h-auto"
            width={363}
            height={60}
          />
          <Image
            src="/logos/tickbox-logo.png"
            alt="Tickbox"
            className="w-20 h-auto"
            width={400}
            height={400}
          />
        </div>
      </div>
    </aside>
  )
}
