import { Button } from "@/components"

export default function Buy({ lang, t }: { lang: any; t: any }) {
  return (
    <Button href={`/${lang}/tickets`}>
      <div>{t("generic.buyTickets")}</div>
    </Button>
  )
}
