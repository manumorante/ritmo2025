import cx from "clsx"

export default function HeroDate() {
  const mainCx = cx(
    "HeroDate",
    "relative z-0",
    "w-full",
    "flex justify-center",
    "bg-white",
    "overflow-hidden"
    // "pointer-events-none"
  )

  const videoWrapCx = cx("z-0 relative flex justify-center")
  const videoCx = cx(
    "absolute top-0 left-0 w-full h-full object-cover bg-white"
  )

  const layerBlendCx = cx(
    "text-main mix-blend-lighten dark:mix-blend-darken",
    "pl-[2.6rem] pr-[2.6rem]",
    "bg-white flex items-center select-none",
    "font-black tracking-[-0.05em] leading-[0.8em]",
    "text-[10rem]",
    "sm:text-[16rem]",
    "md:text-[21rem]",
    "lg:text-[26rem]",
    "xl:text-[32rem]"
  )

  return (
    <div className={mainCx}>
      <div className={videoWrapCx}>
        <video
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          className={videoCx}
          poster="/hero.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className={layerBlendCx}>2024</div>
      </div>
    </div>
  )
}
