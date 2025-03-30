

type ControlsProps = {
	numImages: number;
	onLoadButtonClicked: () => void;
}

const Controls = ({numImages, onLoadButtonClicked}: ControlsProps) => (
	<>
		<div className="stats flex items-center justify-center text-blue-100 bg-blue-400 rounded-sm">
			0 of {numImages}
		</div>
		<button className="block border border-gray-200 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-gray-100 rounded-sm" onClick={onLoadButtonClicked}>
			Load More
		</button>
	</>
);
export default Controls;
