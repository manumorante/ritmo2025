export default function Location({ t }: { t: any }) {
  return (
    <div className="Section py-20 lg:py-40 bg-white">
      <div className="container text-center">
        <div
          className="text-3xl text-primary text-center mb-4"
          dangerouslySetInnerHTML={{ __html: t("location.large") }}
        />
        <a
          target="_blank"
          className="no-underline"
          href="https://www.google.com/maps?ll=37.236176,-3.687694&z=15&t=m&hl=es-ES&gl=US&mapclient=embed&cid=7038520705456199891"
        >
          Google Maps →
        </a>
      </div>
    </div>
  )
}
