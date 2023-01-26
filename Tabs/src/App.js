import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(!loading);
    setJobs(data);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  if (loading) {
    return (
      <header>
        <h2 className="loading">Loading...</h2>
      </header>
    );
  }

  const { title, dates, duties, company } = jobs[value];

  return (
    <main>
      <header>
        <h2 className="heading">Experience</h2>
        <div className="underline"></div>
      </header>
      <section className="grid">
        <div className="btn-section">
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={index}
                className={`btn-company ${index === value && "active"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="job-content">
          <h2 className="profession">{title}</h2>
          <h4 className="company">{company}</h4>
          <h2 className="date">{dates}</h2>
          <div className="description">
            {duties.map((duty, index) => {
              return (
                <p key={index} className="desc">
                  <FaAngleDoubleRight className="icon" />
                  <p className="desc">{duty}</p>
                </p>
              );
            })}
          </div>
        </div>
      </section>
      <div className="info-btn">
        <button className="more-info">more info</button>
      </div>
    </main>
  );
}

export default App;
