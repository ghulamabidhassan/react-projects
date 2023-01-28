import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ weight, hex, index }) => {
  return (
    <article
      style={{
        backgroundColor: `#${hex}`,
      }}
      className={`article ${index > 10 && "light"}`}
    >
      <h4 className="weight">{weight}%</h4>
      <p className="hex-code">#{hex}</p>
    </article>
  );
};

export default SingleColor;
