import Image from "next/image"

export default function HeroImage({ src }: { src: string }) {
  return (
    <div className="Hero relative">
      <Image
        className="w-full h-[45vh] sm:h-[500px] object-cover"
        src={src}
        width={1120}
        height={721}
        alt="Img"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 from-0% via-black/50 via-10% to-transparent to-100% " />
    </div>
  )
}
