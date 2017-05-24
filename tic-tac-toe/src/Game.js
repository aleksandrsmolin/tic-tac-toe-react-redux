import React, { Component } from 'react';
import Board from './Board';
import './App.css';

triggerSquare = (i) => {
  return {
    type: 'TRIGGER_SQUARE',
    i,
  };
};

const gameBody = (state = {}, action) => {
  switch (action.type) {
    case 'TRIGGER_SQUARE':
      return {
        i: action.i,
      }
    default:
      return state;
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBoards: Array(9).fill({
        board: [{
          squares: Array(9).fill(null),
          xIsNext: true,
        }],
      }),
    };
  }

  render() {
    console.log(this.state.allBoards);
    return (
      <div className="All-rows">
        <div>
          <td className="Left-row"> <Board /> </td>
          <td className="Left-row"> <Board /> </td>
          <td className="Left-row"> <Board /> </td>
        </div>
        <div>
          <td className="Center-row"> <Board /> </td>
          <td className="Center-row"> <Board /> </td>
          <td className="Center-row"> <Board /> </td>
        </div>
        <div >
          <td className="Right-row"> <Board /> </td>
          <td className="Right-row"> <Board /> </td>
          <td className="Right-row"> <Board /> </td>
        </div>
      </div>

    );
  }
}

export default Game;
