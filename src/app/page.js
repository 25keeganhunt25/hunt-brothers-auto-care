export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605515298946-d062f2e9da53"
            className="w-full h-full object-cover opacity-40"
            alt="car detailing"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold">
            Hunt Brothers Auto Care LLC
          </h1>

          <p className="text-gray-300 mt-3">
            Luxury Auto Detailing • Springfield, MO
          </p>

          <a
            href="#booking"
            className="inline-block mt-6 bg-red-600 px-6 py-3 rounded-xl font-bold"
          >
            Book Appointment
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 text-center">
        <h2 className="text-3xl text-red-500 font-bold mb-10">
          Services & Pricing
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="border border-red-600 p-6 rounded-xl">
            Exterior Detail — Starting at $40
          </div>

          <div className="border border-red-600 p-6 rounded-xl">
            Interior Detail — Starting at $80
          </div>

          <div className="border border-red-600 p-6 rounded-xl">
            Full Detail — Starting at $150
          </div>

          <div className="border border-red-600 p-6 rounded-xl">
            Premium Detail — Starting at $225
          </div>

        </div>

        <div className="mt-10 text-gray-400">
          🐶 Dog hair removal available — starting at $25
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 px-6 bg-zinc-950 text-center">

        <h2 className="text-3xl text-red-500 font-bold mb-6">
          Schedule Your Detail
        </h2>

        <p className="text-gray-400 mb-8">
          Select your time below
        </p>

        <div className="max-w-4xl mx-auto border border-red-600 rounded-xl overflow-hidden">
          <iframe
            src="https://calendly.com/25keeganhunt25"
            width="100%"
            height="750"
          ></iframe>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 text-center">
        <p className="font-bold">(417) 507-4420</p>
        <p>hbpallc65@gmail.com</p>
        <p>Springfield, Missouri</p>
      </section>

    </main>
  );
}