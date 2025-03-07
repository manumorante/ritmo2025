import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RITMO Festival",
  description: "Festival de música electrónica en plena naturaleza para un aforo muy reducido.",
  openGraph: {
    url: "https://ritmofestival.com",
    type: "website",
    title: "RITMO Festival",
    description: "Festival de música electrónica en plena naturaleza para un aforo muy reducido.",
    images: [
      {
        url: "/og-ritmo-festival.jpg",
        width: 800,
        height: 600,
        alt: "RITMO Festival",
      },
    ],
  },
}
