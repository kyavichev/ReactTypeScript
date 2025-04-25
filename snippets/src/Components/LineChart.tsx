
import React from "react";
import { ChartData } from 'chart.js';
import { Line } from "react-chartjs-2";

type LineChartProp = {
	chartData: any;
	title: string;
}

function LineChart({ chartData, title }: LineChartProp) 
{
	const options = {
		plugins: {
			title: {
				display: true,
				text: title,
			},
			legend: {
				display: false
			}
		}
	};

  	return (
		<div className="chart-container">
			<Line data={chartData} options={options} />
		</div>
	);
}
export default LineChart;