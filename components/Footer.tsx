import cx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { LocaleSwitcher } from "@/components"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"

export default function Footer({ lang }: { lang?: any }) {
  const mainCx = cx("Footer py-10", "lg:container")

  return (
    <div className={mainCx}>
      {/* Colaboradores */}
      <div className="bg-neutral-400 lg:rounded-md mb-10">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-4 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            src="/logos/la-maquina-de-escribir-logo.png"
            alt="La máquina de escribir"
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            width={400}
            height={400}
          />
          <Image
            src="/logos/ayntamiento-atarfe-logo.png"
            alt="Ayuntamiento de Atarfe"
            className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            width={400}
            height={400}
          />
          <Image
            src="/logos/latido-logo.png"
            alt="Latido"
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            width={400}
            height={400}
          />
          <Image
            src="/logos/mordisco-logo.png"
            alt="Mordisco"
            className="col-span-2 max-h-36 w-full object-contain lg:col-span-1"
            width={400}
            height={400}
          />
          <Image
            src="/logos/tickbox-logo.png"
            alt="Tickbox"
            className="col-span-2 col-start-2 max-h-28 w-full object-contain sm:col-start-auto lg:col-span-1"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="px-6">
        <div className="w-full flex justify-between items-center">
          {/* Social */}
          <div className="flex flex-wrap gap-5 content-center [&_a]:no-underline ">
            <Link
              href="https://www.instagram.com/ritmo_festival/"
              target="_blank"
            >
              <Instagram />
            </Link>

            <Link href="https://www.facebook.com/Ritmofestival" target="_blank">
              <Facebook />
            </Link>
          </div>

          {/* Languge */}
          <LocaleSwitcher lang={lang} />
        </div>

        <p className="text-gray my-6">Copyright © RITMO 2024</p>
      </div>
    </div>
  )
}
