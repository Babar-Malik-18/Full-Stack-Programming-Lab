"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="main-nav">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          <div className="hidden md:flex items-center gap-0 h-full">
            <Link
              href="/category"
              className="text-white text-sm font-semibold px-5 h-full flex items-center tracking-wide"
            >
              CATEGORY
            </Link>
            <span className="w-px h-6 bg-red-300"></span>
            <Link
              href="/category"
              className="text-white text-sm font-semibold px-5 h-full flex items-center tracking-wide"
            >
              BRAND
            </Link>
            <span className="w-px h-6 bg-red-300"></span>
            <Link
              href="/about"
              className="text-white text-sm font-semibold px-5 h-full flex items-center tracking-wide"
            >
              INFO
            </Link>
          </div>
          <SearchForm />
          <button
            className="hamburger md:hidden"
            id="hamburgerBtn"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`} id="mobileMenu">
        <button
          className="mobile-menu-close"
          id="mobileMenuClose"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/category" onClick={() => setIsOpen(false)}>
          Category
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
        <Link href="/auth/login" onClick={() => setIsOpen(false)}>
          Login
        </Link>
        <Link href="/auth/register" onClick={() => setIsOpen(false)}>
          Register
        </Link>
        <Link href="/shopping/cart" onClick={() => setIsOpen(false)}>
          Shopping Cart
        </Link>
        <Link href="/account/my-account" onClick={() => setIsOpen(false)}>
          My Account
        </Link>
      </div>
    </>
  );
}
