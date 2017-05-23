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
      <div className="All-rows">
        <div className="Left-row" >
          <Board />
          <Board />
          <Board />
        </div>
        <div className="Center-row">
          <Board />
          <Board />
          <Board />
        </div>
        <div className="Right-row">
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
