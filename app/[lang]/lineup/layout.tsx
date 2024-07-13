import Image from "next/image"

export default async function Root({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Image
        className="fixed inset-0 -z-10 w-full h-full opacity-10"
        src="/bg.jpg"
        width={1600}
        height={800}
        alt="Fondo"
      />

      {children}
    </>
  )
}
