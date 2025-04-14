type VideoProvider = "cloudinary" | "local"
const VIDEO_PROVIDER: VideoProvider = "local"

const videos = {
  cloudinary: {
    medium:
      "https://res.cloudinary.com/nvzf/video/upload/v1743582350/ritmo/ritmo24-summary-medium.mp4",
    small:
      "https://res.cloudinary.com/nvzf/video/upload/v1743582810/ritmo/ritmo24-summary-small.mp4",
  },
  local: {
    medium: "/2024/ritmo24-summary-medium.mp4",
    small: "/2024/ritmo24-summary-small.mp4",
  },
}

// Exportamos solo las URLs del proveedor seleccionado
export const currentVideos = videos[VIDEO_PROVIDER]
