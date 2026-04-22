import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <section>
      <div className="mb-8">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          BMW Collection
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
          BMW Cars in Islamabad
        </h1>

        <p className="mt-3 text-lg text-gray-300">
          Browse our premium BMW models available for customers in Islamabad,
          Pakistan.
        </p>
      </div>

      <ProductList />
    </section>
  );
}