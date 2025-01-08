"use client"

import { useRef } from "react"
import { Button } from "@/components"
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
  const arrowY = useTransform(scrollYProgress, [0, 0.1], ["0%", "140%"])
  return (
    <section ref={sectionRef} className="relative h-svh flex flex-col justify-center">
      <motion.div className="absolute inset-0 bg-black" style={{ opacity: opacity }} />
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

        <Button href={`/${lang}/tickets`}>{button}</Button>
      </motion.div>

      <motion.div
        className="absolute w-full bottom-0 flex justify-center text-center p-5"
        style={{ y: arrowY }}
      >
        <svg
          className="animate-bounce w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
