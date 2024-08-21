import { useState } from 'react';
import './App.css';

function App() {
  const [slider, setSlider] = useState(1);
  const [count, setCount] = useState(0);

  const handleSlider = (event) => {
    let value = event.target.value;
    setSlider(Number(value));
  };

  function increase() {
    setCount(prev => prev + +slider);
  }

  function decrease() {
    setCount(prev => prev - +slider);
  }

  const handleCount = (event) => {
    let value = event.target.value;
    if (value === "" || !isNaN(value)) {
      setCount(+value);
    }
  };

  const today = new Date();
  const displayDate = new Date(today);
  displayDate.setDate(today.getDate() + count);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Date Calculator</h1>
        <p className="description">Calculate future or past dates with ease!</p>
      </div>
      <div className="slider-container">
        <input
          onChange={handleSlider}
          type="range"
          min="1"
          max="10"
          step="1"
          value={slider}
          name='slider'
          id='slider'
        />
        <span className="slider-value">{slider}</span>
      </div>
      <p className="date-info">
        {count === 0 
          ? "Today " 
          : count > 0 
            ? ` ${count} Days from today is ` 
            : ` ${count} Days ago it was `} 
        { displayDate.toLocaleString('en-IN', { day: "numeric", weekday: "long", month: "long", year: "numeric" })}
      </p>
      <div className="counter">
        <button onClick={decrease} className="button">-</button>
        <input type="text" value={count} onChange={handleCount} className="count-input" />
        <button onClick={increase} className="button">+</button>
      </div>
    </div>
  );
}

export default App;
