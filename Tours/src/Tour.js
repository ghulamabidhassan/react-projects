import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readmore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img className="tour-image" src={image} alt={name} />
      <footer>
        <h2 className="tour-title">{name}</h2>
        <h2 className="price">${price}</h2>
        <p className="info">
          {readmore ? info : `${info.substring(0, 200)}....`}
          <button className="readmore" onClick={() => setReadMore(!readmore)}>
            {readmore ? "Show Less" : "Read More"}
          </button>
        </p>
      </footer>
      <div className="remove-btn">
        <button
          className="remove"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
