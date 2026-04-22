import Link from "next/link";

export default function Home() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-6">
        <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          BMW Islamabad, Pakistan
        </span>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Discover premium BMW models in{" "}
          <span className="text-blue-400">Islamabad</span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-300">
          Explore luxury sedans, SUVs, and performance vehicles with modern
          design, advanced engineering, and premium comfort in Islamabad,
          Pakistan.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Explore Cars
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="mb-6 text-2xl font-bold text-white">Why BMW Islamabad?</h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <h3 className="text-lg font-semibold text-blue-300">Luxury Range</h3>
            <p className="mt-1 text-gray-300">
              Premium BMW models for performance, comfort, and style.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="text-lg font-semibold text-white">Islamabad Location</h3>
            <p className="mt-1 text-gray-300">
              Tailored product listing for customers in Islamabad, Pakistan.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <h3 className="text-lg font-semibold text-cyan-300">Dynamic Pages</h3>
            <p className="mt-1 text-gray-300">
              Open each car on its own dedicated details page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}