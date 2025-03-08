import Link from "next/link"
import { getDictionary } from "@/lib/i18n"
import { Lang } from "@/components"
import Facebook from "./icons/facebook"
import Instagram from "./icons/instagram"

export default function Footer({ lang }: { lang?: any }) {
  const { t } = getDictionary(lang)

  return (
    <footer className="w-full py-8">
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          {/* FooterLinks */}
          <div className="FooterLinks flex gap-4 text-neutral-600 *:no-underline">
            <Link href={`/${lang}/privacy`} target="_blank">
              {t("generic.privacy")}
            </Link>

            <Link href={`/${lang}/legal`} target="_blank">
              {t("generic.legal")}
            </Link>
          </div>

          {/* SocialIcons */}
          <div className="SocialIcons flex items-center gap-4">
            <Lang className="text-neutral-600 no-underline font-bold mr-1" lang={lang} />

            <Link
              className="text-neutral-500"
              href="https://www.instagram.com/ritmo_festival/"
              target="_blank"
            >
              <Instagram />
            </Link>

            <Link
              className="text-neutral-500"
              href="https://www.facebook.com/Ritmofestival"
              target="_blank"
            >
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
