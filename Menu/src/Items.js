import React from "react";

const Items = ({ desc, img, title, price }) => {
  return (
    <article>
      <div className="left-cont">
        <img src={img} alt="" className="img" />
      </div>
      <div className="right-cont">
        <div className="header">
          <span>
            <h4 className="title">{title}</h4>
          </span>
          <span>
            <h4 className="price">$ {price}</h4>
          </span>
        </div>
        <footer>
          <p className="desc">{desc}</p>
        </footer>
      </div>
    </article>
  );
};

export default Items;
