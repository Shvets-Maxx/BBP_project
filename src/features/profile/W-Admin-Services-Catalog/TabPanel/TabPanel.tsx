// import { useState } from "react";
// import styles from "./TabPanel.module.sass";
// // import { comments } from "../../../profile/constants.ts";
// import tshirt from "./assets/tshirt.jpeg";
// import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

// // --- Типи та константи ---
// type TimeZoneOption = "All categories";

// const TIME_ZONES: TimeZoneOption[] = ["All categories"];

// const clothes = Array.from({ length: 20 }, (_, i) => ({
// 	id: i + 1,
// 	title: `Product ${i + 1}`,
// 	price: (49 + i).toFixed(2),
// 	inStock: i % 2 === 0,
// }));

// // --- Dropdown зі стрілкою ---
// const DropdownIcon = (props: { className?: string }) => (
// 	<img
// 		{...props}
// 		src={ArrowIconSrc}
// 		alt="arrow"
// 		style={{ width: 24, height: 24, display: "block", pointerEvents: "none" }}
// 	/>
// );

// // --- Пагінація ---
// const ROWS_PER_PAGE = 6;

// // function Pagination({
// // 	page,
// // 	count,
// // 	onPageChange,
// // }: {
// // 	page: number;
// // 	count: number;
// // 	onPageChange: (newPage: number) => void;
// // }) {
// // 	const pages = Array.from({ length: count }, (_, i) => i);

// // 	return (
// // 		<div
// // 			style={{
// // 				display: "flex",
// // 				justifyContent: "space-between",
// // 				alignItems: "center",
// // 			}}
// // 		>
// // 			<p style={{ color: "grey", font: "400 14px Open Sans" }}>
// // 				Showing 1-10 of 24 entries
// // 			</p>
// // 			<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
// // 				<button onClick={() => onPageChange(page - 1)} disabled={page === 0}>
// // 					‹
// // 				</button>
// // 				{pages.map((p) => (
// // 					<button
// // 						key={p}
// // 						onClick={() => onPageChange(p)}
// // 						style={{
// // 							color: p === page ? "#ED805B" : "black",
// // 							cursor: "pointer",
// // 							border: "none",
// // 							background: "none",
// // 							padding: "4px 8px",
// // 							fontSize: 16,
// // 						}}
// // 					>
// // 						{p + 1}
// // 					</button>
// // 				))}
// // 				<button
// // 					onClick={() => onPageChange(page + 1)}
// // 					disabled={page === count - 1}
// // 				>
// // 					›
// // 				</button>
// // 			</div>
// // 		</div>
// // 	);
// // }
// function Pagination({
// 	page,
// 	count,
// 	onPageChange,
// }: {
// 	page: number;
// 	count: number;
// 	onPageChange: (newPage: number) => void;
// }) {
// 	const TOTAL_PAGES = count;

// 	const visiblePages = () => {
// 		if (TOTAL_PAGES <= 5) return Array.from({ length: TOTAL_PAGES }, (_, i) => i);
// 		if (page <= 1) return [0, 1, "...", TOTAL_PAGES - 1];
// 		if (page >= TOTAL_PAGES - 2)
// 			return [0, "...", TOTAL_PAGES - 2, TOTAL_PAGES - 1];
// 		return [0, "...", page, "...", TOTAL_PAGES - 1];
// 	};

// 	return (
// 		<div className={styles.pagination}>
// 			<p>
// 				Showing {page * ROWS_PER_PAGE + 1} -{" "}
// 				{Math.min((page + 1) * ROWS_PER_PAGE, count * ROWS_PER_PAGE)} of{" "}
// 				{count * ROWS_PER_PAGE} entries
// 			</p>
// 			<div className={styles.pagination__block}>
// 				<button
// 					onClick={() => onPageChange(Math.max(page - 1, 0))}
// 					disabled={page === 0}
// 				>
// 					<img style={{ transform: "rotate(90deg)" }} src={ArrowIconSrc} alt="" />
// 				</button>
// 				{visiblePages().map((p, idx) =>
// 					p === "..." ? (
// 						<span key={idx} style={{ padding: "0 6px" }}>
// 							...
// 						</span>
// 					) : (
// 						<button
// 							key={p as number}
// 							onClick={() => onPageChange(p as number)}
// 							style={{
// 								padding: "5px 10px",
// 								background: page === p ? "#ddd" : "transparent",
// 								borderRadius: 6,
// 								border: "none",
// 								cursor: "pointer",
// 								fontWeight: page === p ? 600 : 400,
// 							}}
// 						>
// 							{(p as number) + 1}
// 						</button>
// 					),
// 				)}
// 				<button
// 					onClick={() => onPageChange(Math.min(page + 1, TOTAL_PAGES - 1))}
// 					disabled={page === TOTAL_PAGES - 1}
// 				>
// 					<img style={{ transform: "rotate(-90deg)" }} src={ArrowIconSrc} alt="" />
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// // --- Головний компонент ---
// export default function BasicTabs() {
// 	const [timeZone, setTimeZone] = useState<TimeZoneOption>("All categories");
// 	const [burger, setBurger] = useState<TimeZoneOption | "">("");

// 	const handleTimeZoneChange = (event: SelectChangeEvent<unknown>) => {
// 		setTimeZone(event.target.value as TimeZoneOption);
// 	};

// 	const handleBurgerChange = (event: SelectChangeEvent<unknown>) => {
// 		setBurger(event.target.value as TimeZoneOption);
// 	};

// 	const [pageUnreplied, setPageUnreplied] = useState(0);

// 	const visiblePages = () => {
// 		if (TOTAL_PAGES <= 5) return Array.from({ length: TOTAL_PAGES }, (_, i) => i);
// 		if (page <= 1) return [0, 1, "...", TOTAL_PAGES - 1];
// 		if (page >= TOTAL_PAGES - 2)
// 			return [0, "...", TOTAL_PAGES - 2, TOTAL_PAGES - 1];
// 		return [0, "...", page, "...", TOTAL_PAGES - 1];
// 	};

// 	// const pageCount = Math.ceil(unrepliedComments.length / ROWS_PER_PAGE);
// 	const [page, _setPage] = useState(0);
// 	const pageCount = Math.ceil(clothes.length / ROWS_PER_PAGE);
// 	const TOTAL_PAGES = pageCount;
// 	const visibleItems = clothes.slice(
// 		page * ROWS_PER_PAGE,
// 		(page + 1) * ROWS_PER_PAGE,
// 	);

// 	return (
// 		<div className={styles.catalog}>
// 			<div className={styles.catalog__container}>
// 				<div className={styles.header}>
// 					<div className={styles.header__selectWrapper}>
// 						<Select
// 							className={styles.header__select}
// 							value={timeZone}
// 							onChange={handleTimeZoneChange}
// 							IconComponent={DropdownIcon}
// 						>
// 							{TIME_ZONES.map((value) => (
// 								<MenuItem key={value} value={value}>
// 									{value}
// 								</MenuItem>
// 							))}
// 						</Select>
// 					</div>

// 					<div className={styles.header__block}>
// 						<div className={styles.header__selectWrapper}>
// 							<Select
// 								className={`${styles.header__select} ${styles["header__select--border"]} ${styles["header__select--padding"]}`}
// 								value={timeZone}
// 								onChange={handleTimeZoneChange}
// 								IconComponent={DropdownIcon}
// 							>
// 								{TIME_ZONES.map((value) => (
// 									<MenuItem key={value} value={value}>
// 										{value}
// 									</MenuItem>
// 								))}
// 							</Select>
// 						</div>

// 						<div className={styles.header__selectWrapper}>
// 							<Select
// 								className={`${styles.header__select} ${styles["header__select--border"]} ${styles["header__select--burger"]}`}
// 								value={burger}
// 								onChange={handleBurgerChange}
// 								IconComponent={MenuIcon}
// 								renderValue={() => null} // ⛔ приховує текст біля іконки
// 								displayEmpty
// 							>
// 								{TIME_ZONES.map((value) => (
// 									<MenuItem key={value} value={value}>
// 										{value}
// 									</MenuItem>
// 								))}
// 							</Select>
// 						</div>
// 					</div>
// 				</div>
// 				<div className={styles.clothes}>
// 					{visibleItems.map((item) => (
// 						<div key={item.id} className={styles.clothes__block}>
// 							<div className={styles.clothes__img}>
// 								<img src={tshirt} alt="" />
// 							</div>
// 							<div className={styles.clothes__info}>
// 								<div className={styles.clothes__size}>
// 									<p>#{item.id}</p>
// 									<p>4 Sizes</p>
// 								</div>
// 								<div className={styles.clothes__name}>
// 									<p>{item.title}</p>
// 								</div>
// 								<div className={styles.clothes__stock}>
// 									<p>{item.inStock ? "In stock" : "Out of stock"}</p>
// 								</div>
// 								<div className={styles.clothes__prise}>
// 									<p>${item.price}</p>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>

// 				{/* <Pagination
// 					page={pageUnreplied}
// 					count={pageCount}
// 					onPageChange={setPageUnreplied}
// 				/> */}
// 				<div className={styles.pagination}>
// 					<p>
// 						Showing {page * ROWS_PER_PAGE + 1} -{" "}
// 						{Math.min((page + 1) * ROWS_PER_PAGE, pageCount * ROWS_PER_PAGE)} of{" "}
// 						{pageCount * ROWS_PER_PAGE} entries
// 					</p>
// 					<div className={styles.pagination__block}>
// 						<button
// 							onClick={() => setPageUnreplied(Math.max(page - 1, 0))}
// 							disabled={page === 0}
// 						>
// 							<img style={{ transform: "rotate(90deg)" }} src={ArrowIconSrc} alt="" />
// 						</button>
// 						{visiblePages().map((p, idx) =>
// 							p === "..." ? (
// 								<span key={idx} style={{ padding: "0 6px" }}>
// 									...
// 								</span>
// 							) : (
// 								<button
// 									key={p as number}
// 									onClick={() => setPageUnreplied(p as number)}
// 									style={{
// 										padding: "5px 10px",
// 										background: page === p ? "#ddd" : "transparent",
// 										borderRadius: 6,
// 										border: "none",
// 										cursor: "pointer",
// 										fontWeight: page === p ? 600 : 400,
// 									}}
// 								>
// 									{(p as number) + 1}
// 								</button>
// 							),
// 						)}
// 						<button
// 							onClick={() => setPageUnreplied(Math.min(page + 1, TOTAL_PAGES - 1))}
// 							disabled={page === TOTAL_PAGES - 1}
// 						>
// 							<img style={{ transform: "rotate(-90deg)" }} src={ArrowIconSrc} alt="" />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
import { useState } from "react";
import styles from "./TabPanel.module.sass";
import tshirt from "./assets/tshirt.jpeg";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

type TimeZoneOption = "All categories";
const TIME_ZONES: TimeZoneOption[] = ["All categories"];
const ROWS_PER_PAGE = 6;

const clothes = Array.from({ length: 20 }, (_, i) => ({
	id: i + 1,
	title: `Product ${i + 1}`,
	price: (49 + i).toFixed(2),
	inStock: i % 2 === 0,
}));

const DropdownIcon = (props: { className?: string }) => (
	<img
		{...props}
		src={ArrowIconSrc}
		alt="arrow"
		style={{ width: 24, height: 24, display: "block", pointerEvents: "none" }}
	/>
);

export default function BasicTabs() {
	const [timeZone, setTimeZone] = useState<TimeZoneOption>("All categories");
	const [burger, setBurger] = useState<TimeZoneOption | "">("");
	const [page, setPage] = useState(0);

	const pageCount = Math.ceil(clothes.length / ROWS_PER_PAGE);
	const visibleItems = clothes.slice(
		page * ROWS_PER_PAGE,
		(page + 1) * ROWS_PER_PAGE,
	);

	const handleTimeZoneChange = (event: SelectChangeEvent<unknown>) => {
		setTimeZone(event.target.value as TimeZoneOption);
	};
	const handleBurgerChange = (event: SelectChangeEvent<unknown>) => {
		setBurger(event.target.value as TimeZoneOption);
	};

	const visiblePages = () => {
		if (pageCount <= 5) return Array.from({ length: pageCount }, (_, i) => i);
		if (page <= 1) return [0, 1, "...", pageCount - 1];
		if (page >= pageCount - 2) return [0, "...", pageCount - 2, pageCount - 1];
		return [0, "...", page, "...", pageCount - 1];
	};

	return (
		<div className={styles.catalog}>
			<div className={styles.catalog__container}>
				<div className={styles.header}>
					<div className={styles.header__selectWrapper}>
						<Select
							className={styles.header__select}
							value={timeZone}
							onChange={handleTimeZoneChange}
							IconComponent={DropdownIcon}
						>
							{TIME_ZONES.map((value) => (
								<MenuItem key={value} value={value}>
									{value}
								</MenuItem>
							))}
						</Select>
					</div>

					<div className={styles.header__block}>
						<div className={styles.header__selectWrapper}>
							<Select
								className={`${styles.header__select} ${styles["header__select--border"]} ${styles["header__select--padding"]}`}
								value={timeZone}
								onChange={handleTimeZoneChange}
								IconComponent={DropdownIcon}
							>
								{TIME_ZONES.map((value) => (
									<MenuItem key={value} value={value}>
										{value}
									</MenuItem>
								))}
							</Select>
						</div>

						<div className={styles.header__selectWrapper}>
							<Select
								className={`${styles.header__select} ${styles["header__select--border"]} ${styles["header__select--burger"]}`}
								value={burger}
								onChange={handleBurgerChange}
								IconComponent={MenuIcon}
								renderValue={() => null}
								displayEmpty
							>
								{TIME_ZONES.map((value) => (
									<MenuItem key={value} value={value}>
										{value}
									</MenuItem>
								))}
							</Select>
						</div>
					</div>
				</div>

				<div className={styles.clothes}>
					{visibleItems.map((item) => (
						<div key={item.id} className={styles.clothes__block}>
							<div className={styles.clothes__img}>
								<img src={tshirt} alt="" />
							</div>
							<div className={styles.clothes__info}>
								<div className={styles.clothes__size}>
									<p>#{item.id}</p>
									<p>4 Sizes</p>
								</div>
								<div className={styles.clothes__name}>
									<p>{item.title}</p>
								</div>
								<div className={styles.clothes__stock}>
									<p>{item.inStock ? "In stock" : "Out of stock"}</p>
								</div>
								<div className={styles.clothes__prise}>
									<p>${item.price}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className={styles.pagination}>
					<p>
						Showing {page * ROWS_PER_PAGE + 1} -{" "}
						{Math.min((page + 1) * ROWS_PER_PAGE, clothes.length)} of {clothes.length}{" "}
						entries
					</p>
					<div className={styles.pagination__block}>
						<button
							onClick={() => setPage(Math.max(0, page - 1))}
							disabled={page === 0}
						>
							<img style={{ transform: "rotate(90deg)" }} src={ArrowIconSrc} alt="" />
						</button>
						{visiblePages().map((p, idx) =>
							p === "..." ? (
								<span key={idx} style={{ padding: "0 6px" }}>
									...
								</span>
							) : (
								<button
									key={p}
									onClick={() => setPage(Number(p))}
									style={{
										padding: "5px 10px",
										background: page === p ? "#ddd" : "transparent",
										borderRadius: 6,
										border: "none",
										cursor: "pointer",
										fontWeight: page === p ? 600 : 400,
									}}
								>
									{Number(p) + 1}
								</button>
							),
						)}
						<button
							onClick={() => setPage(Math.min(page + 1, pageCount - 1))}
							disabled={page === pageCount - 1}
						>
							<img style={{ transform: "rotate(-90deg)" }} src={ArrowIconSrc} alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
