import { Product } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch products from backend API.");
  }

  return response.json();
};
