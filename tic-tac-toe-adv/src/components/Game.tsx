
import React from 'react';
import { useState, useEffect } from 'react';
import { WinnerInfo } from './WinnerInfo';
import Board from './Board';




export default function Game() {

	useEffect(() => {
		document.title = "Tic Tac Toe Adv"
	}, []);

	const [boardSize, setBoardSize] = useState<number>(3);
	const [requiredLineLength, setRequiredLineLength] = useState<number>(3);
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
		if(!isNaN(newBoardSize) && newBoardSize > 0) {
			setRequiredLineLength(newBoardSize);
			const newHistory = [Array(newBoardSize * newBoardSize).fill(null)];
			setHistory(newHistory);
			setCurrentMove(0);
			setWinnerInfo(null);
		}
	}


	function handleRequiredLineLengthChange(event : any) {
		const value = event.target.value;
		const numericValue = value.replace(/[^0-9]/g, '');
		const newRequiredLineLength: number = parseInt(numericValue);
		setRequiredLineLength(newRequiredLineLength);
		const newHistory = [Array(boardSize * boardSize).fill(null)];
		setHistory(newHistory);
		setCurrentMove(0);
		setWinnerInfo(null);
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

	const lineLengths = [];
	for(let i = 3; i <= boardSize; i++) {
		lineLengths.push(<option key={i} value={i}>{i}</option>);
	}

	return (
    	<>
		    <div className="game-main">
				<div className="game">
					<div className="game-board-setting">
						<div className="game-board-setting-label">Board Size:</div> 
						<select value={boardSize} onChange={handleBoardSizeChange}>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>

					<div className="game-board-setting">
						<div className="game-board-setting-label">Required Line Length:</div>
						<select value={requiredLineLength} onChange={handleRequiredLineLengthChange}>
							{lineLengths}
						</select>
					</div>

					<div className="game-board">
						<Board boardSize={boardSize} requiredLineLength={requiredLineLength} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winnerInfo={winnerInfo} />
					</div>
				</div>
				<div className="game-info">
					<ol>{moves}</ol>
				</div>
			</div>
		</>
	);
}
