import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");

  function ClickSquare(rowIndex, itemIndex) {
    console.log("row Index", rowIndex)
    console.log("item Index", itemIndex)
    if (grid[rowIndex][itemIndex] !== "") {
      return;
    }

    const newGrid = [...grid];
    newGrid[rowIndex][itemIndex] = player;
    setGrid(newGrid);
    setPlayer(player === "X" ? "O" : "X");

    console.log(grid);
  }
  return(
    <div className="App">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((item, itemIndex) => (
            <div className="square" onClick={() => ClickSquare(rowIndex, itemIndex)}>{item}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App;