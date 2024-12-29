import esJSON from "@/data/es.json"
import enJSON from "@/data/en.json"
import lineupJSON from "@/data/lineup.json"

const lineup = lineupJSON?.lineup
export const timetables = lineupJSON?.timetables

export type Artist = {
  id: string
  name: string
  b2b?: boolean
  br?: boolean
}
export type Links = {
  title: string
  href: string
}[]

export function getPublishedArtists() {
  return lineup as Artist[]
}

export function getArtistById(id: string) {
  return lineup.find((artist) => artist.id === id)
}

export function getNextArtistById(id: string) {
  const index = lineup.findIndex((artist) => artist.id === id)
  return lineup[index + 1] || lineup[0]
}

export function getPreviousArtistById(id: string) {
  const index = lineup.findIndex((artist) => artist.id === id)
  return lineup[index - 1] || lineup[lineup.length - 1]
}

export function getMenuItems({ lang }: { lang: string }) {
  return _dictionary({ lang }).menu as Links
}

function _dictionary({ lang }: { lang: string }) {
  return lang === "es" ? esJSON : enJSON
}
