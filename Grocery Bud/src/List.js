import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, removeItem, editItem }) => {
  return (
    <>
      {list.map((item, id) => {
        return (
          <div key={id} className="article">
            <p key={item.id} className="list">
              {item.title}
            </p>
            <div className="icons">
              <FaEdit onClick={() => editItem(item.id)} className="icon edit" />
              <FaTrash
                onClick={() => removeItem(item.id)}
                className="icon trash"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
