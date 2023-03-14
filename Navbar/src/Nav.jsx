import React, { useState } from "react";
import logo from "./assets/logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaBars,
} from "react-icons/fa";
import { useGolbalContext } from "./Context";

const Navbar = () => {
  const { openSidebar, isOpen } = useGolbalContext();

  return (
    <div className={`${isOpen ? "nav-cont" : "nav-cont shadow"}`}>
      <img src={logo} alt="" className="img" />
      <div className="menus">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>projects</li>
          <li>contact</li>
          <li>profile</li>
        </ul>
      </div>
      <div className="ham ">
        <FaBars
          className={`${isOpen ? "ham-bar rotate" : "ham-bar "}`}
          onClick={openSidebar}
        />
      </div>
      <div className="socials">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
        <FaPinterest className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
