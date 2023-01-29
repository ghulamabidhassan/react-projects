import React, { useEffect } from "react";

const Alert = ({ alert, alertHandler }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      alertHandler();
    }, 2500);

    return () => clearTimeout(timer);
  });

  const { title, type } = alert;

  return <p className={`alert ${type}`}>{title}</p>;
};

export default Alert;
