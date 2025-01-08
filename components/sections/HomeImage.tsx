"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HomeImage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section
      ref={ref}
      className="max-w-xl h-[60svh] md:h-[400px] lg:h-[580px] lg:mx-auto overflow-hidden bg-red-400 relative"
    >
      <motion.picture className="w-full absolute" style={{ marginTop: -50, y }}>
        <source media="(min-width: 768px)" srcSet="hero-lg.jpg" />
        <img src="hero-sm.jpg" />
      </motion.picture>
    </section>
  )
}
