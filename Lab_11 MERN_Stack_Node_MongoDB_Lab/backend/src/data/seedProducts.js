const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Product = require("../models/Product");

dotenv.config();

const sampleProducts = [
  {
    name: "Modern Wireless Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Smart Fitness Watch",
    description:
      "Track heart rate, sleep, workouts, and notifications with a sleek waterproof design.",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    category: "Wearables",
    inStock: true,
  },
  {
    name: "Minimal Leather Backpack",
    description:
      "Durable leather backpack for everyday carry with laptop sleeve and premium stitching.",
    price: 74.5,
    image:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=1200&q=80",
    category: "Accessories",
    inStock: false,
  },
  {
    name: "Ultra HD 4K Monitor",
    description:
      "27-inch IPS monitor with vivid colors, slim bezels, and ergonomic stand.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Mechanical RGB Keyboard",
    description:
      "Compact tactile mechanical keyboard with customizable RGB lighting.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Ergonomic Office Chair",
    description:
      "Breathable mesh chair with lumbar support and adjustable armrests.",
    price: 189.0,
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
    category: "Furniture",
    inStock: true,
  },
  {
    name: "Stainless Steel Water Bottle",
    description:
      "Vacuum-insulated bottle that keeps drinks cold for 24 hours.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=80",
    category: "Lifestyle",
    inStock: true,
  },
  {
    name: "Running Shoes Pro",
    description:
      "Lightweight running shoes with responsive cushioning and breathable mesh.",
    price: 99.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    category: "Fashion",
    inStock: true,
  },
  {
    name: "Classic Denim Jacket",
    description:
      "Timeless denim jacket with comfortable fit for all-season layering.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
    category: "Fashion",
    inStock: false,
  },
  {
    name: "Portable Bluetooth Speaker",
    description:
      "Water-resistant wireless speaker with powerful bass and all-day battery.",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1200&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Scented Soy Candle Set",
    description:
      "Set of three hand-poured soy candles with warm and relaxing aromas.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    category: "Home Decor",
    inStock: true,
  },
  {
    name: "Canvas Travel Duffel Bag",
    description:
      "Spacious duffel bag with reinforced handles and shoe compartment.",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    category: "Accessories",
    inStock: true,
  },
];

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("Products seeded successfully.");
    process.exit(0);
  } catch (error) {
    console.error(`Failed to seed products: ${error.message}`);
    process.exit(1);
  }
};

seedProducts();
