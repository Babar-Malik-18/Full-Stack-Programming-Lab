import Link from "next/link";
import CartTable from "@/components/CartTable";

export default function CartPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Shopping Cart</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Shopping Cart
      </h1>

      <CartTable />

      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
          Customers Who Viewed This Item Also Viewed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "/assets/images/113152315_spa-566 copy_2.png",
            "/assets/images/113152315_spa-566 copy_3.png",
            "/assets/images/product-5-7_PERSON_SPA.png",
            "/assets/images/product-TV_THEATER_SPA.png",
          ].map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="product-card bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href="/product">
                <img src={image} alt="Spa" className="w-full h-48 object-cover" />
              </Link>
              <div className="p-4">
                <Link
                  href="/product"
                  className="font-semibold text-gray-800 hover:text-red-600 transition text-sm block mb-2"
                >
                  {index === 0
                    ? "Barrier Reef 158 Jet TV Stereo Home Theater Super Spa"
                    : index === 1
                      ? "Extra Large and Deep 8 Person 158 Jet Super Spa"
                      : index === 2
                        ? "5-7 Person Portable Spa with Stereo System"
                        : "TV Theater Spa Premium Entertainment System"}
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  <i className="fas fa-star text-yellow-400 text-xs"></i>
                  <i className="fas fa-star text-yellow-400 text-xs"></i>
                  <i className="fas fa-star text-yellow-400 text-xs"></i>
                  <i className="fas fa-star text-yellow-400 text-xs"></i>
                  <i className="far fa-star text-gray-300 text-xs"></i>
                </div>
                <p className="text-red-600 font-bold">$5,012.50</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
