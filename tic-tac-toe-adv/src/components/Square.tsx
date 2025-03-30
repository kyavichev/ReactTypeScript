
import { useState } from 'react';

type SquareProps = {
	value: string | null;
	isWinSquare: boolean,
	onSquareClick: () => void;
};

export default function Square({value, isWinSquare, onSquareClick} : SquareProps) {

	const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

	return <button 
		className="square" 
		onClick={onSquareClick}
		style={{
			backgroundColor: isWinSquare ? '#c5f6b8' : isHighlighted ? '#b8f6f1' : 'transparent',
		}}
		onMouseEnter={() => setIsHighlighted(true)}
      	onMouseLeave={() => setIsHighlighted(false)}
	>
		{value}
	</button>;

}
