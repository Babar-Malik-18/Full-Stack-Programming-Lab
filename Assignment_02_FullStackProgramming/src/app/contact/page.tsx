import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Contact Us</span>
      </nav>

      <div className="bg-white shadow-sm rounded-lg border border-gray-100 mb-8">
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Contact Us
          </h1>
          <div className="border-t border-gray-200 pt-6 mt-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-sm text-gray-500 mb-2">* Required Fields</p>
                <ContactForm />
              </div>

              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Get In Touch</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-map-marker-alt text-red-600 mt-1"></i>
                      <div>
                        <p className="font-semibold text-gray-700">Address</p>
                        <p className="text-gray-500">
                          Your Address: Street
                          <br />
                          State &amp; Zip Code
                          <br />
                          City &amp; Country
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-phone-alt text-red-600 mt-1"></i>
                      <div>
                        <p className="font-semibold text-gray-700">Phone</p>
                        <p className="text-gray-500">888 - 201 - 8899</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-envelope text-red-600 mt-1"></i>
                      <div>
                        <p className="font-semibold text-gray-700">Email</p>
                        <p className="text-gray-500">service@yoursitename.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-clock text-red-600 mt-1"></i>
                      <div>
                        <p className="font-semibold text-gray-700">Working Hours</p>
                        <p className="text-gray-500">24/7 Customer Support</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <i className="fas fa-map text-4xl mb-2"></i>
                    <p className="text-sm">Map Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
