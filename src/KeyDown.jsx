import React, { useState } from "react";

const KeyboardShortcuts = () => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setMessage("You pressed the Enter key!");
    } else if (event.key === "Escape") {
      setMessage("You pressed the Escape key!");
    } else {
      setMessage(`Key pressed: ${event.key}`);
    }
  };

  return (
    <div
      tabIndex="0"
      onKeyDown={handleKeyDown}
      style={{
        width: "300px",
        height: "200px",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>{message || "Press Enter or Escape..."}</p>
    </div>
  );
};

export default KeyboardShortcuts;
