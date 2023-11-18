import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [winner, setWinner] = useState(null);

  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");

  function ClickSquare(rowIndex, itemIndex) {
    if (grid[rowIndex][itemIndex] !== "") {
      return;
      
    }
  
    const newGrid = [...grid];
    newGrid[rowIndex][itemIndex] = player;
    setGrid(newGrid);
    setPlayer(player === "X" ? "O" : "X");
  
    checkwinner();
  }
  
  function checkwinner() {
    const lines = [
      [grid[0][0], grid[0][1], grid[0][2]], // top row
      [grid[1][0], grid[1][1], grid[1][2]], // middle row
      [grid[2][0], grid[2][1], grid[2][2]], // bottom row
      [grid[0][0], grid[1][0], grid[2][0]], // left column
      [grid[0][1], grid[1][1], grid[2][1]], // middle column
      [grid[0][2], grid[1][2], grid[2][2]], // right column
      [grid[0][0], grid[1][1], grid[2][2]], // main diagonal
      [grid[0][2], grid[1][1], grid[2][0]]  // secondary diagonal
    ];
    console.log(lines);

    for (let line of lines) {
      if (line.every((value) => value === "X")) {
        console.log("winner is X");
        setWinner("X");
        return;
      } else if (line.every((value) => value === "O")) {
        console.log("winner is O");
        setWinner("O");
        return;
      }
    }
  
    if (grid.every(row => row.every(value => value !== ""))) {
      console.log("no winner");
      setWinner(null);
    }
  }
  return(
  <>
    <h1 className='title'>XO Game</h1>
    <br/>
    <h2 className='player'>Next Player: {winner ? `Winner is ${winner}` : "Draw"}</h2>
    <div className="App">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((item, itemIndex) => (
            <div className="square" onClick={() => ClickSquare(rowIndex, itemIndex)}>{item}</div>
          ))}
      </div>
      ))}
    </div>
  </>
  )
}

export default App;