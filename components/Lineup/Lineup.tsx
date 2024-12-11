export default function Lineup({ children }: { children?: any }) {
  return (
    <div className="Lineup bg-white relative overflow-hidden py-12 md:py-24">
      <div className="container">
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
