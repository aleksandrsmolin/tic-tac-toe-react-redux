import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <Board />
          <Board />
          <Board />
        </div>
        <div>
          <Board />
          <Board />
          <Board />
        </div>
        <div>
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
