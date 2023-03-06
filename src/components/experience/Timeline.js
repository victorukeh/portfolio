import React from "react";

const Timeline = ({ works, date }) => {
  return (
    <div className="timeline">
      <div className="timeline__dates">
        <p>{date}</p>
      </div>
      <div className="timeline__details">
        {works.map((work) => {
          return (
            <>
              <h3>{work.title}</h3>
              <p>{work.place}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
