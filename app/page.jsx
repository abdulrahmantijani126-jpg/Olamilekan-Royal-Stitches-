export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 text-black">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-yellow-200 to-yellow-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-red-900 leading-tight">
              Olamilekan Royal Stitches
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Premium tailoring and luxury men’s fashion designed
              with elegance, class, and perfect fitting.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://wa.me/2348110346087"
                className="bg-red-900 text-white px-6 py-3 rounded-2xl font-bold"
              >
                Book Now
              </a>

              <a
                href="tel:+2348110346087"
                className="border-2 border-red-900 text-red-900 px-6 py-3 rounded-2xl font-bold"
              >
                Call Us
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://placehold.co/700x700/png"
              alt="Fashion Design"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center text-red-900 mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Luxury Finishing",
              "Perfect Fitting",
              "Latest Native Styles",
              "Premium Fabrics",
              "Fast Delivery",
              "Professional Tailoring"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-red-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-red-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black">
            Ready To Upgrade Your Style?
          </h2>

          <p className="mt-6 text-lg text-yellow-100">
            Contact Olamilekan Royal Stitches today.
          </p>

          <a
            href="https://wa.me/2348110346087"
            className="inline-block mt-8 bg-yellow-400 text-red-900 px-8 py-4 rounded-2xl font-black"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
              }
