import Image from "next/image";
import { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
            {product.category}
          </span>
          <span
            className={`text-xs font-semibold ${
              product.inStock ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <h2 className="line-clamp-1 text-lg font-bold text-slate-900">{product.name}</h2>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>

        <div className="flex items-center justify-between pt-1">
          <p className="text-xl font-extrabold text-brand">${product.price.toFixed(2)}</p>
          <button
            type="button"
            className="rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
