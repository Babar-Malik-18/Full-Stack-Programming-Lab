"use client";

import { useMemo, useState } from "react";

type Option = { label: string; price: number };

const options: { label: string; choices: Option[] }[] = [
  {
    label: "Interior Color:",
    choices: [
      { label: "Standard - White", price: 0 },
      { label: "Premium - Silver", price: 50 },
      { label: "Deluxe - Midnight Blue", price: 100 },
    ],
  },
  {
    label: "Outside Shell Color:",
    choices: [
      { label: "Mahogany", price: 0 },
      { label: "Coastal Gray", price: 50 },
      { label: "Espresso", price: 75 },
    ],
  },
  {
    label: "Circulation Pump:",
    choices: [
      { label: "Standard", price: 0 },
      { label: "Upgraded Quiet Pump", price: 150 },
    ],
  },
  {
    label: "Polar Foam:",
    choices: [
      { label: "Standard Insulation", price: 0 },
      { label: "Full Foam Insulation", price: 200 },
    ],
  },
  {
    label: "Cover / Steps:",
    choices: [
      { label: "Standard Cover", price: 0 },
      { label: "Premium Cover + Steps", price: 120 },
    ],
  },
  {
    label: "Extra Filter Sets:",
    choices: [
      { label: "None", price: 0 },
      { label: "1 Extra Set", price: 45 },
      { label: "2 Extra Sets", price: 80 },
    ],
  },
  {
    label: "Deluxe Cover Lifter:",
    choices: [
      { label: "None", price: 0 },
      { label: "Yes", price: 180 },
    ],
  },
  {
    label: "Salt Water Sanitation:",
    choices: [
      { label: "None", price: 0 },
      { label: "Yes", price: 350 },
    ],
  },
  {
    label: "TV/DVD/Entertainment:",
    choices: [
      { label: "None", price: 0 },
      { label: "Full Package", price: 500 },
    ],
  },
  {
    label: "Backyard Delivery:",
    choices: [
      { label: "Standard", price: 0 },
      { label: "White Glove", price: 200 },
    ],
  },
  {
    label: "Quantity:",
    choices: [{ label: "1", price: 0 }],
  },
];

export default function PriceCalculator() {
  const [selected, setSelected] = useState<number[]>(
    options.map(() => 0)
  );

  const total = useMemo(() => {
    const basePrice = 650;
    const addOns = selected.reduce((sum, value) => sum + value, 0);
    return basePrice + addOns;
  }, [selected]);

  return (
    <div className="price-calculator rounded-lg p-5 sticky top-4">
      <h3 className="font-bold text-gray-800 mb-4">Price Calculator</h3>
      <div className="space-y-3 text-sm">
        {options.map((group, index) => (
          <div key={group.label}>
            <label className="block text-gray-600 text-xs font-semibold mb-1">
              {group.label}
            </label>
            <select
              className="form-select calculator-select text-xs"
              value={selected[index]}
              onChange={(event) => {
                const value = Number(event.target.value);
                setSelected((prev) =>
                  prev.map((item, idx) => (idx === index ? value : item))
                );
              }}
            >
              {group.choices.map((choice) => (
                <option key={choice.label} value={choice.price}>
                  {choice.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-300 text-center">
        <p className="font-bold text-lg text-gray-800">
          Total Price: <span id="calculatorTotal">${total.toFixed(2)}</span>
        </p>
      </div>
      <button className="btn-navy w-full mt-4 py-3 rounded font-semibold text-sm flex items-center justify-center gap-2">
        <i className="fas fa-shopping-cart"></i> ADD TO CART
      </button>
    </div>
  );
}
