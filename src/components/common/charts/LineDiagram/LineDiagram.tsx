import { FC, useState } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
// import CircleIcon from '@mui/icons-material/Circle';
import { LineChart } from "@mui/x-charts/LineChart";
import { Period } from "@/features/profile/types";
import { uData, pData, xLabels } from "@/features/profile/constants.ts";
import { styled } from "@mui/system";
import style from "./LineDiagram.module.sass";

const AnimatedLineChart = styled(LineChart)(() => ({
	width: "100%",
	"& .MuiChartsAxisHighlight-root": {
		transition: "all 0.3s ease",
	},
	"& .MuiHighlightElement-root": {
		transition: "all 0.2s ease",
	},
}));

const BalanceOverviewChart: FC = () => {
	const [period, setPeriod] = useState<Period>("This month");

	const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
		setPeriod(event.target.value as Period);
	};

	const series: any[] = [
		{
			data: uData,
			label: "Revenue",
			color: "green",
			curve: "monotone",
			showMark: false,
		},
		{
			data: pData,
			label: "Expenses",
			color: "red",
			curve: "monotone",
			showMark: false,
		},
	];

	const xAxis: any[] = [
		{
			axisLine: false,
			scaleType: "point",
			data: xLabels,
			tickLabelStyle: { fontSize: 12 },
			line: { stroke: "transparent" },
			tickLine: { stroke: "transparent" },
		},
	];

	const yAxis = [
		{
			min: 0,
			max: 200000,
			tickLabelStyle: { fontSize: 12 },
			line: { stroke: "transparent" },
			tickLine: { stroke: "transparent" },
			valueFormatter: (value: number) => `${Math.round(value / 1000)}k`,
		},
	];

	return (
		<div className={style.diagram}>
			<div className={style.diagram__header}>
				<h2>Balance overview</h2>
				<Select
					MenuProps={{
						disablePortal: true,
						disableScrollLock: true, // ← це головне
					}}
					value={period}
					onChange={handlePeriodChange}
					size="small"
					variant="standard"
					disableUnderline
					sx={{ fontSize: 14 }}
				>
					<MenuItem value="This month">This month</MenuItem>
					<MenuItem value="Last month">Last month</MenuItem>
				</Select>
			</div>

			{/* Indicators */}
			<div className={style.diagram__container}>
				<div className={style.diagram__main}>
					<div className={style["diagram__block-circle"]}>
						<div
							className={style.diagram__circle}
							style={{
								backgroundColor: "green",
							}}
						/>
					</div>
					<div>
						<p className={style.diagram__number}>$120k</p>
						<p className={style.diagram__description}>Revenue</p>
					</div>
				</div>
				<div className={style.diagram__main}>
					<div className={style["diagram__block-circle"]}>
						<div
							className={style.diagram__circle}
							style={{
								backgroundColor: "red",
							}}
						/>
					</div>

					<div className={style["diagram__text-block"]}>
						<p className={style.diagram__number}>$85k</p>
						<p className={style.diagram__description}>Expenses</p>
					</div>
				</div>
				<div className={style["diagram__text-block"]}>
					<p className={style.diagram__number}>3.6%</p>
					<p className={style.diagram__description}>Profit ratio</p>
				</div>
			</div>

			{/* Chart */}
			<AnimatedLineChart
				height={300}
				series={series}
				xAxis={xAxis}
				yAxis={yAxis}
				margin={{ top: 10, bottom: 30, right: 10, left: 0 }}
				grid={{ vertical: false, horizontal: true }}
			/>
		</div>
	);
};

export default BalanceOverviewChart;
