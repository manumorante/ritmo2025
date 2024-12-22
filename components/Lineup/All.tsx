export default function All() {
  const Dot = () => (
    <div className="Dot hidden md:inline-block text-primary mx-2">•</div>
  )

  const Br = () => <div className="Br" />

  const Name = ({ children }: { children: React.ReactNode }) => (
    <span className="Name block md:inline whitespace-nowrap">{children}</span>
  )

  return (
    <div className="Lineup text-3xl lg:text-4xl xl:text-5xl font-medium">
      <Name>
        JASSS <span className="text-[0.6em]">B2B</span> JOHN TALABOT
      </Name>
      <Br />
      <Name>KIA</Name>
      <Dot />
      <Name>LOLA HARO</Name>
      <Dot />
      <Name>MARCO SHUTTLE</Name>
      <Br />
      <Name>OMA TOTEM</Name>
      <Name>ROOTIAN</Name>
      <Dot />
      <Name>SEDEF ADASÏ</Name>
      <Dot />
      <Name>SYSTEMA</Name>
      <Br />
      <Name>TAMARINDO</Name>
      <Dot />
      <Name>TORNADO WALLACE</Name>
    </div>
  )
}
