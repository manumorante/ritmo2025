"use client"

import cx from "clsx"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function LineupPage() {
  const images = [
    { id: "alexkassian", width: 800, height: 1000 },
    { id: "budino", width: 666, height: 1000 },
    { id: "iroaka", width: 1000, height: 1000 },
    { id: "marialatina", width: 673, height: 1000 },
    { id: "octoocta", width: 1497, height: 1000 },
    { id: "sendafatal", width: 667, height: 1000 },
    { id: "vladimirivkovic", width: 750, height: 1000 },
  ]

  const imgCx = cx("object-cover w-full h-full")

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="h-full"
      >
        {images.map((artist: any) => (
          <SwiperSlide key={artist.id}>
            <Image
              src={`/artists/${artist.id}.jpg`}
              alt="img"
              width={artist.width}
              height={artist.height}
              className={imgCx}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
