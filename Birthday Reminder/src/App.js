import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="main">
      <section className="container">
        <h2 className="title"> {people.length} birthdays today</h2>
        <List data={people} />

        {people.length === 0 ? (
          <button
            className="btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => {
              setPeople([]);
            }}
          >
            clear all
          </button>
        )}
      </section>
    </div>
  );
}

export default App;
