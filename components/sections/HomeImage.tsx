"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HomeImage({ src }: { src: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  return (
    <section ref={ref} className="h-[50vh] lg:h-[700px] relative overflow-hidden max-w-xl mx-auto">
      {/* Video */}
      <motion.img
        className="w-[160vw] h-[70vh] object-cover object-center max-w-[none]"
        src={src}
        style={{ y, x }}
        width={1000}
        height={500}
      ></motion.img>
    </section>
  )
}
