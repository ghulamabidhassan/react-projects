import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="notour-sec">
        <h2 className="notour">Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="all-tours">
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
