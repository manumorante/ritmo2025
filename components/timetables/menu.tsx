import cx from "clsx"
import DoorTag from "./door-tag"
import DayLink from "./day-link"

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
    "bg-neutral-200/90"
  )
  return (
    <div className={mainCx}>
      <div className="md:container">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 px-3">
            <DayLink
              title={t("timetables.all.day")}
              href={`/${lang}/lineup`}
              active={active === "all"}
            />
            <DayLink
              title={t("timetables.friday.day")}
              href={`/${lang}/lineup/friday`}
              active={active === "friday"}
            />
            <DayLink
              title={t("timetables.saturday.day")}
              href={`/${lang}/lineup/saturday`}
              active={active === "saturday"}
            />
          </div>
          {(active === "friday" || active === "saturday") && (
            <div className="hidden md:block">
              <DoorTag title={t(`timetables.${active}.opening`)} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
