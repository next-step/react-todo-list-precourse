import "../styles/TextField.css";
import React, { useState, useEffect, useRef } from "react";

function TextField({ onEnter }) {
  const [isPushed, setIsPushed] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (isPushed) {
      const timer = setTimeout(() => {
        setIsPushed(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isPushed]);

  const handleKeyDown = (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setIsPushed(true);
      onEnter(event.target.value.trim());
      event.target.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <input type="text" ref={inputRef} className={`textfield ${isPushed ? "push" : ""}`} onKeyDown={handleKeyDown} />
  );
}

export default TextField;
