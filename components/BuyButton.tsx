import { BtnPrimary } from "@/components"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"

export default function BuyButton({ t }: { t: any }) {
  return (
    <BtnPrimary
      href="https://entradastickbox.com/ritmo-2024/31225"
      target="_blank"
    >
      <ShoppingCartIcon className="w-6 h-6" />
      <div>{t("generic.buyTickets")}</div>
    </BtnPrimary>
  )
}
