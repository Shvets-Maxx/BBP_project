import style from "./TabBreakdown.module.sass";
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
			: { top: 0, right: -10, left: 0, bottom: 0 };
	const barSize = windowWidth < 425 ? 15 : 30;

	const data = [
		{
			month: "May",
			Calls: 10,
			"Website visitis": 0,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Jul",
			Calls: 15,
			"Website visitis": 180,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Sep",
			Calls: 18,
			"Website visitis": 40,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Oct",
			Calls: 20,
			"Website visitis": 50,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Nov",
			Calls: 18,
			"Website visitis": 45,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Jan",
			Calls: 25,
			"Website visitis": 70,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Feb",
			Calls: 22,
			"Website visitis": 85,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 0,
		},
		{
			month: "Mar",
			Calls: 35,
			"Website visitis": 150,
			Messages: 40,
			"CTA clicks": 40,
			"Directions & Map views": 40,
			forecast: 15,
		},
	];

	return (
		<div className={style.Trending}>
			<div className={style.statistics}>
				<div className={style.statistics__block}>
					<div className={style["statistics__title-block"]}>
						<div className={style["statistics__title-head"]}>
							<p>Leads breakdown</p>
							<p>(last 12 months)</p>
						</div>
						<p>1.2k</p>
					</div>
					<div className={style["statistics__main"]}>
						<div className={style["statistics__chart-block"]}>
							<ResponsiveContainer height={310}>
								<BarChart
									margin={margin}
									barSize={barSize}
									barCategoryGap={40}
									data={data}
								>
									<CartesianGrid strokeDasharray="10 10" vertical={false} />

									<XAxis
										padding={{ left: 0, right: -10 }}
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

									<Bar
										dataKey="Directions & Map views"
										stackId="a"
										fill="#EF4D56"
										name="Directions & Map views"
									/>
									<Bar
										dataKey="CTA clicks"
										stackId="a"
										fill="#BE8A6C"
										name="CTA clicks"
									/>
									<Bar dataKey="Messages" stackId="a" fill="#EDCE54" name="Messages" />
									<Bar
										dataKey="Website visitis"
										stackId="a"
										fill="#49AB3A"
										name="Website visitis"
									/>
									<Bar
										radius={[5, 5, 0, 0]}
										dataKey="Calls"
										stackId="a"
										fill="#ABD1DE"
										name="Calls"
									/>
									<Bar
										radius={[5, 5, 0, 0]}
										stroke="#92A1A8"
										strokeWidth={1}
										dataKey="forecast"
										stackId="a"
										fill="#fff"
										name="forecast"
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
												background: "#ABD1DE",
											}}
										></div>
										<p>Calls</p>
									</div>
									<div className={style["value__bottom-data"]}>
										<p>288</p>
										<p>73%</p>
									</div>
								</div>
								<div className={style.value__wrraper}>
									<div className={style["value__circle-block"]}>
										<div
											style={{
												background: "#49AB3A",
											}}
										></div>
										<p>Website visitis</p>
									</div>
									<div className={style["value__bottom-data"]}>
										<p>501</p>
										<p>40%</p>
									</div>
								</div>
								<div className={style.value__wrraper}>
									<div className={style["value__circle-block"]}>
										<div
											style={{
												background: "#EDCE54",
											}}
										></div>
										<p>Messages</p>
									</div>
									<div className={style["value__bottom-data"]}>
										<p>132</p>
										<p>11%</p>
									</div>
								</div>
								<div className={style.value__wrraper}>
									<div className={style["value__circle-block"]}>
										<div
											style={{
												background: "#BE8A6C",
											}}
										></div>
										<p>CTA clicks</p>
									</div>
									<div className={style["value__bottom-data"]}>
										<p>10</p>
										<p>10%</p>
									</div>
								</div>
								<div className={style.value__wrraper}>
									<div className={style["value__circle-block"]}>
										<div
											style={{
												background: "#EF4D56",
											}}
										></div>
										<p>Directions & Map views</p>
									</div>
									<div className={style["value__bottom-data"]}>
										<p>300</p>
										<p>25%</p>
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
	);
}
