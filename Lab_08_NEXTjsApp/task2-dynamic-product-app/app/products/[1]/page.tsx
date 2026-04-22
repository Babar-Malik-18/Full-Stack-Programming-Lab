import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl">
        <h1 className="text-3xl font-bold text-white">Product not found</h1>
        <p className="mt-3 text-gray-300">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            BMW Islamabad
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
            {product.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            {product.description}
          </p>

          <p className="mt-4 text-base text-gray-400">
            Location: {product.location}
          </p>

          <p className="mt-6 text-2xl font-semibold text-blue-300">
            ${product.price.toLocaleString()}
          </p>

          <div className="mt-8">
            <Link
              href="/products"
              className="rounded-md border border-gray-600 px-6 py-3 font-medium text-gray-200 transition hover:border-white hover:bg-white hover:text-black"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}