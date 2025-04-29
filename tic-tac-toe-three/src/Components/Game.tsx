

import { useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import './Game.css';
import Grid from './Grid';
import { Board } from './Board';


const Game = () => {

	const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
    const [isX, setIsX] = useState<boolean>(true);
    const [winner, setWinner] = useState<string | null>(null);

    function onSquareClicked(index: number) {
        console.log(`${index}`);

        if(squares[index]) {
            return;
        }

        let newSquares = squares.slice();

        newSquares[index] = isX ? "X" : "O"; 
        setSquares(newSquares);

        let newIsX = !isX;
        setIsX(newIsX);

        const newWinner = checkWinner(newSquares, index);
        if(newWinner) {
            setWinner(newWinner);
        }
    }

    function checkWinner(squares: Array<string | null>, tileIndex: number) {
        // rows: 0, 1, 2
        // col: [0, 3, 6], [1 , 4, 7]
        // hor: [0, 4, 8] [2, 4, 6]

        const boardSize = 3;
        let row = Math.floor( tileIndex / boardSize );
        let col = tileIndex % boardSize;

        {
            let sA = squares[0 + row * 3];
            let sB = squares[1 + row * 3];
            let sC = squares[2 + row * 3];

            if(sA && sA === sB && sB === sC)
            {
                return sA;
            }
        }

        {
            let sA = squares[0 + col];
            let sB = squares[3 + col];
            let sC = squares[6 + col];

            if(sA && sA === sB && sB === sC)
            {
                return sA;
            }
        }

        // // rows
        // for (let i = 0; i < 3; i++)
        // {
        //     let sA = squares[0 + i * 3];
        //     let sB = squares[1 + i * 3];
        //     let sC = squares[2 + i * 3];

        //     if(sA && sA === sB && sB === sC)
        //     {
        //         return sA;
        //     }
        // }

        // // columns
        // for (let i = 0; i < 3; i++)
        // {
        //     let sA = squares[0 + i];
        //     let sB = squares[3 + i];
        //     let sC = squares[6 + i];

        //     if(sA && sA === sB && sB === sC)
        //     {
        //         return sA;
        //     }
        // }

        // diag


        return null;
    }

    const status = winner ? `Winner is ${winner}` : isX ? "Player X" : "Player O";

	return(
		<div className='playarea'>
			<div>{status}</div>
			<Canvas>
				<color args={['hsl(169, 54.80%, 59.20%)']} attach="background" />
				<ambientLight intensity={0.5} />
				<pointLight position={[50, 200, 50]} intensity={0.75} />
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial color={'orange'} />
				</mesh>
				<Grid />
				<Board squares={squares} onSquareClicked={onSquareClicked}/>
				<OrbitControls
					target={[0, 0, 0]}
					maxPolarAngle={3}
					autoRotate
					autoRotateSpeed={3}
				/>
			</Canvas>
		</div>
	);
};


export default Game;
