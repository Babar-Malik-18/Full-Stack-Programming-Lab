import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Create New Account</span>
      </nav>

      <div className="bg-white shadow-sm rounded-lg border border-gray-100 mb-8">
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Create New Account
          </h1>
          <div className="border-t border-gray-200 pt-6 mt-4">
            <p className="text-sm text-gray-400 mb-6">* Required Fields</p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}
