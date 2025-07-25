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
import { useState, useEffect } from "react";

export default function HeatMaps() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const margin =
		windowWidth < 768
			? { top: 0, right: -25, left: 0, bottom: 0 }
			: { top: 0, right: -15, left: 0, bottom: 0 };
	const barSize = windowWidth < 425 ? 15 : 25;

	const data = [
		{ month: "May", organic: 10, ads: 0, forecast: 0 },
		{ month: "Jul", organic: 15, ads: 180, forecast: 0 },
		{ month: "Sep", organic: 18, ads: 40, forecast: 0 },
		{ month: "Oct", organic: 20, ads: 50, forecast: 0 },
		{ month: "Nov", organic: 18, ads: 45, forecast: 0 },
		{ month: "Jan", organic: 25, ads: 70, forecast: 0 },
		{ month: "Feb", organic: 22, ads: 85, forecast: 0 },
		{ month: "Mar", organic: 35, ads: 150, forecast: 15 },
	];

	return (
		<div className={style.Trending}>
			<div className={style.Trending__container}>
				<div className={style.statistics}>
					<div className={style.statistics__block}>
						<div className={style["statistics__main"]}>
							<div className={style["statistics__chart-block"]}>
								<ResponsiveContainer height={300}>
									<BarChart
										className={style.statistics__barChart}
										margin={margin}
										barSize={barSize}
										height={360}
										barCategoryGap={40}
										data={data}
									>
										<CartesianGrid strokeDasharray="10 10" vertical={false} />

										<XAxis
											axisLine={{ stroke: "#ccc" }}
											tickLine={false}
											dataKey="month"
										/>
										<YAxis
											domain={[100, 200]}
											ticks={[100, 200]}
											tickLine={false}
											axisLine={false}
											orientation="right"
										/>
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
							<div className={style.value}>
								<div className={style["value__header-block"]}>
									<div className={style.value__wrraper}>
										<div className={style["value__circle-block"]}>
											<div
												style={{
													background: "#F25757",
												}}
											></div>
											<p>Ads</p>
										</div>
										<div className={style["value__bottom-data"]}>
											<p>906</p>
											<p>73%</p>
										</div>
									</div>
									<div className={style.value__wrraper}>
										<div className={style["value__circle-block"]}>
											<div
												style={{
													background: "#8ECADF",
												}}
											></div>
											<p>Organic</p>
										</div>
										<div className={style["value__bottom-data"]}>
											<p>906</p>
											<p>73%</p>
										</div>
									</div>
								</div>

								<div className={style["value__header-block"]}>
									<div className={style.value__wrraper}>
										<div className={style["value__circle-block"]}>
											<p>Total</p>
										</div>
										<div className={style["value__bottom-data"]}>
											<p>1,241</p>
											<p>100%</p>
										</div>
									</div>
								</div>
								<div className={style["value__header-block"]}>
									<div className={style.value__wrraper}>
										<div className={style["value__circle-block"]}>
											<div
												style={{
													border: "1px solid grey",
												}}
											></div>
											<p>Forecast</p>
										</div>
										<div className={style["value__bottom-data"]}>
											<p>906</p>
											<p>73%</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
