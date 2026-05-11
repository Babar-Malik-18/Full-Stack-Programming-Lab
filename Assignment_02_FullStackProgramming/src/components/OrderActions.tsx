"use client";

export default function OrderActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="/account/my-account" className="btn-navy px-8 py-3 rounded font-semibold text-sm text-center">
        BACK TO MY ACCOUNT
      </a>
      <button
        type="button"
        onClick={() => window.print()}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded font-semibold text-sm transition"
      >
        PRINT ORDER
      </button>
    </div>
  );
}
