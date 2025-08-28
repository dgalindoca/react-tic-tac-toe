import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS} from './constants.js'
import { calculateWinner } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Board } from './components/Board.jsx'
import { saveGame, loadGame, clearGame } from './logic/storage/index.js'
import './App.css'

function App() {
  // Load the saved board from localStorage or initialize a new one
  const [board, setBoard] = useState(() => {
    const { board, turn } = loadGame();
    return board;
  });
  // Load the saved turn from localStorage or initialize a new one
  const [turn, setTurn] = useState(() => {
    const { board, turn } = loadGame();
    return turn;
  });
  // null: no winner yet, false: draw, true: winner
  const [winner, setWinner] = useState(null);

  const restartGame = () => {

    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    // Clear the saved game state from localStorage
    clearGame();
  };

  const updateBoard = (index) => {

    // Check if the square is already filled or if there's a winner
    if (board[index] || winner) return;

    // Update the board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Update the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Save the updated board to localStorage
    saveGame(newBoard, newTurn);

    // Check for a winner
    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }
    // Check for a draw
    else if (newBoard.every(square => square !== null)) {
      setWinner(false);
    }
  };

  return(
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <Board
        board={board}
        onUpdateBoard={updateBoard}
      />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <button onClick={restartGame}>
        Restart
      </button>

      <WinnerModal 
        winner={winner} 
        onRestart={restartGame} 
      />
    </main>
  )
}

export default App
