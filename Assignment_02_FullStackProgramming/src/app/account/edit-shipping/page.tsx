import Link from "next/link";
import AccountSidebar from "@/components/AccountSidebar";
import AddressForm from "@/components/forms/AddressForm";

export default function EditShippingPage() {
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
        <span className="text-gray-700">Edit Shipping Address</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <AccountSidebar activeKey="address-book" />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Edit Shipping Address
          </h1>
          <p className="text-sm text-gray-400 mb-6">* Required Fields</p>
          <AddressForm
            formId="editShippingForm"
            submitLabel="UPDATE ADDRESS"
            defaultValues={{
              firstName: "John",
              lastName: "Doe",
              email: "johndoe@example.com",
              phone: "123-456-7890",
              street: "18 Street Name",
              city: "City",
              state: "CA",
              zip: "12345",
              country: "US",
            }}
          />
        </div>
      </div>
    </main>
  );
}
