"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";

type ProductShowcaseProps = {
  products: Product[];
};

type SortValue = "featured" | "price-low" | "price-high" | "name";

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortValue>("featured");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...uniqueCategories];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const searched = products.filter((product) => {
      const searchText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesStock = !showInStockOnly || product.inStock;
      return matchesQuery && matchesCategory && matchesStock;
    });

    if (sortBy === "price-low") return searched.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") return searched.sort((a, b) => b.price - a.price);
    if (sortBy === "name")
      return searched.sort((a, b) => a.name.localeCompare(b.name));

    return searched;
  }, [products, query, selectedCategory, showInStockOnly, sortBy]);

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-violet-100 bg-white/80 p-4 shadow-sm backdrop-blur md:p-5">
        <div className="grid gap-3 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
          />

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortValue)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>

          <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={(event) => setShowInStockOnly(event.target.checked)}
              className="h-4 w-4 accent-violet-600"
            />
            Show in-stock only
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                selectedCategory === category
                  ? "bg-violet-600 text-white"
                  : "bg-violet-50 text-violet-700 hover:bg-violet-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-600">
        <p>
          Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span>{" "}
          of {products.length} products
        </p>
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setSelectedCategory("All");
            setShowInStockOnly(false);
            setSortBy("featured");
          }}
          className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium transition hover:bg-slate-200"
        >
          Reset Filters
        </button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-10 text-center">
          <h3 className="text-lg font-semibold text-slate-900">No products found</h3>
          <p className="mt-1 text-sm text-slate-600">
            Try changing your search query or selected filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
