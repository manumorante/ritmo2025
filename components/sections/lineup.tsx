import { LineupAll } from "@/components"
export default function Lineup({ lang, t }: { lang: string; t: any }) {
  return (
    <div className="Lineup bg-white relative section -mt-[3rem]">
      <div className="text-center">
        <p className="sectionTitle">{t("lineup.title")}</p>
        <LineupAll lang={lang} />
      </div>
    </div>
  )
}
