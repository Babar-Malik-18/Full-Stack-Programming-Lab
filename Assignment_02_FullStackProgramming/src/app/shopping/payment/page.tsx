import Link from "next/link";
import PaymentForm from "@/components/forms/PaymentForm";

export default function PaymentPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/shopping/cart" className="hover:text-red-600">
          Shopping Cart
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Checkout</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Checkout
      </h1>

      <div className="flex items-center justify-center gap-0 mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <span className="ml-2 text-sm font-semibold text-red-600 hidden sm:inline">
            Billing Address
          </span>
        </div>
        <div className="w-12 md:w-24 h-px bg-gray-300 mx-2"></div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <span className="ml-2 text-sm font-semibold text-gray-500 hidden sm:inline">
            Payment Details
          </span>
        </div>
        <div className="w-12 md:w-24 h-px bg-gray-300 mx-2"></div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <span className="ml-2 text-sm font-semibold text-gray-500 hidden sm:inline">
            Review Order
          </span>
        </div>
      </div>

      <PaymentForm />
    </main>
  );
}
