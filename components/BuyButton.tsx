import { BtnPrimary } from "@/components"

export default function BuyButton({ t }: { t: any }) {
  return (
    <BtnPrimary href={t("tickets.link")} target="_blank">
      <div>{t("generic.buyTickets")}</div>
    </BtnPrimary>
  )
}
