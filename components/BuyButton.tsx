import { BtnPrimary } from "@/components"

export default function BuyButton({ lang, t }: { lang: any; t: any }) {
  return (
    <BtnPrimary href={`/${lang}/tickets`}>
      <div>{t("generic.buyTickets")}</div>
    </BtnPrimary>
  )
}
