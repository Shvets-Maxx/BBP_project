import style from "./HeatMaps.module.sass";
import { useEffect, useState } from "react";
import Map, { Source, Layer, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const ACCESS_TOKEN =
	"pk.eyJ1IjoibWF4LXNodmV0czAwMSIsImEiOiJjbWJoZWZyYmowN215Mm1zYzN6djFqbnJpIn0.oLJC69oe3lu4aN9Y76u-cw";

export default function HeatMaps() {
	const [geojson, setGeojson] = useState<any>(null);

	useEffect(() => {
		const data = {
			type: "FeatureCollection",
			features: [
				// Центр Києва – червоне ядро
				{
					type: "Feature",
					properties: { weight: 1 },
					geometry: { type: "Point", coordinates: [30.5234, 50.4501] },
				},
				{
					type: "Feature",
					properties: { weight: 0.8 },
					geometry: { type: "Point", coordinates: [30.5245, 50.4505] },
				},

				// Навколишні — салатові зони
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.52, 50.451] },
				},
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.53, 50.449] },
				},
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.527, 50.452] },
				},
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.519, 50.448] },
				},
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.518, 50.4525] },
				},
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.533, 50.447] },
				},
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.516, 50.453] },
				},
				{
					type: "Feature",
					properties: { weight: 0.4 },
					geometry: { type: "Point", coordinates: [30.5265, 50.454] },
				},
			],
		};
		setGeojson(data);
	}, []);

	return (
		<div className={style.Trending}>
			<div className={style.Trending__container}>
				<div className={style.statistics}>
					<div className={style.statistics__block}>
						<div className={style["statistics__title-block"]}>
							<p>Where your ad is reaching</p>
							<p>(last 14 days)</p>
							<p>
								Your Yelp ad was shown when users were looking for business in these
								locations over the last 14 days.
							</p>
						</div>
						<Map
							initialViewState={{ longitude: 30.5234, latitude: 50.4501, zoom: 12 }}
							style={{ width: "100%", height: "100%" }}
							mapStyle="mapbox://styles/mapbox/light-v10"
							mapboxAccessToken={ACCESS_TOKEN}
						>
							<NavigationControl position="top-left" />

							{geojson && (
								<Source id="heat" type="geojson" data={geojson}>
									<Layer
										id="heatmap-layer"
										type="heatmap"
										paint={{
											"heatmap-weight": ["get", "weight"],
											"heatmap-intensity": 1,
											"heatmap-radius": 70,
											"heatmap-opacity": 0.8,
											"heatmap-color": [
												"interpolate",
												["linear"],
												["heatmap-density"],
												0,
												"rgba(0,0,0,0)",
												0.05,
												"#e0ffe0", // світло-зелений
												0.2,
												"#b0f3b0", // салатовий
												0.4,
												"#ffff66", // жовтий
												0.6,
												"#ffaa00", // помаранчевий
												1,
												"#ff0000", // червоний
											],
										}}
									/>
								</Source>
							)}
						</Map>
					</div>
				</div>
			</div>
		</div>
	);
}
