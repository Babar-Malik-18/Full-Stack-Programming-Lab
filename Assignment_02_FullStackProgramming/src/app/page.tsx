import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-white animate-on-scroll">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Premium Hot Tubs
              <br />&amp; Portable Spas
            </h1>
            <p className="text-gray-300 mb-6 text-lg">
              Experience luxury and relaxation with our top-of-the-line portable
              spas. Perfect for your home, designed for your comfort.
            </p>
            <Link
              href="/category"
              className="btn-red inline-block px-8 py-3 rounded font-semibold text-sm tracking-wide"
            >
              SHOP NOW
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/images/product-5-7_PERSON_SPA.png"
              alt="Featured Hot Tub Spa"
              className="max-w-full h-auto rounded-lg shadow-2xl animate-on-scroll"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            Shop By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            <Link
              href="/category"
              className="category-card bg-blue-900 rounded-lg overflow-hidden shadow-lg block animate-on-scroll"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/assets/images/product-TV_THEATER_SPA.png"
                  alt="TV Theater Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-sm tracking-wide">
                  PLUG AND PLAY 110 VOLT
                </h3>
              </div>
            </Link>
            <Link
              href="/category"
              className="category-card bg-blue-800 rounded-lg overflow-hidden shadow-lg block animate-on-scroll"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/assets/images/product-5-7_PERSON_SPA.png"
                  alt="5-7 Person Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-sm tracking-wide">
                  TV - STEREO SPAS
                </h3>
              </div>
            </Link>
            <Link
              href="/category"
              className="category-card bg-teal-700 rounded-lg overflow-hidden shadow-lg block animate-on-scroll"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/assets/images/product-Barrier_Reef_158_Jet_TV-_Stereo_-_Home_Theater_Supter_Spa.png"
                  alt="Corner Spas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-sm tracking-wide">
                  CORNER SPAS
                </h3>
              </div>
            </Link>
            <Link
              href="/category"
              className="category-card bg-indigo-900 rounded-lg overflow-hidden shadow-lg block animate-on-scroll"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/assets/images/product-Extra_Large_and_Deep__8_Person_158_Jet_Supper_Spa,_TV-Home_Thea.png"
                  alt="Portable Spas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-bold text-sm tracking-wide">
                  PORTABLE SPAS
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            Spas by Style
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/assets/images/product-5-7_PERSON_SPA.png",
                title: "Emerald Bay XL TV DVD Stereo Hot Tub",
                price: "$2,549.15",
              },
              {
                image: "/assets/images/product-TV_THEATER_SPA.png",
                title: "Barrier Reef 158 Jet TV Stereo Spa",
                price: "$3,199.00",
              },
              {
                image:
                  "/assets/images/product-Barrier_Reef_158_Jet_TV-_Stereo_-_Home_Theater_Supter_Spa.png",
                title: "Extra Large 8 Person 158 Jet Super Spa",
                price: "$4,299.00",
              },
              {
                image:
                  "/assets/images/product-Extra_Large_and_Deep__8_Person_158_Jet_Supper_Spa,_TV-Home_Thea.png",
                title: "Bosch 22 Cu. Ft Stainless Spa System",
                price: "$2,549.15",
              },
            ].map((product) => (
              <div
                key={product.title}
                className="product-card bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full w-auto object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">
                    {product.title}
                  </h4>
                  <p className="text-red-600 font-bold text-lg mb-3">
                    {product.price}
                  </p>
                  <Link
                    href="/product"
                    className="btn-navy block text-center text-sm py-2 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center bg-gray-50 rounded-lg p-8 shadow-sm animate-on-scroll">
            <div className="lg:w-1/2">
              <img
                src="/assets/images/product-Barrier_Reef_158_Jet_TV-_Stereo_-_Home_Theater_Supter_Spa.png"
                alt="Featured Spa"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-red-600 font-semibold text-sm tracking-wide">
                FEATURED PRODUCT
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
                Barrier Reef 158 Jet TV - Stereo - Home Theater Super Spa
              </h3>
              <p className="text-gray-600 mb-4">
                Experience the ultimate in luxury with our flagship hot tub
                featuring 158 jets, built-in TV, stereo system, and home theater
                capabilities. Perfect for entertaining guests or unwinding after
                a long day.
              </p>
              <ul className="text-gray-600 text-sm mb-6 space-y-2">
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>158
                  Powerful Hydro Jets
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>Built-in
                  TV &amp; Stereo System
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>8 Person
                  Seating Capacity
                </li>
                <li>
                  <i className="fas fa-check text-green-500 mr-2"></i>LED
                  Lighting Package
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-red-600">
                  $4,299.00
                </span>
                <Link
                  href="/product"
                  className="btn-navy px-6 py-3 rounded font-semibold text-sm"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-800">
            Customers Who Viewed This Item Also Viewed
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/assets/images/113152315_spa-566.png",
              "/assets/images/113152315_spa-566_copy.png",
              "/assets/images/113152315_spa-566_copy_2.png",
              "/assets/images/113152315_spa-566_copy_3.png",
            ].map((image, index) => (
              <div
                key={image}
                className="product-card bg-white rounded shadow p-4 text-center animate-on-scroll"
              >
                <img
                  src={image}
                  alt="Spa Product"
                  className="w-20 h-20 mx-auto object-contain mb-3"
                />
                <h5 className="text-xs font-semibold text-gray-700 mb-1">
                  Bosch 22 Cu. Ft Stainless Refrigerator
                </h5>
                <p className="text-red-600 font-bold text-sm">$2,549.15</p>
                <p className="text-gray-400 text-xs">B22CS30SNSS</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
