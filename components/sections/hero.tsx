"use client"

import { useRef } from "react"
import { Button } from "@/components"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import YouTube from "react-youtube"

const VIDEO_ID = "LZFcxjmSGSQ"

export default function HeroSection({
  lang,
  text,
  button,
}: {
  lang: string
  text: string
  button: string
}) {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "600px"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
  const arrowY = useTransform(scrollYProgress, [0, 0.1], ["0%", "140%"])

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: VIDEO_ID,
      controls: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1,
      origin: "https://ritmo2025.com",
      widget_referrer: "https://ritmo2025.com",
    },
  }

  return (
    <section ref={sectionRef} className="relative h-svh flex flex-col justify-center">
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: shouldReduceMotion ? 1 : opacity }}
      />
      {/* Video */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: shouldReduceMotion ? 0 : y }}>
        <motion.div
          className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2"
          style={{ scale: shouldReduceMotion ? 1 : 1.2 }}
        >
          <YouTube videoId={VIDEO_ID} opts={opts} className="w-full h-full" />
        </motion.div>
      </motion.div>
      {/* Text content */}
      <motion.div
        className="HeroContent container flex flex-col items-center text-center"
        style={{ y: shouldReduceMotion ? 0 : y }}
      >
        <p className="text-2xl text-white font-light mb-4">{text}</p>

        <Button href={`/${lang}/tickets`}>{button}</Button>
      </motion.div>

      <motion.div
        className="absolute w-full bottom-0 flex justify-center text-center p-5"
        style={{ y: shouldReduceMotion ? 0 : arrowY }}
      >
        <svg
          className="motion-safe:animate-bounce w-8 h-8 text-white"
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
