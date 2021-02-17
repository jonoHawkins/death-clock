import React from 'react';
import './App.css';
import DeathCountdown from './DeathCountdown';

function App() {
  return (
    <DeathCountdown
      colleagueName="Ryan"
      end="2021-03-18 17:30"
    />
  );
}

export default App;
