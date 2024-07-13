export default function Map() {
  return (
    <div className="w-full h-[200px] sm:h-[400px] overflow-hidden mb-6">
      <iframe
        style={{ height: "100%", width: "100%", border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=Mirador+de+La+Ermita+de+los+Tres+Juanes,+18230+Atarfe,+Granada,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      />
    </div>
  )
}
