import en from "@/data/en.json"
import es from "@/data/es.json"

type Locale = "en" | "es"
type Dictionary = Record<string, any>

const dictionaries: Record<Locale, Dictionary> = { en, es }

function loadDictionary(locale: Locale = "es"): Dictionary {
  return dictionaries[locale] || dictionaries.es
}

function translate({ path, lang = "es" }: { path: string; lang: Locale }): string {
  const dictionary = loadDictionary(lang)
  const value = path.split(".").reduce((acc, key) => acc?.[key], dictionary) ?? path
  return String(value)
}

function createTranslator(lang: Locale = "es") {
  return (path: string) => translate({ path, lang })
}

export function getDictionary(lang: string = "es") {
  const d = loadDictionary(lang as Locale)
  const t = createTranslator(lang as Locale)
  return { d, t }
}
