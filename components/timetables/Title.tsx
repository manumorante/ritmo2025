export default function Title({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-2xl sm:text-3xl my-6">
      <span className="text-primary">{title}</span>{" "}
      {subtitle && <span className="text-gray font-light">{subtitle}</span>}
    </div>
  )
}
