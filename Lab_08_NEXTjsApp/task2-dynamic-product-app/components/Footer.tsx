export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-lg font-semibold text-white">BMW Islamabad</h2>
          <p className="text-sm text-gray-400">
            Luxury performance cars in Islamabad, Pakistan
          </p>
        </div>

        <div className="text-sm text-gray-500">
          <p>© 2026 BMW Islamabad</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}