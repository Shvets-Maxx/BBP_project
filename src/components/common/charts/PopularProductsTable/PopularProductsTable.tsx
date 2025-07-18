// import { FC, useState } from "react";
// import {
// 	Avatar,
// 	Table,
// 	TableBody,
// 	TableCell,
// 	TableContainer,
// 	TableHead,
// 	TableRow,
// 	TablePagination,
// 	Select,
// 	MenuItem,
// 	IconButton,
// 	SelectChangeEvent,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { Period } from "@/features/profile/types";
// import { products } from "@/features/profile/constants.ts";

// const ROWS_PER_PAGE = 5;

// const PopularProductsTable: FC = () => {
// 	const [page, setPage] = useState<number>(0);
// 	const [period, setPeriod] = useState<Period>("This month");

// 	const handleChangePage = (_: unknown, newPage: number) => {
// 		setPage(newPage);
// 	};

// 	const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
// 		setPeriod(event.target.value as Period);
// 	};

// 	const pagedProducts = products.slice(
// 		page * ROWS_PER_PAGE,
// 		page * ROWS_PER_PAGE + ROWS_PER_PAGE,
// 	);

// 	return (
// 		<div
// 			style={{
// 				border: "1px solid #e0e0e0",
// 				borderRadius: 12,
// 				padding: 24,
// 				backgroundColor: "#fff",
// 			}}
// 		>
// 			{/* Header */}
// 			<div
// 				style={{
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 					marginBottom: 16,
// 				}}
// 			>
// 				<h3 style={{ margin: 0, font: 'normal 400 24px "PT Serif", sans-serif' }}>
// 					Popular products
// 				</h3>
// 				<Select
// 					value={period}
// 					onChange={handlePeriodChange}
// 					size="small"
// 					variant="standard"
// 					disableUnderline
// 					style={{ fontSize: 14 }}
// 				>
// 					<MenuItem value="This month">This month</MenuItem>
// 					<MenuItem value="Last month">Last month</MenuItem>
// 				</Select>
// 			</div>

// 			{/* Table */}
// 			<TableContainer>
// 				<Table size="small">
// 					<TableHead>
// 						<TableRow>
// 							<TableCell>ID</TableCell>
// 							<TableCell>Product</TableCell>
// 							<TableCell>Price</TableCell>
// 							<TableCell>Availability</TableCell>
// 							<TableCell>Sell</TableCell>
// 							<TableCell>Action</TableCell>
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>
// 						{pagedProducts.map((product) => (
// 							<TableRow key={product.id + product.image}>
// 								<TableCell>{product.id}</TableCell>
// 								<TableCell>
// 									<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// 										<Avatar
// 											src={product.image}
// 											variant="rounded"
// 											sx={{ width: 40, height: 40 }}
// 										/>
// 										<span
// 											style={{
// 												color: product.availability === "Out of stock" ? "#888" : "#000",
// 											}}
// 										>
// 											{product.name}
// 										</span>
// 									</div>
// 								</TableCell>
// 								<TableCell>
// 									{product.discount ? (
// 										<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
// 											<span
// 												style={{
// 													backgroundColor: "#fcae92",
// 													color: "#fff",
// 													fontSize: 10,
// 													padding: "2px 6px",
// 													borderRadius: 4,
// 												}}
// 											>
// 												{product.discount}
// 											</span>
// 											<strong>${product.price}</strong>
// 											{product.oldPrice && (
// 												<span
// 													style={{
// 														textDecoration: "line-through",
// 														color: "#aaa",
// 														fontSize: 12,
// 													}}
// 												>
// 													${product.oldPrice}
// 												</span>
// 											)}
// 										</div>
// 									) : (
// 										<strong>${product.price}</strong>
// 									)}
// 								</TableCell>
// 								<TableCell>
// 									<span
// 										style={{
// 											border: `1px solid ${
// 												product.availability === "In stock" ? "green" : "red"
// 											}`,
// 											color: product.availability === "In stock" ? "green" : "red",
// 											borderRadius: 8,
// 											padding: "2px 8px",
// 											fontSize: 12,
// 											fontWeight: 500,
// 										}}
// 									>
// 										{product.availability}
// 									</span>
// 								</TableCell>
// 								<TableCell>{product.sell}</TableCell>
// 								<TableCell>
// 									<IconButton size="small">
// 										<VisibilityIcon fontSize="small" />
// 									</IconButton>
// 								</TableCell>
// 							</TableRow>
// 						))}
// 					</TableBody>
// 				</Table>
// 			</TableContainer>

// 			{/* Pagination */}
// 			<div
// 				style={{
// 					display: "flex",
// 					justifyContent: "space-between",
// 					alignItems: "center",
// 					marginTop: 16,
// 				}}
// 			>
// 				<span style={{ fontSize: 12 }}>
// 					Showing {page * ROWS_PER_PAGE + 1}-
// 					{Math.min((page + 1) * ROWS_PER_PAGE, products.length)} of{" "}
// 					{products.length} entries
// 				</span>
// 				<TablePagination
// 					component="div"
// 					count={products.length}
// 					page={page}
// 					onPageChange={handleChangePage}
// 					rowsPerPage={ROWS_PER_PAGE}
// 					rowsPerPageOptions={[]}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default PopularProductsTable;

import { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./PopularProductsTable.module.sass";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

const TOTAL_PAGES = Math.ceil(orders.length / ROWS_PER_PAGE);

function PopularProductsTable() {
	const [page, setPage] = useState(0);

	const pagedOrders = orders.slice(
		page * ROWS_PER_PAGE,
		page * ROWS_PER_PAGE + ROWS_PER_PAGE,
	);

	const visiblePages = () => {
		if (TOTAL_PAGES <= 5) return Array.from({ length: TOTAL_PAGES }, (_, i) => i);
		if (page <= 1) return [0, 1, "...", TOTAL_PAGES - 1];
		if (page >= TOTAL_PAGES - 2)
			return [0, "...", TOTAL_PAGES - 2, TOTAL_PAGES - 1];
		return [0, "...", page, "...", TOTAL_PAGES - 1];
	};

	return (
		<div className={style.product}>
			<div style={{ overflowX: "auto" }}>
				<div style={{ minWidth: 520 }}>
					<div className={style.product__header}>
						<div style={{ width: 70 }}>
							<p>ID</p>
						</div>
						<div style={{ width: 180 }}>
							<p>Product</p>
						</div>
						<div style={{ width: 80 }}>
							<p>Price</p>
						</div>
						<div style={{ width: 120 }}>
							<p>Availability</p>
						</div>
						<div style={{ width: 80 }}>
							<p>Sell</p>
						</div>
						<div style={{ width: 50 }}>
							<p>Action</p>
						</div>
					</div>

					{pagedOrders.map((order, idx) => (
						<div className={style.product__content} key={idx}>
							<div className={style.product__id}>
								<p>{order.id}</p>
							</div>
							<div className={style["product__produt-name"]}>
								<Avatar
									sx={{ width: 32, height: 32 }}
									src={order.customer.avatar}
									alt={order.customer.name}
								/>
								<p>{order.customer.name}</p>
							</div>
							<div className={style.product__price}>
								<p style={{ fontWeight: 600, width: 80 }}>{order.price}</p>
							</div>
							<div className={style.product__status}>
								<p>
									<span
										style={{
											color: order.status === "In Stock" ? "#49AB3A" : "#EF4D56",
											borderColor: order.status === "In Stock" ? "#49AB3A" : "#EF4D56",
										}}
									>
										{order.status}
									</span>
								</p>
							</div>

							<div className={style.product__sell}>
								<p style={{ fontWeight: 600 }}>{order.sell}</p>
							</div>
							<div className={style.product__view}>
								<IconButton size="small">
									<VisibilityIcon fontSize="small" />
								</IconButton>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={style.pagination}>
				<p>
					Showing {page * ROWS_PER_PAGE + 1}-
					{Math.min((page + 1) * ROWS_PER_PAGE, orders.length)} of {orders.length}{" "}
					entries
				</p>
				<div className={style.pagination__block}>
					<button
						onClick={() => setPage(Math.max(page - 1, 0))}
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
								onClick={() => setPage(p as number)}
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
						onClick={() => setPage(Math.min(page + 1, TOTAL_PAGES - 1))}
						disabled={page === TOTAL_PAGES - 1}
					>
						<img style={{ transform: "rotate(-90deg)" }} src={ArrowIconSrc} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default PopularProductsTable;
