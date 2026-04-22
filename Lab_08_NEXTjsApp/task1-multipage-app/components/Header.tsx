import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-white">
            BMW Islamabad
          </h1>
          <p className="text-sm text-gray-400">Premium Next.js Lab Project</p>
        </div>

        <nav className="flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:bg-[#1c1c1c] hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}