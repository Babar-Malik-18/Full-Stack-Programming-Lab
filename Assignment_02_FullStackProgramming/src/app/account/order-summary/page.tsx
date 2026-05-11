import Link from "next/link";
import AccountSidebar from "@/components/AccountSidebar";

export default function OrderSummaryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/account/my-account" className="hover:text-red-600">
          My Account
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Order # 100000011</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <AccountSidebar activeKey="orders" />

        <div className="flex-1 min-w-0">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
            <i className="fas fa-check-circle text-green-500 text-4xl mb-3"></i>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Thank You for Your Order!
            </h1>
            <p className="text-sm text-gray-600">
              Your order has been placed successfully.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Order Number:</span>
                <p className="text-red-600 font-bold mt-1">100000011</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Order Date:</span>
                <p className="text-gray-600 mt-1">November 8, 2014</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Order Status:</span>
                <p className="mt-1">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                    Pending
                  </span>
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Order Total:</span>
                <p className="text-gray-800 font-bold text-lg mt-1">$10,055.00</p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Order Details
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Product
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      SKU
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">
                      Qty
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Price
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img src="/assets/images/113152315_spa-566.png" alt="Spa Product" className="w-16 h-16 object-cover rounded" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            5-7 Person 158 Jet Spa with Stereo System
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Color: Sterling Silver
                            <br />
                            Shell: Pearl
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">SPA-158-07</td>
                    <td className="py-3 px-4 text-center text-gray-600">1</td>
                    <td className="py-3 px-4 text-right text-gray-800 font-semibold">
                      $5,012.50
                    </td>
                    <td className="py-3 px-4 text-right text-gray-800 font-semibold">
                      $5,012.50
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img src="/assets/images/113152315_spa-566 copy.png" alt="Spa Product" className="w-16 h-16 object-cover rounded" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            TV Theater Spa - Premium Home Entertainment
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Color: Midnight Canyon
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">SPA-TV-01</td>
                    <td className="py-3 px-4 text-center text-gray-600">1</td>
                    <td className="py-3 px-4 text-right text-gray-800 font-semibold">
                      $5,012.50
                    </td>
                    <td className="py-3 px-4 text-right text-gray-800 font-semibold">
                      $5,012.50
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={4} className="py-3 px-4 text-right font-semibold text-gray-700">
                      Subtotal
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-gray-800">
                      $10,025.00
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="py-2 px-4 text-right text-gray-600">
                      Shipping &amp; Handling
                    </td>
                    <td className="py-2 px-4 text-right text-gray-600">$30.00</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td colSpan={4} className="py-3 px-4 text-right font-bold text-gray-800 text-base">
                      Grand Total
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-red-600 text-base">
                      $10,055.00
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Payment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Payment Method
                </h3>
                <p className="text-sm text-gray-600">
                  Credit Card (Visa ending in 4242)
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Bank Details for Wire Transfer
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bank Name: National Spa Bank
                  <br />
                  Account Name: HotSpring Portable Spas
                  <br />
                  Sort Code: 12-34-56
                  <br />
                  Account Number: 12345678
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Billing Address
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    John Doe
                    <br />
                    18 Street Name
                    <br />
                    City, State 12345
                    <br />
                    Country
                    <br />
                    T: 123-456-7890
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Shipping Address
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    John Doe
                    <br />
                    18 Street Name
                    <br />
                    City, State 12345
                    <br />
                    Country
                    <br />
                    T: 123-456-7890
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/account/my-account"
              className="btn-navy px-8 py-3 rounded font-semibold text-sm text-center"
            >
              BACK TO MY ACCOUNT
            </Link>
            <Link
              href="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded font-semibold text-sm text-center transition"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
