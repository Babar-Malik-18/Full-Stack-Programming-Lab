"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-on-scroll")
    );

    if (elements.length === 0) {
      return;
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fadeIn");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -60px 0px" }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }

    elements.forEach((element) => element.classList.add("animate-fadeIn"));
  }, []);

  return null;
}
