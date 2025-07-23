import { FC, useState } from "react";
import dandruff from "../assets/dandruff.svg";
import style from "./Searches.module.sass";
// Типізований масив термінів пошуку
const searchTerms = [
	{ term: "Embroidery", count: 2370 },
	{ term: "Embroidery Los Angeles", count: 581 },
	{ term: "Embroidery near me", count: 521 },
	{ term: "Embroidery shop", count: 440 },
	{ term: "The embroidery shop", count: 279 },
	{ term: "Handmade embroidery", count: 210 },
	{ term: "Custom embroidery", count: 180 },
	{ term: "Embroidery classes", count: 150 },
	{ term: "Embroidery designs", count: 130 },
	{ term: "Embroidery store", count: 120 },
];

const Searches: FC = () => {
	const [visibleCount, setVisibleCount] = useState(5);

	const INITIAL_COUNT = 5;
	const handleToggle = () => {
		setVisibleCount((prev) =>
			prev === INITIAL_COUNT ? searchTerms.length : INITIAL_COUNT,
		);
	};

	return (
		<div
			style={{
				width: "100%",
				padding: 24,
				borderRadius: 16,
				backgroundColor: "#fff",
				boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
			className={style.searches}
		>
			{/* Header */}
			<div
				style={{
					display: "flex",
					alignItems: "start",
					gap: "16px",
					marginBottom: "32px",
				}}
			>
				<div
					style={{
						backgroundColor: "#FFE5D7",
						width: "36px",
						height: "36px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "5px",
						minWidth: "40px",
					}}
				>
					<img src={dandruff} alt="" />
				</div>
				<div className={style.searches__title}>
					<h3
						style={{
							margin: 0,
							font: "normal 400 32px Open Sans",
						}}
					>
						4564
					</h3>
					<p
						style={{
							margin: 0,
							font: "normal 400 14px Open Sans",
						}}
					>
						Searches showed your Business Profile in the search results
					</p>
				</div>
			</div>

			{/* Description */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "6px",
					marginBottom: "20px",
				}}
			>
				<p style={{ font: "normal 400 14px Open Sans" }}>Searches breakdown</p>
				<p style={{ color: "grey", font: "normal 400 14px Open Sans" }}>
					Searches terms that showed your Business Profile in the search results
				</p>
			</div>

			{/* Search List */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				{searchTerms.slice(0, visibleCount).map((item, index) => (
					<div
						key={index}
						style={{
							display: "flex",
							justifyContent: "space-between",
							font: "normal 400 14px Open Sans",
							paddingBottom: 4,
						}}
					>
						<span style={{ color: "black" }}>
							{index + 1}. {item.term}
						</span>
						<span style={{ color: "black" }}>{item.count}</span>
					</div>
				))}
			</div>

			{/* Show More Button */}
			{searchTerms.length > INITIAL_COUNT && (
				<button
					onClick={handleToggle}
					style={{
						margin: " 0 auto",
						marginTop: 24,
						alignSelf: "flex-start",
						padding: "9px 24px",
						borderRadius: 8,
						border: "1px solid #000",
						backgroundColor: "#fff",
						cursor: "pointer",
						font: "normal 400 18px Open Sans",
					}}
				>
					{visibleCount === INITIAL_COUNT ? "See more" : "See less"}
				</button>
			)}
		</div>
	);
};

export default Searches;
