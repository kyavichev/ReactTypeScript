
import { useState } from 'react';

type SquareProps = {
	value: string | null;
	onSquareClick: () => void;
};

export default function Square({value, onSquareClick} : SquareProps) {

	const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

	return <button 
		className="square" 
		onClick={onSquareClick}
		style={{
			backgroundColor: isHighlighted ? '#b8f6f1' : 'transparent',
		}}
		onMouseEnter={() => setIsHighlighted(true)}
      	onMouseLeave={() => setIsHighlighted(false)}
	>
		{value}
	</button>;

}
