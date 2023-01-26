import React from "react";

const Categories = ({ menuCategories, filterItems }) => {
  return (
    <div className="categories">
      {menuCategories.map((btn, index) => {
        return (
          <button
            onClick={() => {
              filterItems(btn);
            }}
            key={index}
            className="btn"
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
