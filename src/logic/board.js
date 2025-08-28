import { winningCombinations } from "../constants.js";

export const calculateWinner = (newBoard) => {
    
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
            return newBoard[a];
        }
    }
    return null;
};