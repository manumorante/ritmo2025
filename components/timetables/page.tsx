import cx from "clsx"
import { Stage, HourList } from "@/components"

export default function TimetablesPage({ t, day }: { t: any; day: any }) {
  const dayCx = cx("w-[calc(140vw+4rem)] sm:w-auto flex mb-8")

  return (
    <div className="md:container overflow-x-scroll">
      <div className={dayCx}>
        <HourList />
        <Stage title={t("stages.main")} artists={day.mordisco} />
        <Stage title={t("stages.second")} artists={day.latido} />
      </div>
    </div>
  )
}
