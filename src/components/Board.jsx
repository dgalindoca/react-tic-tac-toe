import { Square } from "./Square"
import '../App.css'

export function Board({board, onUpdateBoard}) {
    return (
        <section className='game'>
            {board.map((square, index) => {
                return (
                    <Square
                        key={index}
                        updateBoard={onUpdateBoard}
                        index={index}
                    >
                        {square}
                    </Square>
                )
            })}
        </section>
    )
}
