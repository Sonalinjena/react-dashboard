import React, { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Search Bar</h2>

      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      <h3>Uppercase Output:</h3>
      <p>{text.toUpperCase()}</p>
    </div>
  );
};

export default SearchBar;