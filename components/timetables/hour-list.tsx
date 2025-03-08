import cx from "clsx"
export default function HourList() {
  const mainCx = cx("w-16 sm:w-20")
  const nameCx = cx(
    "absolute h-8 -mt-4 right-2 sm:right-6",
    "text-pink-700 text-sm font-medium sm:text-base leading-8"
  )
  const lineCx = cx(
    "absolute bg-pink-700/80 w-6 h-0.5 top-1/2 right-2 sm:right-6"
  )

  return (
    <div className={mainCx}>
      <div className="h-12"></div>
      {[...Array(12)].map((_, index) => {
        const hour = (index + 17) % 24
        const name = `${hour.toString().padStart(2, "0")}:00`
        return (
          <div key={index} className="h-24 relative">
            <div className={nameCx}>{name}</div>
            {index !== 11 && <div className={lineCx} />}
          </div>
        )
      })}
    </div>
  )
}
