import React, { Component } from 'react';

function Square(props) {
  return (
    <button>
      No
    </button>
  );
}


class Board extends Component {
  render() {
    return (
      <div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}
export default Board;
