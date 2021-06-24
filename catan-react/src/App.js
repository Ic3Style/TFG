import logo from './assets/images/logo.svg';
import './assets/css/App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import React from 'react';
import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { Catan } from './Game';
import { CatanBoard } from './Board';

function setNumPlayers(){
  let n = prompt("¿Cuantos jugadores sois?");
  n = parseInt(n);

  while(n <2 ||  n>4){
    n = prompt("Numero de jugadores no valido, repita:");
    n = parseInt(n);
  }
  return n;
}

/*
const CatanClient = Client({
  game: Catan,
  board: CatanBoard,
  multiplayer: Local(),
  numPlayers: setNumPlayers(),
});

const App = () => (
  <div>
    <CatanClient playerID="0" />
    <CatanClient playerID="1" />
  </div>
);
*/

const App = Client({
  game: Catan,
  board: CatanBoard,
  numPlayers: setNumPlayers(),
});

/*
const App = () => (
//style= {{color: rgb(255, 0, 0)}} NO ME DEJA METER STYLE EN EL DIV
  <div >
    Player 0
    <CatanClient playerID="0" />
    <br />
    Player 1
    <CatanClient playerID="1" />
  </div>
);
*/
export default App;
