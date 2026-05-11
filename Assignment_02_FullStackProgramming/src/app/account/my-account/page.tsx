import Link from "next/link";
import AccountSidebar from "@/components/AccountSidebar";

export default function MyAccountPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">My Account</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <AccountSidebar activeKey="dashboard" />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            My Dashboard
          </h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              Hello, <strong>John Doe</strong>! From your My Account Dashboard
              you have the ability to view a snapshot of your recent account
              activity and update your account information. Select a link below
              to view or edit information.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Account Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-gray-600 mb-1">John Doe</p>
                <p className="text-sm text-gray-600 mb-3">johndoe@example.com</p>
                <div className="flex gap-3">
                  <Link
                    href="/account/edit-account"
                    className="text-sm text-red-600 hover:text-red-800 transition"
                  >
                    Edit
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-red-600 hover:text-red-800 transition"
                  >
                    Change Password
                  </Link>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Newsletter
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  You are currently not subscribed to any newsletter.
                </p>
                <Link
                  href="#"
                  className="text-sm text-red-600 hover:text-red-800 transition"
                >
                  Edit
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-800">Address Book</h2>
              <Link
                href="/account/edit-billing"
                className="text-sm text-red-600 hover:text-red-800 transition"
              >
                Manage Addresses
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Default Billing Address
                </h3>
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
                <Link
                  href="/account/edit-billing"
                  className="text-sm text-red-600 hover:text-red-800 transition inline-block mt-2"
                >
                  Edit Address
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Default Shipping Address
                </h3>
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
                <Link
                  href="/account/edit-shipping"
                  className="text-sm text-red-600 hover:text-red-800 transition inline-block mt-2"
                >
                  Edit Address
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Recent Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Order #
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Ship To
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Order Total
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { id: "100000011", date: "11/8/2014", total: "$10,055.00", status: "Pending" },
                    { id: "100000010", date: "10/15/2014", total: "$5,032.50", status: "Complete" },
                    { id: "100000009", date: "09/20/2014", total: "$8,750.00", status: "Complete" },
                  ].map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition">
                      <td className="py-3 px-4 text-red-600 font-semibold">{order.id}</td>
                      <td className="py-3 px-4 text-gray-600">{order.date}</td>
                      <td className="py-3 px-4 text-gray-600">John Doe</td>
                      <td className="py-3 px-4 text-gray-800 font-semibold text-right">
                        {order.total}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Link
                          href="/account/order-details"
                          className="text-sm text-red-600 hover:text-red-800 transition"
                        >
                          View Order
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
