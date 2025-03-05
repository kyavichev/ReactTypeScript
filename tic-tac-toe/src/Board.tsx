
import { useState } from 'react';
import Square from './Square';


type BoardProps = {
	xIsNext: boolean;
	squares: Array<string | null>;
	onPlay: (nextSquares: Array<string | null>) => void;
};


export default function Board({ xIsNext, squares, onPlay } : BoardProps) {

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
				return {winner: squares[a], line: lines[i]};
			}
		}
		return null;
	}

	function handleClick(i : number) : void {

		const winner = calculateWinner(squares);
		if (winner) {
			return;
		}

		if (squares[i]) {
			return;
		}

		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";

		onPlay(nextSquares);
	}

	const winnerInfo = calculateWinner(squares);
	let status;
	let line;
	if (winnerInfo && winnerInfo.winner) {
		status = "Winner: " + winnerInfo.winner;
		line = winnerInfo.line;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
		line = [-1];
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} isWinSquare={line.includes(0)} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} isWinSquare={line.includes(1)} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} isWinSquare={line.includes(2)} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} isWinSquare={line.includes(3)} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} isWinSquare={line.includes(4)} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} isWinSquare={line.includes(5)} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} isWinSquare={line.includes(6)} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} isWinSquare={line.includes(7)} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} isWinSquare={line.includes(8)} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
  }
