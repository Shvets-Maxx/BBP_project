// import { FC, useState, ReactElement } from "react";
// import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
// import { PieChart, Pie, Cell, Sector } from "recharts";
// import { Period } from "@/features/profile/types.ts";
// import { donutChartDataOrders } from "@/features/profile/constants.ts";
// import style from "./DonutChartOrder.module.sass";

// const renderActiveShape = (props: any): ReactElement => {
// 	const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

// 	return (
// 		<g>
// 			<Sector
// 				cx={cx}
// 				cy={cy}
// 				innerRadius={innerRadius}
// 				outerRadius={outerRadius}
// 				startAngle={startAngle}
// 				endAngle={endAngle}
// 				fill={fill}
// 			/>
// 		</g>
// 	);
// };

// const DonutChart: FC = () => {
// 	const [timeRange, setTimeRange] = useState<Period>("This month");

// 	const handleChange = (event: SelectChangeEvent<Period>) => {
// 		setTimeRange(event.target.value as Period);
// 	};

// 	const activeIndex = donutChartDataOrders.reduce(
// 		(maxIdx, entry, idx, arr) => (entry.value > arr[maxIdx].value ? idx : maxIdx),
// 		0,
// 	);

// 	return (
// 		<div
// 			style={{
// 				width: "100%",
// 				height: "100%",
// 				padding: 24,
// 				borderRadius: 16,
// 				backgroundColor: "#fff",
// 				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
// 				display: "flex",
// 				flexDirection: "column",
// 				justifyContent: "space-between",
// 			}}
// 		>
// 			{/* Header */}
// 			<div
// 				style={{
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 				}}
// 			>
// 				<h3
// 					style={{
// 						fontSize: 18,
// 						fontWeight: 500,
// 						margin: 0,
// 						font: 'normal 400 24px "PT Serif", sans-serif',
// 					}}
// 				>
// 					Orders delivery
// 				</h3>
// 				<Select
// 					value={timeRange}
// 					onChange={handleChange}
// 					variant="standard"
// 					disableUnderline
// 					sx={{ fontSize: 14 }}
// 				>
// 					<MenuItem value="This month">This month</MenuItem>
// 					<MenuItem value="Last month">Last month</MenuItem>
// 				</Select>
// 			</div>

// 			{/* Chart */}
// 			<div
// 				style={{
// 					width: "100%",
// 					// height: "100%",
// 					display: "flex",
// 					justifyContent: "center",
// 				}}
// 			>
// 				<PieChart style={{ width: "400px !important" }} width={300} height={300}>
// 					<Pie
// 						data={donutChartDataOrders}
// 						dataKey="value"
// 						cx="50%"
// 						cy="50%"
// 						innerRadius={60}
// 						outerRadius={90}
// 						startAngle={90}
// 						endAngle={-270}
// 						stroke="none"
// 						activeIndex={activeIndex}
// 						activeShape={renderActiveShape}
// 					>
// 						{donutChartDataOrders.map((entry) => (
// 							<Cell key={entry.name} fill={entry.color} />
// 						))}
// 					</Pie>
// 				</PieChart>
// 			</div>

// 			{/* Legend */}
// 			<div
// 				style={{
// 					display: "flex",
// 					gap: "20px",
// 					justifyContent: "space-between",
// 				}}
// 			>
// 				{donutChartDataOrders.map((item) => (
// 					<div
// 						key={item.name}
// 						style={{
// 							display: "flex",
// 							flex: "1",
// 							alignItems: "center",
// 							flexDirection: "column",
// 							fontSize: 14,
// 							gap: "10px",
// 						}}
// 					>
// 						<div style={{ display: "flex", alignItems: "center" }}>
// 							<div
// 								style={{
// 									width: 14,
// 									height: 14,
// 									borderRadius: "50%",
// 									backgroundColor: item.color,
// 									marginRight: 8,
// 								}}
// 							/>
// 							<span style={{ color: "#888" }}>{item.value}%</span>
// 						</div>
// 						<span style={{ color: "#888", textAlign: "center" }}>{item.name}</span>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default DonutChart;

import { FC, useState, ReactElement } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { PieChart, Pie, Cell, Sector } from "recharts";
import { Period } from "@/features/profile/types.ts";
import { donutChartDataOrders } from "@/features/profile/constants.ts";
import style from "./DonutChartOrder.module.sass";

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
	const [timeRange, setTimeRange] = useState<Period>("This month");

	const handleChange = (event: SelectChangeEvent<Period>) => {
		setTimeRange(event.target.value as Period);
	};

	const activeIndex = donutChartDataOrders.reduce(
		(maxIdx, entry, idx, arr) => (entry.value > arr[maxIdx].value ? idx : maxIdx),
		0,
	);

	return (
		<div className={style.donut}>
			{/* Header */}
			<div className={style.donut__header}>
				<h3>Subscribers</h3>
				<Select
					MenuProps={{
						disablePortal: true,
						disableScrollLock: true, // ← це головне
					}}
					value={timeRange}
					onChange={handleChange}
					variant="standard"
					disableUnderline
					sx={{ fontSize: 14 }}
				>
					<MenuItem value="This month">This month</MenuItem>
					<MenuItem value="Last month">Last month</MenuItem>
				</Select>
			</div>

			{/* Chart */}
			<div className={style.donut__chart}>
				<PieChart style={{ width: "400px !important" }} width={300} height={300}>
					<Pie
						data={donutChartDataOrders}
						dataKey="value"
						cx="50%"
						cy="50%"
						innerRadius={60}
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
			<div className={style["donut__legend-block"]}>
				{donutChartDataOrders.map((item) => (
					<div className={style["donut__legend"]} key={item.name}>
						<div className={style.donut__value}>
							<div
								className={style.donut__circle}
								style={{
									backgroundColor: item.color,
								}}
							/>
							<span>{item.value}%</span>
						</div>
						<span>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default DonutChart;
