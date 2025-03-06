
import './Square.css'

type SquareProps = {
    label: string | null,
    onClicked: () => void;
}

export function Square({label, onClicked} : SquareProps) {
    return <button className='square' onClick={onClicked}>{label}</button>
}