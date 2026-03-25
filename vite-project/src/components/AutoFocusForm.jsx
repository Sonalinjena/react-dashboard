import React, { useRef, useEffect } from "react";

const AutoFocusForm = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Auto Focus Form</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        style={{ padding: "10px", margin: "10px" }}
      />

      <br />

      <input
        type="email"
        placeholder="Enter your email"
        style={{ padding: "10px", margin: "10px" }}
      />
    </div>
  );
};

export default AutoFocusForm;