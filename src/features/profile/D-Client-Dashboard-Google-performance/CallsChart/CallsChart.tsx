import { Card, CardContent } from "@mui/material";
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
	{ month: "Oct 2024", calls: 75 },
	{ month: "Nov 2024", calls: 56 },
	{ month: "Dec 2024", calls: 41 },
	{ month: "Jan 2025", calls: 72 },
	{ month: "Feb 2025", calls: 63 },
	{ month: "Mar 2025", calls: 48 },
];
type CallsChartProps = {
	number: number;
	text: string;
};
export default function CallsChart({ number, text }: CallsChartProps) {
	return (
		<Card
			sx={{
				borderRadius: 3,
				boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
				padding: 2,
			}}
		>
			<CardContent>
				<div style={{ marginBottom: "30px" }}>
					<p style={{ font: "400 32px Open Sans", marginBottom: "5px" }}>{number}</p>
					<p style={{ font: "400 18px Open Sans" }}>{text}</p>
				</div>
				<div style={{ width: "100%", height: 350 }}>
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							data={data}
							margin={{ top: 20, right: 20, left: -10, bottom: 0 }}
						>
							<defs>
								<linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor={"#ED805B"} stopOpacity={0.3} />
									<stop offset="95%" stopColor={"#ED805B"} stopOpacity={0} />
								</linearGradient>
							</defs>
							<CartesianGrid
								strokeDasharray="3 3"
								vertical={true}
								horizontal={false}
							/>
							<XAxis
								width={40}
								dataKey="month"
								tick={{ fill: "#9E9E9E", fontSize: 12 }}
							/>
							<YAxis
								tickMargin={16}
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
								activeDot={{ r: 6 }}
								dot={{ r: 6, fill: "#ED805B" }}
								isAnimationActive={true}
								animationDuration={1000}
								animationEasing="ease-in-out"
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}
