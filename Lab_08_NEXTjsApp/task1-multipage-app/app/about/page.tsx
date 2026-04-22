export default function About() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          About This Project
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
          Precision in Every Section
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          This website is built for Lab 08 using Next.js. It demonstrates
          multi-page routing, reusable components, shared layout, and a luxury
          dark theme inspired by modern premium brand websites.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-300">Next.js</h2>
          <p className="mt-2 text-gray-300">
            Fast routing and modern frontend development structure.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <h2 className="text-xl font-semibold text-white">Clean Layout</h2>
          <p className="mt-2 text-gray-300">
            Reusable header and footer create a consistent premium experience.
          </p>
        </div>

        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-center">
          <h2 className="text-xl font-semibold text-cyan-300">Modern Design</h2>
          <p className="mt-2 text-gray-300">
            Strong contrast, luxury colors, and neat alignment throughout.
          </p>
        </div>
      </div>
    </section>
  );
}