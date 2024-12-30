import cx from "clsx"
import DoorTag from "./DoorTag"
import DayLink from "./DayLink"

export default function TimetablesMenu({
  t,
  lang,
  active,
}: {
  t: any
  lang: string
  active?: string
}) {
  const mainCx = cx(
    "TimetablesMenu",
    "sticky z-30 top-14 lg:top-16",
    "py-4 my-5 sm:my-6",
    "bg-neutral-200/60"
  )
  return (
    <div className={mainCx}>
      <div className="md:container">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 px-3">
            <DayLink
              title={t("timetables.all")}
              href={`/${lang}/lineup`}
              active={active === "all"}
            />
            <DayLink
              title={t("timetables.friday")}
              href={`/${lang}/lineup/friday`}
              active={active === "friday"}
            />
            <DayLink
              title={t("timetables.saturday")}
              href={`/${lang}/lineup/saturday`}
              active={active === "saturday"}
            />
          </div>
          <div className="hidden md:block">
            <DoorTag title={t("timetables.opening")} />
          </div>
        </div>
      </div>
    </div>
  )
}
