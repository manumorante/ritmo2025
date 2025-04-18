/* eslint-disable @next/next/no-img-element */
"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

export default function HomeImage() {
  const shouldReduceMotion = useReducedMotion()
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
      <motion.picture
        className="w-full absolute"
        style={{ marginTop: -50, y: shouldReduceMotion ? 0 : y }}
      >
        <source media="(min-width: 768px)" srcSet="hero-lg.jpg" />
        <img src="hero-sm.jpg" alt="" className="w-full h-full object-cover" />
      </motion.picture>
    </section>
  )
}
