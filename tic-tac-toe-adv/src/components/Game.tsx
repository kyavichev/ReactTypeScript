
import React from 'react';
import { useState, useEffect } from 'react';
import { WinnerInfo } from './WinnerInfo';
import Board from './Board';




export default function Game() {

	useEffect(() => {
		document.title = "Tic Tac Toe Adv"
	}, []);

	const [boardSize, setBoardSize] = useState<number>(3);
	const [history, setHistory] = useState<Array<Array<string | null>>>([Array(boardSize * boardSize).fill(null)]);
	const [currentMove, setCurrentMove] = useState<number>(0);
	const [winnerInfo, setWinnerInfo] = useState<WinnerInfo | null>(null);


	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handleBoardSizeChange(event : any) {
		const value = event.target.value;
    	const numericValue = value.replace(/[^0-9]/g, '');
		const newBoardSize: number = parseInt(numericValue);
		setBoardSize(newBoardSize);
		if(!isNaN(newBoardSize) && newBoardSize > 0)
		{
			const newHistory = [Array(newBoardSize * newBoardSize).fill(null)];
			setHistory(newHistory);
			setCurrentMove(0);
			setWinnerInfo(null);
		}
	}

	function handlePlay(nextSquares : Array<string | null>, newWinnerInfo: WinnerInfo | null) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		setWinnerInfo(newWinnerInfo);
	}

	function jumpTo(nextMove : number) {
		setCurrentMove(nextMove);
	}

	const moves = history.map((_, move) => {
		let description;
		if (move > 0) {
			description = 'Go to move #' + move;
		} else {
			description = 'Go to game start';
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
    	<>
		    <div className="game">
				<div className="game-board-size">
					<select value={boardSize} onChange={handleBoardSizeChange}>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div className="game-board">
					<Board boardSize={boardSize} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winnerInfo={winnerInfo} />
				</div>
				<div className="game-info">
					<ol>{moves}</ol>
				</div>
			</div>
		</>
	);
}
