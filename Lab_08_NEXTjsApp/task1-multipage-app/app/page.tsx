import Link from "next/link";

export default function Home() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-6">
        <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          Premium Web Experience
        </span>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Elegant. Powerful. <span className="text-blue-400">Modern.</span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-300">
          A premium multi-page Next.js website inspired by luxury automotive
          design. Clean layout, refined colors, strong alignment, and modern
          UI styling without unnecessary clutter.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Explore About
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition hover:border-white hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="mb-6 text-2xl font-bold text-white">Why This Design?</h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <h3 className="text-lg font-semibold text-blue-300">Luxury Feel</h3>
            <p className="mt-1 text-gray-300">
              Dark background with premium blue highlights for a bold modern look.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="text-lg font-semibold text-white">Perfect Alignment</h3>
            <p className="mt-1 text-gray-300">
              Balanced spacing, centered content, and clean visual hierarchy.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <h3 className="text-lg font-semibold text-cyan-300">Modern Styling</h3>
            <p className="mt-1 text-gray-300">
              Interactive buttons, smooth sections, and a professional lab-ready finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}