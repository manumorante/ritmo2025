import cx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/util/dictionary"
import { LocaleSwitcher } from "@/components"
import Facebook from "./icons/Facebook"
import Instagram from "./icons/Instagram"

export default function Footer({ lang }: { lang?: any }) {
  const { d, t } = getDictionary(lang)
  const mainCx = cx("Footer", "py-12 bg-neutral-900 text-white")

  return (
    <div className={mainCx}>
      <div className="container">
        <div className="w-full flex flex-col md:flex-row gap-12 justify-between items-center">
          {/* Colaboradores */}
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

          <div className="w-full md:w-auto flex flex-wrap gap-3 sm:gap-6 items-center justify-between">
            {/* Social */}
            <div className="flex flex-wrap gap-5 content-center [&_a]:no-underline ">
              <Link
                href="https://www.instagram.com/ritmo_festival/"
                target="_blank"
              >
                <Instagram />
              </Link>

              <Link
                href="https://www.facebook.com/Ritmofestival"
                target="_blank"
              >
                <Facebook />
              </Link>
            </div>

            {/* Languge */}
            <LocaleSwitcher lang={lang} />
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-5">
          <span className="text-white text-sm">© 2024 RITMO</span>

          <Link
            className="text-white text-sm"
            href={`/${lang}/privacy`}
            target="_blank"
          >
            {t("generic.privacy")}
          </Link>

          <Link
            className="text-white text-sm"
            href={`/${lang}/legal`}
            target="_blank"
          >
            {t("generic.legal")}
          </Link>

          {/* RITMO 2024 */}
          <Link
            className="text-white text-sm"
            href="https://2024.ritmofestival.com"
            target="_blank"
          >
            {t("generic.previousEdition")}
          </Link>
        </div>
      </div>
    </div>
  )
}
