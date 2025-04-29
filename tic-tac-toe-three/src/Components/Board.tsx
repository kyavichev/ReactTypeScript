
import { useState } from 'react';
import { DoubleSide, Vector3 } from 'three';
import { Square } from './Square';


const COLOR = 'rgb(255, 125, 0)';
const OPACITY = 1;


export function Board() {

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

    let status = winner ? `Winner is ${winner}` : isX ? "Player X" : "Player O";

    return (
        <>
            <Square label={squares[0]} position={new Vector3(-18, 18, 0)} onClicked={()=>{onSquareClicked(0)}} />
            <Square label={squares[1]} position={new Vector3(0, 18, 0)} onClicked={()=>{onSquareClicked(1)}} />
            <Square label={squares[2]} position={new Vector3(18, 18, 0)} onClicked={()=>{onSquareClicked(2)}} />

            <Square label={squares[3]} position={new Vector3(-18, 0, 0)} onClicked={()=>{onSquareClicked(3)}} />
            <Square label={squares[4]} position={new Vector3(0, 0, 0)} onClicked={()=>{onSquareClicked(4)}} />
            <Square label={squares[5]} position={new Vector3(18, 0, 0)} onClicked={()=>{onSquareClicked(5)}} />

            <Square label={squares[6]} position={new Vector3(-18, -18, 0)} onClicked={()=>{onSquareClicked(6)}} />
            <Square label={squares[7]} position={new Vector3(0, -18, 0)} onClicked={()=>{onSquareClicked(7)}} />
            <Square label={squares[8]} position={new Vector3(18, -18, 0)} onClicked={()=>{onSquareClicked(8)}} />
        </>
    );
}
