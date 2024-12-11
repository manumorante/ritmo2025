import Image from "next/image"
import ritmoLogo from "../public/ritmo-logo.png"

export default function Logo() {
  return <Image src={ritmoLogo} alt="Ritmo" className="invert" />
}
