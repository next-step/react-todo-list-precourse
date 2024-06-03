import "./TextField.css";
import React, { useState, useEffect } from "react";

function TextField() {
  const [isPushed, setIsPushed] = useState(false);

  useEffect(() => {
    if (isPushed) {
      const timer = setTimeout(() => {
        setIsPushed(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isPushed]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsPushed(true);
    }
  };

  return <input type="text" className={`textfield ${isPushed ? "push" : ""}`} onKeyDown={handleKeyDown} />;
}

export default TextField;
