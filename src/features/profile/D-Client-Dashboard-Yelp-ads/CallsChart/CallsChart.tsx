import { Card, CardContent } from "@mui/material";
import style from "./CallsChart.module.sass";
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Area,
	AreaChart,
} from "recharts";

const data = [
	{ month: "3/2", calls: 75 },
	{ month: "3/9", calls: 56 },
	{ month: "3/16", calls: 41 },
	{ month: "3/23", calls: 72 },
	{ month: "3/30", calls: 61 },
	// { month: "Mar 2025", calls: 48 },
];

export default function CallsChart() {
	return (
		<div className={style.callsChart}>
			<Card
				className={style.callsChart__container}
				sx={{
					borderRadius: 3,
					boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
					padding: 2,
				}}
			>
				<CardContent>
					<ResponsiveContainer width="100%" height={250}>
						<AreaChart
							data={data}
							margin={{ top: 32, right: -25, left: 0, bottom: 0 }}
						>
							<defs>
								<linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor={"#ED805B"} stopOpacity={0.3} />
									<stop offset="95%" stopColor={"#ED805B"} stopOpacity={0} />
								</linearGradient>
							</defs>
							<CartesianGrid
								strokeDasharray="10 10"
								vertical={false}
								horizontal={true}
							/>
							<XAxis
								tickMargin={10}
								padding={{ left: 0, right: 10 }}
								width={40}
								dataKey="month"
								tick={{ fill: "#9E9E9E", fontSize: 12 }}
							/>
							<YAxis
								orientation="right"
								// tickMargin={20}
								tick={{ fill: "#9E9E9E", fontSize: 12 }}
								domain={[0, 100]}
								tickCount={5}
								interval={0}
								allowDuplicatedCategory={false}
							/>
							<Tooltip
								contentStyle={{
									backgroundColor: "white",
									border: "1px solid #ccc",
									borderRadius: 4,
									fontSize: 12,
								}}
								labelStyle={{ fontWeight: 500 }}
								formatter={(value: number) => [`${value}`, "Calls"]}
							/>
							<Area
								type="linear"
								dataKey="calls"
								stroke={"#ED805B"}
								fillOpacity={1}
								fill="url(#colorCalls)"
								// activeDot={{ r: 6 }}
								// dot={{ r: 6, fill: "#ED805B" }}
								isAnimationActive={true}
								animationDuration={1000}
								animationEasing="ease-in-out"
							/>
						</AreaChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</div>
	);
}
