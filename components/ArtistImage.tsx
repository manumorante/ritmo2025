"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function ArtistImage({ src }: { src: string }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "1000px"])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Video */}
      <motion.div style={{ y }}>
        <Image
          src={src}
          className="w-full h-[80vh] object-cover object-center"
          alt=""
          width={1000}
          height={500}
        />
      </motion.div>
    </section>
  )
}
