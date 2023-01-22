import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const nextBtn = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return numberCheck(newIndex);
    });
  };

  const prevBtn = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return numberCheck(newIndex);
    });
  };

  const numberCheck = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const surprise = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    console.log(setIndex(numberCheck(randomNumber)));
  };

  return (
    <section key={id}>
      <div className="avatar">
        <img src={image} alt={name} className="img" />
      </div>
      <h2 className="name">{name}</h2>
      <h4 className="pro">{job}</h4>
      <p className="info">{text}</p>
      <div className="btns">
        <button onClick={prevBtn} className="btn prev">
          <FaChevronLeft />
        </button>
        <button onClick={nextBtn} className="next btn">
          <FaChevronRight />
        </button>
      </div>
      <div className="surprise">
        <button onClick={surprise} className="surprise-btn">
          surprise me
        </button>
      </div>
    </section>
  );
};

export default Review;
