
import { useState } from 'react';
import Square from './Square';
import { WinnerInfo } from './WinnerInfo';


type BoardProps = {
	boardSize: number,
	requiredLineLength: number,
	xIsNext: boolean;
	squares: Array<string | null>;
	onPlay: (nextSquares: Array<string | null>, winnerInfo: WinnerInfo | null) => void;
	winnerInfo: WinnerInfo | null;
};


export default function Board({boardSize, requiredLineLength, xIsNext, squares, onPlay, winnerInfo } : BoardProps) {


	function getIndex(row: number, col: number): number {
		return row * boardSize + col;
	}

	function isOnBoard(row: number, col: number) {
		return (row > -1 && row < boardSize && col > -1 && col < boardSize);
	}

	function calculateWinnerAroundIndex(index: number, squares : Array<string | null>) : WinnerInfo | null {

		const row = Math.floor(index / boardSize);
		const col = Math.floor(index % boardSize);
		console.log( `index: ${index}, row: ${row}, col: ${col}`);

		const value = squares[index];
		if(!value) {
			console.log("Should not be null here");
			return null;
		}

		let match = 0;
		const line = [index];

		// check horizontal
		{
			const cFirst = row * boardSize;
			const cLast = row * boardSize + boardSize;
			match = 1;
			line.length = 1;
			// Go Right
			let rIndex = index - 1;
			while(rIndex >= cFirst && match < requiredLineLength)
			{
				console.log(`Moving right: checking index ${rIndex}, has value ${squares[rIndex]}`);
				if(squares[rIndex] === value)
				{
					line.push(rIndex);
					match++;
					rIndex--;

					console.log(`\t it was a match (${match})`);
				}
				else
				{
					break;
				}
			}
			// Go Left
			let lIndex = index + 1;
			while(lIndex < cLast && match < requiredLineLength)
			{
				console.log(`Moving left: checking index ${lIndex}, has value ${squares[lIndex]}`);
				if(squares[lIndex] === value)
				{
					line.push(lIndex);
					match++;
					lIndex++;

					console.log(`\t it was a match (${match})`);
				}
				else
				{
					break;
				}
			}

			if(match === requiredLineLength)
			{
				return  {winner: value, line: line};
			}
		}

		// check vertical
		{
			const rFirst = col;
			const rLast = col + (boardSize - 1) * boardSize;
			match = 1;
			line.length = 1;
			// Go Up
			let uIndex = index - boardSize;
			while(uIndex >= rFirst && match < requiredLineLength)
			{
				console.log(`Moving up: checking index ${uIndex}, has value ${squares[uIndex]}`);
				if(squares[uIndex] === value)
				{
					line.push(uIndex);
					match++;
					uIndex -= boardSize;

					console.log(`\t it was a match (${match})`);
				}
				else
				{
					break;
				}
			}
			// Go Down
			let dIndex = index + boardSize;
			while(dIndex <= rLast && match < requiredLineLength)
			{
				console.log(`Moving down: checking index ${dIndex}, has value ${squares[dIndex]}`);
				if(squares[dIndex] === value)
				{
					line.push(dIndex);
					match++;
					dIndex += boardSize;

					console.log(`\t it was a match (${match})`);
				}
				else
				{
					break;
				}
			}

			if(match === requiredLineLength)
			{
				return  {winner: value, line: line};
			}
		}

		// check vertical
		{
			// back slash diag
			{
				match = 1;
				line.length = 1;

				let cRow = row + 1;
				let cCol = col + 1;

				while(isOnBoard(cRow, cCol) && match < requiredLineLength)
				{
					let uIndex = getIndex(cRow, cCol);
					if(squares[uIndex] === value) {
						line.push(uIndex);
						match++;
						cRow ++;
						cCol ++;
					}
					else {
						break;
					}
				}

				cRow = row - 1;
				cCol = col - 1;

				while(isOnBoard(cRow, cCol) && match < requiredLineLength)
				{
					let uIndex = getIndex(cRow, cCol);
					if(squares[uIndex] === value) {
						line.push(uIndex);
						match++;
						cRow --;
						cCol --;
					}
					else {
						break;
					}
				}

				if(match === requiredLineLength)
				{
					return  {winner: value, line: line};
				}
			}

			// forward slash diag
			{
				match = 1;
				line.length = 1;

				let cRow = row - 1;
				let cCol = col + 1;

				while(isOnBoard(cRow, cCol) && match < requiredLineLength) {
					let uIndex = getIndex(cRow, cCol);
					if(squares[uIndex] === value) {
						line.push(uIndex);
						match++;
						cRow --;
						cCol ++;
					}
					else {
						break;
					}
				}

				cRow = row + 1;
				cCol = col - 1;

				while(isOnBoard(cRow, cCol) && match < requiredLineLength) {
					let uIndex = getIndex(cRow, cCol);
					if(squares[uIndex] === value) {
						line.push(uIndex);
						match++;
						cRow ++;
						cCol --;
					}
					else {
						break;
					}
				}

				if(match === requiredLineLength) {
					return  {winner: value, line: line};
				}
			}
		}

		return null;
	}

	function handleClick(i : number) : void {
		if (winnerInfo) {
			return;
		}

		if (squares[i]) {
			return;
		}

		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";
		const winner = calculateWinnerAroundIndex(i, nextSquares);

		onPlay(nextSquares, winner);
	}

	let status : string;
	let line: number[];
	if (winnerInfo && winnerInfo.winner) {
		status = "Winner: " + winnerInfo.winner;
		line = winnerInfo.line;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
		line = [-1];
	}

	const rows = [];
	for(let i: number = 0; i < boardSize; i++)
	{
		let startIndex: number = i * boardSize;
		let endIndex: number = startIndex + boardSize;

		const row = squares.filter((_, index) => (index >= startIndex && index < endIndex)).map( (square, index: number) => {
			let arrayIndex = index + startIndex;
			return <Square key={arrayIndex} value={square} isWinSquare={line.includes(arrayIndex)} onSquareClick={() => handleClick(arrayIndex)} />;
		});
		rows.push(row);
	}

	const tiles = rows.map( (row, index) => {
		return (
			<div key={index} className="board-row">
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
