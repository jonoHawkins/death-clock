import React from 'react';
import './App.css';
import DeathCountdown from './DeathCountdown';

function App() {
  return (
    <DeathCountdown
      colleagueName="Ash"
      end="2020-05-15 17:30"
    />
  );
}

export default App;
