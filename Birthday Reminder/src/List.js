import React from "react";

const List = ({ data }) => {
  return (
    <>
      {data.map((person) => {
        const { id, age, name, image } = person;

        return (
          <article key={id} className="article">
            <div className="left">
              <img className="avatar" src={image} alt="" />
            </div>
            <div className="right">
              <h2 className="name">{name}</h2>
              <h4 className="age">{age} years</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
