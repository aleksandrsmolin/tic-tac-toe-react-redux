import React, { Component } from 'react';
import Board from './Board';
import './App.css';

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
