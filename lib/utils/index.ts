export function getFAQById(data: any, id: string) {
  const sections = data.faqs.sections

  for (const sectionKey in sections) {
    const section = sections[sectionKey]
    const items = section.items

    if (items[id]) {
      return {
        section: sectionKey,
        question: items[id].q,
        answer: items[id].a,
      }
    }
  }

  return null
}
