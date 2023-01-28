import React, { useState } from "react";
// import SingleColor from "./SingleColor";

import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <main>
      <header>
        <div className="container">
          <span className="heading">color generator </span>
          <input
            className={`${error ? "error" : null}`}
            placeholder="#102a42"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button onClick={handleSubmit} className="btn">
            submit
          </button>
        </div>
      </header>
      <section>
        {list.map((color, index) => {
          return (
            <SingleColor index={index} key={index} hex={color.hex} {...color} />
          );
        })}
      </section>
    </main>
  );
}

export default App;
