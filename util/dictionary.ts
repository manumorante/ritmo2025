import en from "@/data/en.json"
import es from "@/data/es.json"
import { Locale } from "@/types"

type DictionaryValue = Record<string, unknown> | string | number | boolean | null | unknown[]

const dictionaries: Record<Locale, Record<string, DictionaryValue>> = { en, es }

function loadDictionary(locale: Locale = "es") {
  return dictionaries[locale] || dictionaries.es
}

function translate({ path, lang = "es" }: { path: string; lang: Locale }): string {
  const dictionary = loadDictionary(lang)
  const value = path.split(".").reduce<DictionaryValue>((acc, key) => {
    if (typeof acc === "object" && acc !== null) {
      return (acc as Record<string, DictionaryValue>)[key]
    }
    return path
  }, dictionary)
  return String(value ?? path)
}

function createTranslator(lang: Locale = "es") {
  return (path: string) => translate({ path, lang })
}

export function getDictionary(lang: string = "es") {
  const d = loadDictionary(lang as Locale)
  const t = createTranslator(lang as Locale)
  return { d, t }
}
