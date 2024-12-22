import Image from "next/image"

export default function HeroImage({ src }: { src: string }) {
  return (
    <div className="xl:container">
      <Image
        className="w-full h-[200px] sm:h-[400px] object-cover mb-6"
        src={src}
        width={1120}
        height={721}
        alt="Img"
      />
    </div>
  )
}
