import enJSON from "@/data/en.json"
import esJSON from "@/data/es.json"

const _getDictionary = (lang: string = "es"): any =>
  ({ en: enJSON, es: esJSON }[lang])

const translate = ({ path, lang = "es" }: { path: string; lang: string }) => {
  const text = path
    .split(".")
    .reduce((acc, key) => acc?.[key], _getDictionary(lang))
  return text ?? path
}

const _getT = (lang: string = "es") => {
  return (path: string) => translate({ path, lang })
}

export const getDictionary = (lang: string = "es") => {
  const d = _getDictionary(lang)
  const t = _getT(lang)
  return { d, t }
}
