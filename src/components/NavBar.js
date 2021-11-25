import React, { useEffect } from "react";
import "../styles/navbar.css";
import Image from "../images/movie-logo.png";

export default function Navbar({
  search,
  inputValue,
  setInputValue,
  defaultSearch,
  defSize,
}) {
  useEffect(() => {
    if (inputValue === "") {
      setInputValue(defaultSearch[Math.floor(Math.Random * defSize)]);
    } else {
      search();
    }
  }, [inputValue]);
  return (
    <div className="navbar">
      <div className="logo">
        <p className="logo-text"> Movie DB</p>
        <img src={Image} className="movie-logo" />
      </div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        placeholder="Search..."
        className="search-bar"
      />
    </div>
  );
}
