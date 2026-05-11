import Link from "next/link";
import ProductTabs from "@/components/ProductTabs";
import ProductGallery from "@/components/ProductGallery";
import PriceCalculator from "@/components/PriceCalculator";

export default function ProductPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/category" className="hover:text-red-600">
          Category
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Product Details</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="lg:w-3/4">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <ProductGallery />

            <div className="md:w-1/2">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400 text-sm">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-gray-400 text-sm">(24 reviews)</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-600">
                    Size/Seating Capacity
                  </span>
                  <span className="text-gray-700">77", 77", 32" / 6 Persons</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-600">Seating Design</span>
                  <span className="text-gray-700">Bucket, Lounge, Chair, Bench</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-600">
                    Water Capacity / Dry Weight
                  </span>
                  <span className="text-gray-700">305 Gallons / 573 lbs.</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-600">Number of Pumps</span>
                  <span className="text-gray-700">2 X 5HP</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-semibold text-gray-600">Electrical</span>
                  <span className="text-gray-700">5.5 KW Heavy Heater, 220V, 50 amp</span>
                </div>
              </div>
            </div>
          </div>

          <ProductTabs
            details={
              <>
                <h3 className="font-bold text-gray-800 mb-3">Product Details</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Energy Star Rated - No
                </p>
                <h4 className="font-bold text-gray-700 mt-4 mb-2">
                  The Hottub B22CS30SNS
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                  odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                  consequat auctor eu in elit. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  Mauris in erat justo. Nullam ac urna eu felis dapibus
                  condimentum sit amet a augue. Sed non neque elit. Sed ut
                  imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                  pharetra, erat sed fermentum feugiat, velit mauris egestas
                  quam, ut aliquam massa nisl quis neque.
                </p>
              </>
            }
            specs={
              <>
                <h3 className="font-bold text-gray-800 mb-4">Quick Specifications</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold text-gray-600 w-1/3">Model</td>
                      <td className="py-2 text-gray-700">Emerald Bay XL</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold text-gray-600">Jets</td>
                      <td className="py-2 text-gray-700">90</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold text-gray-600">Seating</td>
                      <td className="py-2 text-gray-700">6 Persons</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold text-gray-600">Dimensions</td>
                      <td className="py-2 text-gray-700">77" x 77" x 32"</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold text-gray-600">Water Capacity</td>
                      <td className="py-2 text-gray-700">305 Gallons</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold text-gray-600">Dry Weight</td>
                      <td className="py-2 text-gray-700">573 lbs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold text-gray-600">Pumps</td>
                      <td className="py-2 text-gray-700">2 x 5HP</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold text-gray-600">Electrical</td>
                      <td className="py-2 text-gray-700">
                        5.5 KW, 220V, 50 amp / ETL Certified
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            }
            accessories={
              <>
                <h3 className="font-bold text-gray-800 mb-4">Accessories</h3>
                <p className="text-sm text-gray-600">
                  Compatible accessories and add-ons are available for this
                  model. Contact us for details.
                </p>
              </>
            }
            reviews={
              <>
                <h3 className="font-bold text-gray-800 mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex text-yellow-400 text-sm mb-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="font-semibold text-sm text-gray-700">
                      Amazing quality!
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Great spa, very comfortable and easy to set up. Highly
                      recommend.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      - John D., December 2014
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex text-yellow-400 text-sm mb-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p className="font-semibold text-sm text-gray-700">
                      Good product
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Solid build quality and powerful jets. Delivery was fast.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      - Sarah M., November 2014
                    </p>
                  </div>
                </div>
              </>
            }
            qa={
              <>
                <h3 className="font-bold text-gray-800 mb-4">Questions &amp; Answers</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm text-gray-700">
                      <i className="fas fa-question-circle text-blue-500 mr-2"></i>
                      Does this model require a dedicated electrical circuit?
                    </p>
                    <p className="text-sm text-gray-500 ml-6 mt-1">
                      <i className="fas fa-comment text-green-500 mr-2"></i>
                      Yes, it requires a 220V, 50 amp dedicated circuit.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-700">
                      <i className="fas fa-question-circle text-blue-500 mr-2"></i>
                      What is the warranty period?
                    </p>
                    <p className="text-sm text-gray-500 ml-6 mt-1">
                      <i className="fas fa-comment text-green-500 mr-2"></i>
                      This model comes with a 5-year structural warranty.
                    </p>
                  </div>
                </div>
              </>
            }
          />

          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Customers Who Viewed This Item Also Viewed
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "/assets/images/113152315_spa-566.png",
                "/assets/images/113152315_spa-566_copy.png",
                "/assets/images/113152315_spa-566_copy_2.png",
                "/assets/images/113152315_spa-566_copy_3.png",
              ].map((image) => (
                <div key={image} className="product-card bg-white rounded shadow p-3 text-center">
                  <img
                    src={image}
                    alt="Spa"
                    className="w-16 h-16 mx-auto object-contain mb-2"
                  />
                  <h5 className="text-xs font-semibold text-gray-700 mb-1">
                    Bosch 22 Cu. Ft Stainless Refrigerator
                  </h5>
                  <p className="text-red-600 font-bold text-sm">$2,549.15</p>
                  <p className="text-gray-400 text-xs">B22CS30SNSS</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:w-1/4">
          <PriceCalculator />

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-800 mb-4">Download Resources</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition"
              >
                <i className="fas fa-file-pdf text-red-500"></i> Product Brochure
                (PDF)
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition"
              >
                <i className="fas fa-file-pdf text-red-500"></i> Installation
                Guide (PDF)
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
