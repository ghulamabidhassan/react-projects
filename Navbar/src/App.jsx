import React from "react";
import Nav from "./Nav";
import MobileNav from "./NavMob";
import { useGolbalContext } from "./Context";

function App() {
  return (
    <div className="App">
      <Nav />
      <MobileNav />
    </div>
  );
}

export default App;
