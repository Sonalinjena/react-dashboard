import React, { useState } from "react";

const SecretMessage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Secret Message</h2>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Show Secret
      </label>

      {isChecked && <p> This is a secret message!</p>}
    </div>
  );
};

export default SecretMessage;