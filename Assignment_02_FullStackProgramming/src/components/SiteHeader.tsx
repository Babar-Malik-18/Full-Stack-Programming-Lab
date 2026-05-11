import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-white py-4 px-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-baseline gap-1 mb-3 md:mb-0">
          <span className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            HotSpring
          </span>
          <span className="text-lg md:text-xl text-gray-500">
            Portable Spas
          </span>
          <sup className="text-xs text-gray-400 border border-gray-400 rounded-full w-4 h-4 flex items-center justify-center ml-1">
            R
          </sup>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/shopping/cart"
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded"
          >
            <i className="fas fa-shopping-cart text-gray-600"></i>
            <div className="text-sm">
              <span className="font-semibold text-gray-700">My Cart:</span>
              <span className="text-gray-500">0 Items(s)</span>
            </div>
            <i className="fas fa-chevron-down text-xs text-gray-400 ml-1"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
