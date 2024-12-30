"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HomeImage({ src }: { src: string }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  return (
    <section
      ref={sectionRef}
      className="h-[200px] lg:h-[700px] relative overflow-hidden max-w-xl mx-auto"
    >
      {/* Video */}
      <motion.img
        className="w-full h-auto object-cover object-center"
        src={src}
        style={{ y }}
        width={1000}
        height={500}
      ></motion.img>
    </section>
  )
}
