"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="backToTop"
      className={`fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full shadow-lg z-50 transition ${
        visible ? "" : "hidden"
      }`}
      aria-label="Back to top"
      onClick={handleClick}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
