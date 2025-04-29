
import { Vector3 } from 'three';
import { Square } from './Square';


type BoardProps = {
    squares: Array<string | null>;
    onSquareClicked: (index: number) => void;
}


export function Board({squares, onSquareClicked} : BoardProps) {

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
