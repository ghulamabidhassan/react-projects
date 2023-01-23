import React from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <section className="container">
        <div className="left">Questions And Answers About Login</div>
        <div className="right">
          {data.map((accordion) => {
            return <SingleQuestion key={accordion.id} {...accordion} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
