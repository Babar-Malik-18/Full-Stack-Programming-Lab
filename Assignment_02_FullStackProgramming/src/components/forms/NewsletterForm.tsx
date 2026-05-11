"use client";

import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    if (!emailRegex.test(value)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <form id="newsletterForm" className="flex" onSubmit={handleSubmit}>
      <input
        type="email"
        id="newsletterEmail"
        placeholder="Enter your email"
        className="newsletter-input flex-1 rounded-l text-sm"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit" className="btn-red px-4 py-2 rounded-r text-sm font-semibold">
        GO
      </button>
    </form>
  );
}
