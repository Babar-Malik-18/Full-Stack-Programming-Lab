import ProductShowcase from "@/components/ProductShowcase";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="relative mb-10 overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-12 text-center text-white md:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_35%)]" />
          <h1 className="relative text-4xl font-black md:text-5xl">NextCommerce</h1>
          <p className="relative mx-auto mt-3 max-w-2xl text-violet-50">
            Discover premium products with a smooth, interactive shopping experience.
          </p>
        </header>

        <ProductShowcase products={products} />
      </div>
    </main>
  );
}
