import { FC, ReactElement } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";
import { donutChartDataOrders } from "@/features/profile/constants.ts";
import eyes from "../assets/eyes.svg";
import style from "./BusinessProfileStats.module.sass";
const renderActiveShape = (props: any): ReactElement => {
	const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

	return (
		<g>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
		</g>
	);
};

const DonutChart: FC = () => {
	const activeIndex = donutChartDataOrders.reduce(
		(maxIdx, entry, idx, arr) => (entry.value > arr[maxIdx].value ? idx : maxIdx),
		0,
	);

	return (
		<div className={style.chart}>
			{/* Header */}
			<div className={style.chart__header}>
				<div
					className={style["chart__header-logo"]}
					style={{
						backgroundColor: "#D4E4EB",
						width: "36px",
						height: "36px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "5px",
					}}
				>
					<img src={eyes} alt="" />
				</div>
				<div>
					<h3
						style={{
							margin: 0,
							font: "normal 400 32px Open Sans",
						}}
					>
						18.418
					</h3>
					<p
						style={{
							margin: 0,
							font: "normal 400 14px Open Sans",
						}}
					>
						People viewed your Business Profile
					</p>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "6px",
					marginBottom: "35px",
				}}
			>
				<p
					style={{
						font: "normal 400 14px Open Sans",
					}}
				>
					Platform and device breakdown
				</p>
				<p
					style={{
						color: "grey",
						font: "normal 400 14px Open Sans",
					}}
				>
					Platform and devices that people used to find your profile
				</p>
			</div>
			<div style={{ display: "flex" }}>
				{/* Chart */}
				<div>
					<PieChart style={{ width: "400px !important" }} width={270} height={300}>
						<Pie
							data={donutChartDataOrders}
							dataKey="value"
							cx="50%"
							cy="50%"
							innerRadius={65}
							outerRadius={90}
							startAngle={90}
							endAngle={-270}
							stroke="none"
							activeIndex={activeIndex}
							activeShape={renderActiveShape}
						>
							{donutChartDataOrders.map((entry) => (
								<Cell key={entry.name} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</div>

				{/* Legend */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
						justifyContent: "space-evenly",
					}}
				>
					{donutChartDataOrders.map((item) => (
						<div
							key={item.name}
							style={{
								display: "flex",
								flexDirection: "column",
								fontSize: 14,
								gap: "10px",
							}}
						>
							<div style={{ display: "flex", alignItems: "center" }}>
								<div
									style={{
										width: 14,
										height: 14,
										borderRadius: "50%",
										backgroundColor: item.color,
										marginRight: 8,
									}}
								/>
								<span style={{ color: "#000" }}>{item.people} - </span>
								<span style={{ color: "#000" }}>{item.value}%</span>
							</div>
							<span style={{ color: "#888" }}>{item.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DonutChart;
