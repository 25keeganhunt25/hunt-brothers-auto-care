export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-red-700 to-black py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hunt Brothers Auto Care LLC
        </h1>
        <p className="text-xl mb-8">
          Professional Auto Detailing in Springfield, Missouri
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#booking"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
          >
            Book Appointment
          </a>

          <a
            href="#pricing"
            className="border border-white px-6 py-3 rounded-lg"
          >
            View Pricing
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Bring Your Vehicle Back to Showroom Condition
        </h2>

        <p className="text-gray-300">
          We provide professional detailing services for cars, trucks, SUVs,
          and work vehicles throughout Springfield and surrounding communities.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-zinc-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
            Services & Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Basic Exterior Wash",
                price: "$40+",
                desc: "Hand wash, tire shine, windows cleaned",
              },
              {
                title: "Interior Detail",
                price: "$80+",
                desc: "Vacuum, dash, door panels, windows",
              },
              {
                title: "Full Detail",
                price: "$150+",
                desc: "Complete interior and exterior detail",
              },
              {
                title: "Premium Detail & Wax",
                price: "$225+",
                desc: "Full detail plus premium wax protection",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black border border-red-600 p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-red-500 text-xl my-2">{item.price}</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-black border border-red-600 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Add-On Services</h3>

            <ul className="space-y-2">
              <li>Dog Hair Removal — Starting at $25</li>
              <li>Heavy Stain Removal — Starting at $20</li>
              <li>Pet Odor Treatment — Starting at $30</li>
              <li>Engine Bay Cleaning — Starting at $40</li>
            </ul>

            <p className="text-sm text-gray-400 mt-4">
              Prices vary based on vehicle size and condition.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
            Schedule Your Detail
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

            <select
              name="service"
              className="w-full p-3 rounded text-black"
            >
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
              name="vehicle"
              rows="4"
              placeholder="Vehicle Information"
              className="w-full p-3 rounded text-black"
            />

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-zinc-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            Contact Us
          </h2>

          <p className="mb-2">📞 (417) 507-4420</p>
          <p className="mb-2">✉️ hbpallc65@gmail.com</p>
          <p>📍 Serving Springfield, Missouri & Surrounding Areas</p>
        </div>
      </section>
    </main>
  );
}