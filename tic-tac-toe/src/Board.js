import React, { Component } from 'react';
import { connect } from 'react-redux';

function Square(props) {
  return (
    <button onClick={this.props.handelOnClick}>
      {props.value}
    </button>
  );
}


class Board extends Component {

  renderSquare(i) {
    handelOnClick(i) {
      dispatch(triggerSquare(i))
    };
    return (
      <Square
        value={i}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    );
  }
}


export default Board;
