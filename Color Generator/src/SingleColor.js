import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ weight, hex, index }) => {
  let hexColor = `#${hex}`;
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  return (
    <article
      style={{
        backgroundColor: `#${hex}`,
      }}
      className={`article ${index > 10 && "light"}`}
      onClick={() => {
        navigator.clipboard.writeText(hexColor);
        setAlert(true);
      }}
    >
      <h4 className="weight">{weight}%</h4>
      <p className="hex-code">{hexColor}</p>
      {alert && <p className="copy">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
