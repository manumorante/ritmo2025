export default function Title({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <h2 className="text-2xl sm:text-3xl my-6">
      <span className="text-pink-500 font-medium">{title}</span>{" "}
      {subtitle && <span className="text-gray font-light">{subtitle}</span>}
    </h2>
  )
}
