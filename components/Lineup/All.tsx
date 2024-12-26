import Link from "next/link"

export default function All({ lang }: { lang: string }) {
  const Dot = () => (
    <div className="Dot hidden md:inline-block text-primary mx-2">•</div>
  )

  const Br = () => <div className="Br" />

  const Name = ({ children }: { children: React.ReactNode }) => (
    <span className="Name  block md:inline whitespace-nowrap">{children}</span>
  )

  const ID = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <Link
      // href={`${lang}/artists/${id}`}
      href="#"
      className="Name no-underline hover:text-primary inline whitespace-nowrap transition-colors duration-300"
    >
      {children}
    </Link>
  )

  return (
    <div className="Lineup text-3xl lg:text-4xl xl:text-5xl font-medium">
      <Name>
        <ID id="jass">JASSS</ID> <span className="text-[0.6em]">B2B</span>{" "}
        <ID id="john-talabot">JOHN TALABOT</ID>
      </Name>
      <Br />

      <Name>
        <ID id="kia">KIA</ID>
      </Name>
      <Dot />

      <Name>
        <ID id="lola-haro">LOLA HARO</ID>
      </Name>
      <Dot />

      <Name>
        <ID id="marco-shuttle">MARCO SHUTTLE</ID>
      </Name>
      <Br />

      <Name>
        <ID id="oma-totem">OMA TOTEM</ID>
      </Name>
      <Dot />

      <Name>
        <ID id="rootian">ROOTIAN</ID>
      </Name>
      <Dot />

      <Name>
        <ID id="sedef-adasi">SEDEF ADASÏ</ID>
      </Name>
      <Br />

      <Name>
        <ID id="systema">SYSTEMA</ID>
      </Name>
      <Dot />

      <Name>
        <ID id="tamarindo">TAMARINDO</ID>
      </Name>
      <Dot />

      <Name>
        <ID id="tornado-wallace">TORNADO WALLACE</ID>
      </Name>
    </div>
  )
}
