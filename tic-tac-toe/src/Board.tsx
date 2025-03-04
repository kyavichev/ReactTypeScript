
import { useState } from 'react';
import Square from './Square';


type BoardState = {
    isWon: boolean;
	winner: string | null;
}


export default function Board() {

    const [boardState, setBoardState] = useState<BoardState>({isWon: false, winner: null});
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));

    function calculateWinner(squares : Array<string | null>) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function updateGameState(squares : Array<string | null>) {

        if(boardState.isWon) {
            return;
        }

        const winner = calculateWinner(squares);
        if (winner)
        {
            setBoardState({isWon: true, winner: winner});
        }
    }

    function handleClick(i : number) {

        if (boardState.isWon) {
            return;
        }

        if (squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);

        updateGameState(squares);
    }

    updateGameState(squares);
    let status;
    if (boardState.isWon) {
        status = "Winner: " + boardState.winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
  }
