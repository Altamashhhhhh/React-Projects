import React, { useState } from "react";
import "../style/Poll.css";

const Poll = ({ title, description }) => {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  function handleYes() {
    setYes((prev) => prev + 1);
  }

  function handleNo() {
    setNo((prev) => prev + 1);
  }

  let totalVote = yes + no;
  let yesPercentage = totalVote ? Math.floor((yes / totalVote) * 100) : 0;
  let noPercentage = totalVote ? Math.ceil((no / totalVote) * 100) : 0;

  return (
    <div>
      <h1>POLL</h1>
      <div className="container">
        <h2>{title}</h2>
        <p><strong>Poll:</strong> {description}</p>
        <div className="progress">
          <p>Yes: {yesPercentage}%</p>
          <p>No: {noPercentage}%</p>
        </div>
        <div className="line-container">
          <div className="line" style={{ width: `${yesPercentage}%`, backgroundColor: "#4CAF50" }}></div>
        </div>
        <div className="line-container">
          <div className="line" style={{ width: `${noPercentage}%`, backgroundColor: "#f44336" }}></div>
        </div>
        <div className="buttons">
          <button onClick={handleYes}>YES</button>
          <button onClick={handleNo}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default Poll;
