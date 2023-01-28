import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = () => {
    let amount = parseInt(count);

    if (count <= 0 || count > 8) {
      amount = 1;
    }

    setText(data.slice(0, amount));
  };

  return (
    <main>
      <header>
        <h2 className="heading">TIRED OF BORING LOREM IPSUM?</h2>
      </header>
      <section>
        <div className="box">
          <span>paragraphs:</span>{" "}
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button onClick={handleSubmit} className="btn">
            generate
          </button>
        </div>
        <div className="paragraphs">
          {text.map((value, index) => {
            return (
              <p key={index} className="para">
                {value}
              </p>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
