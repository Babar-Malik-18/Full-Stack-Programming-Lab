"use client";

import { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length > 0) {
      alert(`Search for: "${trimmed}" — This is a static demo.`);
    }
  };

  return (
    <form
      id="searchForm"
      className="search-bar hidden md:flex items-center ml-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="searchInput"
        placeholder="Search"
        className="px-4 py-2 text-sm w-64 lg:w-80 border-0 focus:ring-0"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 text-white text-sm font-semibold tracking-wide"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        SEARCH
      </button>
    </form>
  );
}
