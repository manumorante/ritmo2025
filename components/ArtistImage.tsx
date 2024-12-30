"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ArtistImage({ src }: { src: string }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Video */}
      <motion.img
        className="w-full max-w-xl mx-auto h-[500px] lg:h-[800px] object-cover object-center"
        src={src}
        style={{ y }}
        width={1000}
        height={500}
      ></motion.img>
    </section>
  )
}
