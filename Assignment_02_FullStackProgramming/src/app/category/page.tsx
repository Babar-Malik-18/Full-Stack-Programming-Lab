import Link from "next/link";

export default function CategoryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Category</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <aside className="lg:w-1/4">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <h3 className="bg-gray-100 font-bold text-sm px-4 py-3 border-b border-gray-200 tracking-wide">
              SHOP BY
            </h3>
            <div className="p-4">
              <h4 className="font-semibold text-sm text-gray-700 mb-3">
                Category
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-red-600 transition flex justify-between"
                  >
                    <span>Plug and Play 110 Volt</span>
                    <span className="text-gray-400">(12)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-red-600 transition flex justify-between"
                  >
                    <span>TV - Stereo Spas</span>
                    <span className="text-gray-400">(8)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-red-600 transition flex justify-between"
                  >
                    <span>Corner Spas</span>
                    <span className="text-gray-400">(5)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-red-600 transition flex justify-between"
                  >
                    <span>Portable Spas</span>
                    <span className="text-gray-400">(15)</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-200 p-4">
              <h4 className="font-semibold text-sm text-gray-700 mb-3">
                Price Range
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-red-600 transition">
                    $0 - $1,000
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition">
                    $1,000 - $3,000
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition">
                    $3,000 - $5,000
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition">
                    $5,000+
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-200 p-4">
              <h4 className="font-semibold text-sm text-gray-700 mb-3">Brand</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-red-600 transition">
                    HotSpring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition">
                    Caldera
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 transition">
                    Freeflow
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <section className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link href="#" className="category-card bg-blue-900 rounded-lg overflow-hidden shadow-lg block">
              <div className="h-40 overflow-hidden">
                <img
                  src="/assets/images/product-TV_THEATER_SPA.png"
                  alt="Plug and Play"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-white font-bold text-xs tracking-wide">
                  PLUG AND PLAY 110 VOLT
                </h3>
              </div>
            </Link>
            <Link href="#" className="category-card bg-teal-700 rounded-lg overflow-hidden shadow-lg block">
              <div className="h-40 overflow-hidden">
                <img
                  src="/assets/images/product-5-7_PERSON_SPA.png"
                  alt="TV Stereo Spas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-white font-bold text-xs tracking-wide">
                  TV - STEREO SPAS
                </h3>
              </div>
            </Link>
            <Link href="#" className="category-card bg-indigo-800 rounded-lg overflow-hidden shadow-lg block">
              <div className="h-40 overflow-hidden">
                <img
                  src="/assets/images/product-Barrier_Reef_158_Jet_TV-_Stereo_-_Home_Theater_Supter_Spa.png"
                  alt="Corner Spas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-white font-bold text-xs tracking-wide">
                  CORNER SPAS
                </h3>
              </div>
            </Link>
            <Link href="#" className="category-card bg-gray-800 rounded-lg overflow-hidden shadow-lg block">
              <div className="h-40 overflow-hidden">
                <img
                  src="/assets/images/product-Extra_Large_and_Deep__8_Person_158_Jet_Supper_Spa,_TV-Home_Thea.png"
                  alt="Portable Spas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-white font-bold text-xs tracking-wide">
                  PORTABLE SPAS
                </h3>
              </div>
            </Link>
          </div>

          <h2 className="text-lg font-bold text-gray-800 mb-4">Spas by Style</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "/assets/images/113152315_spa-566.png",
              "/assets/images/113152315_spa-566_copy.png",
              "/assets/images/113152315_spa-566_copy_2.png",
              "/assets/images/113152315_spa-566_copy_3.png",
              "/assets/images/product-5-7_PERSON_SPA.png",
              "/assets/images/product-TV_THEATER_SPA.png",
            ].map((image, index) => (
              <div key={`${image}-${index}`} className="product-card bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
                <div className="h-44 bg-gray-100 flex items-center justify-center">
                  <img
                    src={image}
                    alt="Spa Product"
                    className="max-h-full w-auto object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">
                    {index === 0
                      ? "Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets"
                      : index === 1
                        ? "Barrier Reef 158 Jet TV Home Theater Spa"
                        : index === 2
                          ? "Extra Large 8 Person 158 Jet Super Spa"
                          : index === 3
                            ? "Portable 6 Person Hot Tub with Stereo"
                            : index === 4
                              ? "5-7 Person Luxury Spa with LED Lights"
                              : "TV Theater Spa Premium Edition"}
                  </h4>
                  <p className="text-red-600 font-bold mb-2">
                    {index < 3 ? "$2,549.15" : index === 3 ? "$2,549.15" : index === 4 ? "$3,799.00" : "$5,499.00"}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">B22CS30SNSS</p>
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
        </section>
      </div>
    </main>
  );
}
