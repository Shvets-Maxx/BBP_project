import style from "./StackedBarChart.module.sass";
import "mapbox-gl/dist/mapbox-gl.css";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

export default function HeatMaps() {
	const data = [
		{ month: "May", organic: 10, ads: 0, forecast: 0 },
		{ month: "Jul", organic: 15, ads: 25, forecast: 0 },
		{ month: "Sep", organic: 18, ads: 40, forecast: 0 },
		{ month: "Oct", organic: 20, ads: 50, forecast: 0 },
		{ month: "Nov", organic: 18, ads: 45, forecast: 0 },
		{ month: "Jan", organic: 25, ads: 70, forecast: 0 },
		// { month: "Feb", organic: 22, ads: 85, forecast: 0 },
		// { month: "Mar", organic: 35, ads: 150, forecast: 15 },
	];

	return (
		<div className={style.Trending}>
			<div className={style.Trending__container}>
				<div className={style.statistics}>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<p>Last 12 months</p>
							<p>Where your ad is reaching</p>
						</div>
						<div style={{ width: "100%", height: "320px" }}>
							<ResponsiveContainer height={320}>
								<BarChart height={360} barCategoryGap={40} data={data}>
									<CartesianGrid strokeDasharray="1 0" vertical={false} />

									<XAxis
										axisLine={{ stroke: "#ccc" }}
										tickLine={false}
										dataKey="month"
									/>
									<YAxis orientation="right" />
									<Tooltip />
									{/* <Legend /> */}
									<Bar dataKey="organic" stackId="a" fill="#8ECADF" name="Organic" />
									<Bar
										radius={[5, 5, 0, 0]}
										dataKey="ads"
										stackId="a"
										fill="#F25757"
										name="Ads"
									/>
									<Bar
										dataKey="forecast"
										stackId="a"
										fill="white"
										stroke="grey"
										strokeWidth={1.5}
										name="Forecast"
										radius={[5, 5, 0, 0]}
									/>
								</BarChart>
							</ResponsiveContainer>
						</div>
						<div style={{ display: "flex", gap: "16px" }}>
							<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
								<div
									style={{
										width: "16px",
										height: "16px",
										borderRadius: "999px",
										border: "1px solid grey",
									}}
								></div>
								<p style={{ font: "400 14px Open Sans" }}>Forecast</p>
							</div>
							<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
								<div
									style={{
										width: "16px",
										height: "16px",
										borderRadius: "999px",
										background: "#F25757",
									}}
								></div>
								<p style={{ font: "400 14px Open Sans" }}>Ads</p>
							</div>
							<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
								<div
									style={{
										width: "16px",
										height: "16px",
										borderRadius: "999px",
										background: "#8ECADF",
									}}
								></div>
								<p style={{ font: "400 14px Open Sans" }}>Organic</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
