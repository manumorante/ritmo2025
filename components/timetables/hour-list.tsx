import cx from "clsx"
type Props = {
  /* Hora de comienzo de la tabla */
  startHour: number

  /* Total de horas que se muestran en la tabla */
  totalHours: number
}

export default function HourList({ startHour, totalHours }: Props) {
  const mainCx = cx("w-16 sm:w-20")
  const nameCx = cx(
    "absolute h-8 -mt-4 right-2 sm:right-6",
    "text-primary text-sm font-medium sm:text-base leading-8"
  )
  const lineCx = cx("absolute bg-primary/80 w-6 h-0.5 top-1/2 right-2 sm:right-6")

  return (
    <div className={mainCx}>
      <div className="h-12" />
      {[...Array(totalHours)].map((_, index) => {
        const hour = (index + startHour) % 24
        const name = `${hour.toString().padStart(2, "0")}:00`

        return (
          <div key={index} className="h-24 relative">
            <div className={nameCx}>{name}</div>
            {index >= totalHours && <div className={lineCx} />}
          </div>
        )
      })}
    </div>
  )
}
