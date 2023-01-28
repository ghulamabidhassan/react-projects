import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const btnUp = () => {
    setIndex(index + 1);

    if (index === people.length - 1) {
      return setIndex(0);
    }
  };
  const btnDown = () => {
    setIndex(index - 1);

    if (index === 0) {
      return setIndex(people.length - 1);
    }
  };

  return (
    <main>
      <section className="section">
        <div className="heading">
          <h2 className="title">
            <span>/</span> reviews
          </h2>
        </div>

        <div className="articles">
          {people.map((person, personIndex) => {
            const { image, name, title, quote } = person;

            let position = "nextSlide";

            if (personIndex === index) {
              position = "active";
            }

            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article key={personIndex} className={`article ${position}`}>
                <img src={image} alt="" className="img" />
                <h2 className="name">{name}</h2>
                <h4 className="pro">{title}</h4>
                <p className="desc">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <div className="arrows">
            <button onClick={btnDown} className="prev">
              <FiChevronLeft className="order" />
            </button>
            <button onClick={btnUp} className="next">
              <FiChevronRight className="order" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
