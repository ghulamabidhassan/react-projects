import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./Context";

const element = document.querySelector("#root");
const root = ReactDOM.createRoot(element);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
