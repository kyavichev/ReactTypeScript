
// ChartExample.tsx
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useRef, useState } from "react";
import LineChart from "./LineChart";
import "./ChartExample.css";


Chart.register(CategoryScale);

export default function ChartExample() {


	const data1 = useRef([
		{
			id: 1,
			year: 2016,
			userGain: 80000,
			userLost: 823
		},
		{
			id: 2,
			year: 2017,
			userGain: 45677,
			userLost: 345
		},
		{
			id: 3,
			year: 2018,
			userGain: 78888,
			userLost: 555
		},
		{
			id: 4,
			year: 2019,
			userGain: 90000,
			userLost: 4555
		},
		{
			id: 5,
			year: 2020,
			userGain: 4300,
			userLost: 234
		},
		{
			id: 6,
			year: 2022,
			userGain: 3890,
			userLost: 457
		}
	]);

	const [chartData, setChartData] = useState({
		labels: data1.current.map((data) => data.year), 
		datasets: [
			{
				label: "Users Gained ",
				data: data1.current.map((data) => data.userGain),
				backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
				borderColor: "black",
				borderWidth: 2
			}
		]
	});

	const refreshChartData = () => {

		const lastEntry = data1.current[data1.current.length - 1];
		console.log(lastEntry);
		const nextId: number = lastEntry.id + 1;
		const nextYear: number = lastEntry.year + 1;
		const userGain: number = Math.round(Math.random() * 100000 + 2000);
		const userLost: number = Math.round(Math.random() * 500 + 200);
		data1.current.push({id:nextId, year: nextYear, userGain: userGain, userLost: userLost});

		setChartData({
			labels: data1.current.map((data) => data.year), 
		  	datasets: [
				{
					label: "Users Gained",
					data: data1.current.map((data) => data.userGain),
					backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
					borderColor: "black",
					borderWidth: 2,
				},
		  	],
		})
	}

	return (
		<div className="chart-example-main">
			<LineChart chartData={chartData} />
			<button onClick={refreshChartData}>Add data point</button>
		</div>
	);
}