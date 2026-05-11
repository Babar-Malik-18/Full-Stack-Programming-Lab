import Link from "next/link";

export default function TopBar() {
  return (
    <div className="top-bar py-2 px-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-600 text-xs sm:text-sm">
        <span>
          <i className="fas fa-phone-alt mr-1"></i> Call for Customer support:
          020 38989565
        </span>
        <nav className="flex gap-4 mt-1 sm:mt-0">
          <Link href="/auth/login" className="hover:text-red-600 transition">
            My Account
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="#" className="hover:text-red-600 transition">
            Wishlist
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/shopping/cart" className="hover:text-red-600 transition">
            To Checkout
          </Link>
        </nav>
      </div>
    </div>
  );
}
