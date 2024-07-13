"use client"

import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Photos() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="h-full"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/photos/photo-${i + 1}.jpg`}
              alt="img"
              width={1500}
              height={1000}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
