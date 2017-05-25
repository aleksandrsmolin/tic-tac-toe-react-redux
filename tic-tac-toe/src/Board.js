import React, { Component } from 'react';
import { connect } from 'react-redux';

function Square(props) {
  return (
    <button onClick={this.props.onClick}>
      {props.value}
    </button>
  );
}


class Board extends Component {

  renderSquare(i) {
    return (
      <Square
        onClick={() => this.props.triggerSquare(i)}
        value={i}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


export default Board;
