import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const calculateTimeLeft = () => {
    const difference = (new Date()) - (new Date("2020-02-01"));
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={i}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <span className="App-logo">☠️</span>
        <p>{timerComponents.length ? <>Dan you are dead to us in<br /> {timerComponents}</> : <span>Dan you're dead to us now. Good luck.</span>}</p>
      </header>
    </div>
  );
}

export default App;
