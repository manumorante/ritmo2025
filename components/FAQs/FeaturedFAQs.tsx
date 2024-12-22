import cx from "clsx"
import FAQ from "./FAQ"

export default function FeaturedFAQs({ d, lang }: { d: any; lang: string }) {
  const secc = d.faqs.sections
  const faqs = [
    // Horarios
    {
      section: "site-and-schedule",
      id: "horfest",
      q: secc["site-and-schedule"].items.horfest.q,
      a: secc["site-and-schedule"].items.horfest.a,
    },

    // Bus
    {
      section: "site-and-schedule",
      id: "autobus",
      q: secc["site-and-schedule"].items.autobus.q,
      a: secc["site-and-schedule"].items.autobus.a,
    },

    // Parking
    {
      section: "site-and-schedule",
      id: "parking",
      q: secc["site-and-schedule"].items.parking.q,
      a: secc["site-and-schedule"].items.parking.a,
    },

    // Entradas en taquilla
    {
      section: "tickets",
      id: "puecom",
      q: secc.tickets.items.puecom.q,
      a: secc.tickets.items.puecom.a,
    },
  ]
  const faqsCx = cx(
    "FAQs",
    "flex gap-12",
    "snap-x xl:snap-none",
    "overflow-x-auto xl:overflow-x-visible",
    "px-7 xl:px-0"
  )

  return (
    <div className="xl:container">
      <div className={faqsCx}>
        {faqs.map((faq) => (
          <FAQ
            key={faq.id}
            q={faq.q}
            a={faq.a}
            href={`/${lang}/faqs#${faq.section}-${faq.id}`}
          />
        ))}
      </div>
    </div>
  )
}
