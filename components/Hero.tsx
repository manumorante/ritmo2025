export default function Hero() {
  return (
    <video
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      className="fixed top-0 left-0 w-full h-screen object-cover pointer-events-none"
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
  )
}
