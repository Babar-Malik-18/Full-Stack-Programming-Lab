import Link from "next/link";
import AccountSidebar from "@/components/AccountSidebar";
import EditAccountForm from "@/components/forms/EditAccountForm";

export default function EditAccountPage() {
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
        <span className="text-gray-700">Edit Account Information</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <AccountSidebar activeKey="edit-account" />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Edit Account Information
          </h1>
          <EditAccountForm />
        </div>
      </div>
    </main>
  );
}
