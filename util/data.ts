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

export function getMenuItems({ lang }: { lang: string }) {
  return _dictionary({ lang }).menu as Links
}

function _dictionary({ lang }: { lang: string }) {
  return lang === "es" ? esJSON : enJSON
}
