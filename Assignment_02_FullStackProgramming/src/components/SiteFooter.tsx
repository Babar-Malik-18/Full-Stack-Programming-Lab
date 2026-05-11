import Link from "next/link";
import NewsletterForm from "./forms/NewsletterForm";

export default function SiteFooter() {
  return (
    <footer className="site-footer text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              CONTACT US
            </h4>
            <p className="text-sm mb-2">yoursitename.com</p>
            <p className="text-sm mb-2">CALL 24/7: 888 - 201 - 8899</p>
            <p className="text-sm leading-relaxed">
              Your Address: Street
              <br />
              State &amp; Zip Code
              <br />
              City &amp; Country
            </p>
            <p className="text-sm mt-2">Email: service@yoursitename.com</p>
            <div className="flex gap-3 mt-4">
              <Link
                href="#"
                className="w-8 h-8 bg-gray-600 hover:bg-red-600 rounded flex items-center justify-center transition"
              >
                <i className="fab fa-facebook-f text-white text-xs"></i>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-600 hover:bg-red-600 rounded flex items-center justify-center transition"
              >
                <i className="fab fa-twitter text-white text-xs"></i>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              INFORMATION
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Search Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              MY ACCOUNT
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/auth/login"
                  className="text-gray-300 hover:text-white"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping/cart"
                  className="text-gray-300 hover:text-white"
                >
                  View Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
              SIGNUP FOR A NEWSLETTER
            </h4>
            <p className="text-sm mb-3">Sign up for our newsletter:</p>
            <NewsletterForm />
            <div className="mt-6">
              <h5 className="text-white font-bold text-sm mb-2 tracking-wide">
                PAYMENT SOLUTIONS
              </h5>
              <img
                src="/assets/images/payment-options.png"
                alt="Payment Options"
                className="h-8 object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-gray-600 text-center py-4 text-sm">
        &copy; 2014 Hottubspaservice.com. All Rights Reserved.
      </div>
    </footer>
  );
}
