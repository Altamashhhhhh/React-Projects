import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [ticket, setTicket] = useState(generateRandomNumber(3));

  function generateRandomNumber(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
  }

  function sum(num) {
    return num.reduce((acc, curr) => acc + curr, 0);
  }

  const isWinning = sum(ticket) === 15;

  function handleBuyTicket() {
    setTicket(generateRandomNumber(3));
  }

  return (
    <div className="app-container">
      <h1 className="title">Lottery</h1>
      <div className="ticket-container">
        <div className="ticket-number">{ticket[0]}</div>
        <div className="ticket-number">{ticket[1]}</div>
        <div className="ticket-number">{ticket[2]}</div>
      </div>
      <button className="buy-button" onClick={handleBuyTicket}>
        Buy Ticket
      </button>
      {isWinning && (
        <h4 className="winning-message">
          🎉 Congratulations! You won the lottery! 🎉
        </h4>
      )}
    </div>
  );
};

export default App;
