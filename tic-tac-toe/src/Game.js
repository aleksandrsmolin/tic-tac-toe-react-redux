import React, { Component } from 'react';
import { createStore } from 'redux';
import Board from './Board';
import './App.css';

const initialState = {
  winner: null,
  allBoards: Array(9).fill({
    board: [{
      squares: Array(9).fill(null),
      xIsNext: true,
      boardWinner: null,
    }],
  }),

}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_SQUARE:
    let square = state.allBoards[num[i]];
    let turn = state.allBoards[num].xIsNext;
      return Object.assign({}, state, {
        square: turn ? "X" & "0"
        xIsNext: !turn
      })
  
  default:
  return state
}
}

const store = createStore(reducer, );

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


renderBoard(num) {
  return (
    <Board
    squares={current.squares}
    triggerSquar={(i)=> store.dispatch}
    />
  )

}
  render() {
    return (
      <div className="All-rows">
        <div>
          <td className="Left-row"> {renderBoard(0)} </td>
          <td className="Left-row"> {renderBoard(1)} </td>
          <td className="Left-row"> {renderBoard(2)} </td>
        </div>
        <div>
          <td className="Center-row"> {renderBoard(3)} </td>
          <td className="Center-row"> {renderBoard(4)} </td>
          <td className="Center-row"> {renderBoard(5)} </td>
        </div>
        <div >
          <td className="Right-row"> {renderBoard(6)} </td>
          <td className="Right-row"> {renderBoard(7)} </td>
          <td className="Right-row"> {renderBoard(8)} </td>
        </div>
      </div>

    );
  }
}

export default Game;
