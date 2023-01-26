import React from "react";
import Items from "./Items";

const Menu = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((products, index) => {
        return <Items key={index} {...products} />;
      })}
    </>
  );
};

export default Menu;
