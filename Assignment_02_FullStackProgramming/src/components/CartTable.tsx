"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  details: string;
  quantity: number;
};

const initialItems: CartItem[] = [
  {
    id: "spa-158-01",
    name: "5-7 Person 158 Jet Spa with Stereo System",
    price: 5012.5,
    image: "/assets/images/113152315_spa-566.png",
    details: "Color: Sterling Silver | Shell: Pearl",
    quantity: 1,
  },
  {
    id: "spa-158-02",
    name: "TV Theater Spa - Premium Home Entertainment",
    price: 5012.5,
    image: "/assets/images/113152315_spa-566_copy.png",
    details: "Color: Midnight Canyon",
    quantity: 1,
  },
];

export default function CartTable() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const total = subtotal + (items.length > 0 ? 30 : 0);

  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-8">
      <div className="flex-1 min-w-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm" id="cartTable">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 w-16"></th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Product
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Unit Price
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Qty
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">
                  Subtotal
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700 w-20">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map((item) => (
                <tr key={item.id} className="cart-item">
                  <td className="py-4 px-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <Link
                      href="/product"
                      className="font-semibold text-red-600 hover:text-red-800 transition block mb-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-gray-400">{item.details}</p>
                    <Link
                      href="/product"
                      className="text-xs text-blue-600 hover:text-blue-800 transition mt-1 inline-block"
                    >
                      <i className="fas fa-pencil-alt mr-1"></i>Edit
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-right text-gray-800 font-semibold">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="qty-minus w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-gray-600 transition"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        readOnly
                        className="qty-input w-14 h-8 text-center border border-gray-200 rounded text-sm"
                        aria-label="Quantity"
                      />
                      <button
                        className="qty-plus w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-gray-600 transition"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-gray-800 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      className="remove-item text-gray-400 hover:text-red-600 transition"
                      aria-label="Remove item"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
          <Link
            href="/category"
            className="text-sm text-red-600 hover:text-red-800 transition"
          >
            <i className="fas fa-arrow-left mr-2"></i>Continue Shopping
          </Link>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded text-sm font-semibold transition">
            UPDATE SHOPPING CART
          </button>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-3">Discount Codes</h3>
          <p className="text-sm text-gray-500 mb-3">
            Enter your coupon code if you have one.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your coupon code"
              className="form-input flex-1 rounded-r-none text-sm"
            />
            <button className="btn-navy px-6 py-2 rounded-l-none rounded-r font-semibold text-sm">
              APPLY COUPON
            </button>
          </div>
        </div>
      </div>

      <aside className="lg:w-80 flex-shrink-0">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
          <h3 className="font-bold text-gray-800 text-lg mb-4 pb-3 border-b border-gray-200">
            Cart Summary
          </h3>
          <div className="space-y-3 mb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-800" id="cartSubtotal">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping &amp; Handling</span>
              <span className="text-gray-600">${items.length > 0 ? "30.00" : "0.00"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="text-gray-600">$0.00</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between">
              <span className="font-bold text-gray-800 text-base">Grand Total</span>
              <span className="font-bold text-red-600 text-xl" id="cartTotal">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <Link
            href="/shopping/payment"
            className="btn-red block w-full text-center py-3 rounded font-semibold text-sm"
          >
            PROCEED TO CHECKOUT
          </Link>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400 mb-2">Secure Payment</p>
            <img
              src="/assets/images/payment-options.png"
              alt="Payment Methods"
              className="mx-auto h-6 object-contain opacity-70"
            />
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4">
          <h3 className="font-bold text-gray-800 mb-3">Estimate Shipping</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Country</label>
              <select className="form-input text-sm">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                State/Province
              </label>
              <select className="form-input text-sm">
                <option>Please select...</option>
                <option>California</option>
                <option>New York</option>
                <option>Texas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Zip/Postal Code
              </label>
              <input
                type="text"
                className="form-input text-sm"
                placeholder="Enter zip code"
              />
            </div>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm font-semibold transition w-full">
              GET A QUOTE
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
