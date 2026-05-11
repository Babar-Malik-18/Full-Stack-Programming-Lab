import Link from "next/link";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <nav className="breadcrumb py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-red-600">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700">Forgot Your Password</span>
      </nav>

      <div className="bg-white shadow-sm rounded-lg border border-gray-100 mb-8">
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Forgot Your Password?
          </h1>
          <div className="border-t border-gray-200 pt-6 mt-4 max-w-xl">
            <p className="text-sm text-gray-500 mb-4">
              Please enter your email address below. You will receive a link to
              reset your password.
            </p>
            <p className="text-sm text-gray-400 mb-6">* Required Fields</p>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </main>
  );
}
