import Deck from './DeckOfCards';
import Dice from './Dice';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Games Playground</h1>
      <div className="games">
      <div>
        <h2>Dice</h2>
        <Dice />
      </div>
      <div>
        <h2>Deck</h2>
        <Deck />
      </div>
    </div>
    </header>
  </div>
  );
}

export default App;
