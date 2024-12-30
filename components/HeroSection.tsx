"use client"

import { useRef } from "react"
import BtnPrimary from "./BtnPrimary"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroSection({
  lang,
  text,
  button,
}: {
  lang: string
  text: string
  button: string
}) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "600px"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col justify-center"
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: opacity }}
      />

      {/* Video */}
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/2024/ritmo24-summary.jpg"
        >
          <source
            src="/2024/ritmo24-summary-medium.mp4"
            type="video/mp4"
            media="(min-width: 601px)"
          />
          <source
            src="/2024/ritmo24-summary-small.mp4"
            type="video/mp4"
            media="(max-width: 600px)"
          />
        </video>
      </motion.div>

      {/* Text content */}
      <motion.div
        className="HeroContent container flex flex-col items-center text-center"
        style={{ y }}
      >
        <p className="text-2xl text-white font-light mb-4">{text}</p>

        <BtnPrimary href={`/${lang}/tickets`}>{button}</BtnPrimary>
      </motion.div>
    </section>
  )
}
