import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data";

export default function ProductList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1"
        >
          <div className="relative h-56 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                BMW Islamabad
              </span>
            </div>

            <h2 className="mb-3 text-2xl font-bold text-white">
              {product.title}
            </h2>

            <p className="mb-3 text-gray-300">{product.description}</p>

            <p className="mb-2 text-sm text-gray-400">{product.location}</p>

            <p className="mb-5 text-xl font-semibold text-blue-300">
              ${product.price.toLocaleString()}
            </p>

            <Link
              href={`/products/${product.id}`}
              className="inline-block rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}