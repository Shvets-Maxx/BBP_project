import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import style from "./TabPanel.module.sass";
import { comments } from "../../../profile/constants.ts";
import { CommentItem } from "../CommentItem/CommentItem.tsx";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

const ROWS_PER_PAGE = 5;

const orders = Array.from({ length: 24 }, (_, i) => ({
	id: "#51973",
	customer: {
		name: "In a better word",
		avatar: "",
	},
	status: i % 3 === 0 ? "In Stock" : "Out of stock",
	price: "$1500",
	sell: "450",
}));

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			className={style["tabs-content__body"]}
		>
			{value === index && (
				<div className={style["tabs-content__block"]}>{children}</div>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
function Pagination({
	page,
	count,
	onPageChange,
}: {
	page: number;
	count: number;
	onPageChange: (newPage: number) => void;
}) {
	const visiblePages = () => {
		if (count <= 5) return Array.from({ length: count }, (_, i) => i);
		if (page <= 1) return [0, 1, "...", count - 1];
		if (page >= count - 2) return [0, "...", count - 2, count - 1];
		return [0, "...", page, "...", count - 1];
	};

	return (
		<div className={style.pagination}>
			<p>
				Showing {page * ROWS_PER_PAGE + 1}-
				{Math.min((page + 1) * ROWS_PER_PAGE, orders.length)} of {orders.length}{" "}
				entries
			</p>
			<div className={style.pagination__block}>
				<button
					onClick={() => onPageChange(Math.max(page - 1, 0))}
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
							key={p as number}
							onClick={() => onPageChange(p as number)}
							style={{
								padding: "5px 10px",
								background: page === p ? "#ddd" : "transparent",
								borderRadius: 6,
								border: "none",
								cursor: "pointer",
								fontWeight: page === p ? 600 : 400,
							}}
						>
							{(p as number) + 1}
						</button>
					),
				)}
				<button
					onClick={() => onPageChange(Math.min(page + 1, count - 1))}
					disabled={page === count - 1}
				>
					<img style={{ transform: "rotate(-90deg)" }} src={ArrowIconSrc} alt="" />
				</button>
			</div>
		</div>
	);
}

export default function BasicTabs() {
	const [value, setValue] = useState(0);

	// Сторінки для кожної вкладки
	const [pageAll, setPageAll] = useState(0);
	const [pageReplied, setPageReplied] = useState(0);
	const [pageUnreplied, setPageUnreplied] = useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	// Фільтрація коментарів
	const repliedComments = comments;

	const unrepliedComments = comments.filter(
		(c) => !c.content.toLowerCase().includes("reply"),
	);

	// Пагінація (різання масиву)
	const paginate = (items: typeof comments, page: number) =>
		items.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);

	// Рендер коментарів на сторінці
	const renderComments = (items: typeof comments, page: number) => (
		<div key={page}>
			{paginate(items, page).map((c) => (
				<CommentItem key={c.datetime + c.author} {...c} />
			))}
		</div>
	);
	// Кількість сторінок
	const getPageCount = (length: number) => Math.ceil(length / ROWS_PER_PAGE);

	return (
		<div className={style.container}>
			<div className={style.container__block}>
				<div className={style["tabs-panel"]}>
					<Tabs
						className={style["tabs-panel__block"]}
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							className={style["tabs-panel__title"]}
							label="All"
							{...a11yProps(0)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Replied"
							{...a11yProps(1)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Unreplied"
							{...a11yProps(2)}
						/>
					</Tabs>
				</div>

				<div className={style["tabs-content"]}>
					{/* Вкладка All */}
					<CustomTabPanel value={value} index={0}>
						{renderComments(comments, pageAll)}
						<Pagination
							page={pageAll}
							count={getPageCount(comments.length)}
							onPageChange={(p) => setPageAll(p)}
						/>
					</CustomTabPanel>

					{/* Вкладка Replied */}
					<CustomTabPanel value={value} index={1}>
						{renderComments(repliedComments, pageReplied)}
						<Pagination
							page={pageReplied}
							count={getPageCount(repliedComments.length)}
							onPageChange={(p) => setPageReplied(p)}
						/>
					</CustomTabPanel>

					{/* Вкладка Unreplied */}
					<CustomTabPanel value={value} index={2}>
						{renderComments(unrepliedComments, pageUnreplied)}
						<Pagination
							page={pageUnreplied}
							count={getPageCount(unrepliedComments.length)}
							onPageChange={(p) => setPageUnreplied(p)}
						/>
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
}
