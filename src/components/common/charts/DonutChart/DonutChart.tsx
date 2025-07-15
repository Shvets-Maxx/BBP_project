import { FC, useState, ReactElement } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { PieChart, Pie, Cell, Sector } from "recharts";
import { Period } from "@/features/profile/types.ts";
import { donutChartData } from "@/features/profile/constants.ts";
import style from "./DonutChart.module.sass";

const renderActiveShape = (props: any): ReactElement => {
	const {
		cx,
		cy,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		midAngle,
	} = props;

	const RADIAN = Math.PI / 180;
	const radius = (innerRadius + outerRadius + 10) / 2;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<g>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius + 12}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<text
				x={x}
				y={y}
				textAnchor="middle"
				dominantBaseline="central"
				fill="#fff"
				fontSize={14}
				fontWeight="bold"
			>
				{`${payload.value}%`}
			</text>
		</g>
	);
};

const DonutChart: FC = () => {
	const [timeRange, setTimeRange] = useState<Period>("This month");

	const handleChange = (event: SelectChangeEvent<Period>) => {
		setTimeRange(event.target.value as Period);
	};

	const activeIndex = donutChartData.reduce(
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
						data={donutChartData}
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
						{donutChartData.map((entry) => (
							<Cell key={entry.name} fill={entry.color} />
						))}
					</Pie>
				</PieChart>
			</div>

			{/* Legend */}
			<div className={style["donut__legend-block"]}>
				{donutChartData.map((item) => (
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
