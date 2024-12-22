import esJSON from "@/data/es.json"
import enJSON from "@/data/en.json"
import lineupJSON from "@/data/lineup.json"

const lineup = lineupJSON?.lineup
const previews = lineupJSON?.previews
export const timetables = lineupJSON?.timetables

const today = new Date()
const previewsDates = previews.filter((item) => new Date(item.date) <= today)
export const currentPreview = previewsDates?.length || 1

export type Artist = {
  name: string
  preview: number
}
export type Links = {
  title: string
  href: string
}[]

export function getPublishedArtists() {
  return lineup.filter((artist) => currentPreview >= artist.preview) as Artist[]
}

export function getMenuItems({ lang }: { lang: string }) {
  return _dictionary({ lang }).menu as Links
}

export function getSubMenuItems({ lang }: { lang: string }) {
  return _dictionary({ lang }).submenu as Links
}

export function getAllMenuItems({ lang }: { lang: string }) {
  return getMenuItems({ lang }).concat(getSubMenuItems({ lang }))
}

function _dictionary({ lang }: { lang: string }) {
  return lang === "es" ? esJSON : enJSON
}
