
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
	let status : string;
	let line: number[];
	if (winnerInfo && winnerInfo.winner) {
		status = "Winner: " + winnerInfo.winner;
		line = winnerInfo.line;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
		line = [-1];
	}

	const size = 3;

	const rows = [];
	for(let i = 0; i < size; i++)
	{
		let rowS = i * 3;
		let rowE = rowS + 3;
		let row = squares.filter((square, index) => (index >= rowS && index < rowE)).map( (square, index: number) =>{
			let arrayIndex = index + rowS;
			return <Square value={square} isWinSquare={line.includes(arrayIndex)} onSquareClick={() => handleClick(arrayIndex)} />;
		});
		rows.push(row);
	}

	const tiles = rows.map( (row, index) => {
		return (
			<div className="board-row">
				{row}
			</div>
		);
	});


	return (
		<>
			<div className="status">{status}</div>
			{tiles}
		</>
	);
  }
