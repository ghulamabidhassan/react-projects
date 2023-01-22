import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchUrl = async () => {
    setLoading(true);
    const response = await fetch(url);
    const toursdata = await response.json();
    setLoading(false);
    setTours(toursdata);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0)
    return (
      <main className="notour-sec">
        <h2 className="notour">No Tours Left</h2>
        <button
          className="btn"
          onClick={() => {
            fetchUrl();
          }}
        >
          Refresh
        </button>
      </main>
    );

  return (
    <div className="main">
      <div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </div>
  );
}

export default App;
