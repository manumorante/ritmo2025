export default function VideoHero({ className }: { className?: string }) {
  return (
    <video
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      poster="/2024/ritmo24-summary.jpg"
      className={className}
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
