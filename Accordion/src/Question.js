import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [istrue, setIsTrue] = useState(false);

  const showBtn = () => {
    setIsTrue(!istrue);
  };

  return (
    <article className="article">
      <div className="flex">
        <h2 className="title">{title}</h2>
        <span className="icon" onClick={showBtn}>
          {istrue ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>
      <div>{istrue && <p className="desc">{info}</p>}</div>
    </article>
  );
};

export default Question;
