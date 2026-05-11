"use client";

import { useState } from "react";

const thumbnails = [
  "/assets/images/113152315_spa-566.png",
  "/assets/images/113152315_spa-566_copy.png",
  "/assets/images/113152315_spa-566_copy_2.png",
  "/assets/images/113152315_spa-566_copy_3.png",
];

export default function ProductGallery() {
  const [active, setActive] = useState(thumbnails[0]);

  return (
    <div className="md:w-1/2 product-gallery">
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <img
          src={active}
          alt="Emerald Bay Hot Tub"
          className="main-product-img w-full h-auto rounded"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {thumbnails.map((thumbnail) => (
          <button
            key={thumbnail}
            type="button"
            onClick={() => setActive(thumbnail)}
            className={`thumbnail-img w-full h-16 object-contain bg-gray-100 rounded cursor-pointer border-2 p-1 ${
              active === thumbnail ? "border-red-500" : "border-transparent"
            }`}
          >
            <img src={thumbnail} alt="Spa angle" className="w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
