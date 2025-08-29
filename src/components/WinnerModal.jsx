import { Square } from "./Square";
import '../App.css';

export function WinnerModal({ winner, onRestart }) {
    if (winner == null) return null;

    const winnerText = winner == false ? 'Draw' : 'Winner:';

    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={onRestart}>
                        Restart
                    </button>
                </footer>
            </div>
        </section>
    )
}
