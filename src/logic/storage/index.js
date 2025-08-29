import { TURNS } from "../../constants";

// Save the current game state to localStorage
export const saveGame = (board, turn) => {
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('turn', JSON.stringify(turn));
};

// Load the saved game state from localStorage
export const loadGame = () => {
    const board = localStorage.getItem('board');
    const turn = localStorage.getItem('turn');
    return {
        board: board ? JSON.parse(board) : Array(9).fill(null),
        turn: turn ? JSON.parse(turn) : TURNS.X,
    };
};

// Clear the saved game state from localStorage
export const clearGame = () => {
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
}