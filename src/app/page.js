export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-b from-red-700 to-black py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hunt Brothers Auto Care LLC
        </h1>

        <p className="text-xl text-gray-200 mb-6">
          Professional Auto Detailing in Springfield, Missouri
        </p>

        <p className="text-gray-300 mb-8">
          Interior • Exterior • Full Detail Services
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#booking" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold">
            Book Now
          </a>

          <a href="#pricing" className="border border-white px-6 py-3 rounded-lg">
            View Pricing
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Restore That Fresh, Clean Look
        </h2>

        <p className="text-gray-300">
          We provide high-quality detailing services for cars, trucks, SUVs,
          and work vehicles across Springfield and surrounding areas.
          Our goal is simple — make your vehicle look brand new again.
        </p>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-zinc-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
            Services & Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Basic Exterior Wash",
                price: "Starting at $40",
                desc: "Hand wash, tire shine, exterior windows cleaned"
              },
              {
                title: "Interior Detail",
                price: "Starting at $80",
                desc: "Vacuum, dashboard, door panels, interior windows"
              },
              {
                title: "Full Detail",
                price: "Starting at $150",
                desc: "Complete interior + exterior deep cleaning"
              },
              {
                title: "Premium Detail & Wax",
                price: "Starting at $225",
                desc: "Full detail + wax protection + shine enhancement"
              }
            ].map((s) => (
              <div key={s.title} className="border border-red-600 bg-black p-6 rounded-xl">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-red-500 font-semibold mt-2">{s.price}</p>
                <p className="text-gray-300 mt-2">{s.desc}</p>
              </div>
            ))}

          </div>

          {/* ADD ONS */}
          <div className="mt-10 border border-red-600 p-6 rounded-xl bg-black">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Add-On Services
            </h3>

            <ul className="space-y-2 text-gray-200">
              <li>🐶 Dog Hair Removal — Starting at $25</li>
              <li>🧼 Heavy Stain Removal — Starting at $20</li>
              <li>🚗 Pet Odor Treatment — Starting at $30</li>
              <li>🧽 Engine Bay Cleaning — Starting at $40</li>
            </ul>

            <p className="text-gray-400 text-sm mt-4">
              Final pricing may vary depending on vehicle size and condition.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
            Schedule Your Appointment
          </h2>

          <form
            action="https://formsubmit.co/hbpallc65@gmail.com"
            method="POST"
            className="space-y-4"
          >

            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full p-3 rounded text-black"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full p-3 rounded text-black"
            />

            <select name="service" className="w-full p-3 rounded text-black">
              <option>Basic Exterior Wash</option>
              <option>Interior Detail</option>
              <option>Full Detail</option>
              <option>Premium Detail & Wax</option>
            </select>

            <input
              type="date"
              name="date"
              required
              className="w-full p-3 rounded text-black"
            />

            <input
              type="time"
              name="time"
              required
              className="w-full p-3 rounded text-black"
            />

            <textarea
              name="notes"
              placeholder="Vehicle details + notes (dog hair, stains, etc.)"
              className="w-full p-3 rounded text-black"
              rows="4"
            />

            <button className="w-full bg-red-600 hover:bg-red-700 py-3 font-bold rounded">
              Request Booking
            </button>

          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-zinc-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Contact</h2>

        <p>📞 (417) 507-4420</p>
        <p>✉️ hbpallc65@gmail.com</p>
        <p>📍 Springfield, Missouri & Surrounding Areas</p>
      </section>

    </main>
  );
}