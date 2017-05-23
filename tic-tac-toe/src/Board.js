import React from 'react';

function Square(props) {
  return (
    <button>
      No
    </button>
  );
}


class Board extends React {
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
