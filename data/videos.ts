type VideoProvider = "cloudinary" | "local" | "dropbox" | "github"
const VIDEO_PROVIDER: VideoProvider = "cloudinary"

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
  dropbox: {
    medium:
      "https://www.dropbox.com/scl/fi/gki0fwofdvc6d3gi4digd/ritmo24-summary-medium.mp4?rlkey=btc92rrpltnj11ujuz6woma1y&st=z55cl4ob&raw=1",
    small:
      "https://www.dropbox.com/scl/fi/u1czu15a8f3t3ykpp1i1a/ritmo24-summary-small.mp4?rlkey=aa99464d6rz20f3ld8jgq9be6&st=x2drcjoa&raw=1",
  },
  github: {
    medium:
      "https://raw.githubusercontent.com/manumorante/ritmo2025/main/public/2024/ritmo24-summary-medium.mp4",
    small:
      "https://raw.githubusercontent.com/manumorante/ritmo2025/main/public/2024/ritmo24-summary-small.mp4",
  },
}

// Exportamos solo las URLs del proveedor seleccionado
export const currentVideos = videos[VIDEO_PROVIDER]
