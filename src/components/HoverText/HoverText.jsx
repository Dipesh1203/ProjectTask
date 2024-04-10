import React, { useState } from "react";
import "./HoverText.css";

const HoverText = ({ text }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="hover-text-container"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <div className={`hover-text ${showText ? "visible" : "hidden"}`}>
        {text}
      </div>
      <div className="hover-area">Hover over me</div>
    </div>
  );
};

export default HoverText;
