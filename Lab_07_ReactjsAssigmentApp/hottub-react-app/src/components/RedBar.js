// src/components/RedBar.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RedBar.css";

function RedBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/category?search=${query}`);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="red-bar">
      <div className="red-bar-nav">
        <a href="/category">CATEGORY</a>
        <a href="#">BRAND</a>
        <a href="#">INFO</a>
      </div>
      <div className="search-wrap">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
        />
        <button onClick={handleSearch}>
          <i className="fa fa-search"></i> SEARCH
        </button>
      </div>
    </div>
  );
}

export default RedBar;