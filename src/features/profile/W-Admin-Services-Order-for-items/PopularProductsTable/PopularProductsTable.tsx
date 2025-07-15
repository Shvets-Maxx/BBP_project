import { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./PopularProductsTable.module.sass";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

const ROWS_PER_PAGE = 10;

const orders = Array.from({ length: 24 }, (_, i) => ({
	id: "#51973",
	customer: {
		name: "E. Barrett",
		avatar: "",
	},
	order: "In a better word",
	date: "02.03.2025",
	payment: "Paypal",
	status: i % 3 === 0 ? "Pending" : "Completed",
	price: "$1500",
}));

const TOTAL_PAGES = Math.ceil(orders.length / ROWS_PER_PAGE);

function PopularOrders() {
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
				<div className={style.product__header} style={{ minWidth: 700 }}>
					<div style={{ flex: 1.5, minWidth: 70 }}>
						<p>ID</p>
					</div>
					<div style={{ flex: 2, minWidth: 140 }}>
						<p>Customer</p>
					</div>
					<div style={{ flex: 2, minWidth: 140 }}>
						<p>Order</p>
					</div>
					<div style={{ flex: 2, minWidth: 100 }}>
						<p>Date</p>
					</div>
					<div style={{ flex: 1.5, minWidth: 60 }}>
						<p>Payment</p>
					</div>
					<div style={{ flex: 2, minWidth: 120 }}>
						<p>Status</p>
					</div>
					<div style={{ flex: 1.5, minWidth: 80 }}>
						<p>Price</p>
					</div>
					<div style={{ flex: 1, minWidth: 50 }}>
						<p>Action</p>
					</div>
				</div>

				{pagedOrders.map((order, idx) => (
					<div
						className={style.product__content}
						style={{ minWidth: 700 }}
						key={idx}
					>
						<div style={{ flex: 1.5, minWidth: 70 }}>
							<p>{order.id}</p>
						</div>
						<div
							style={{
								flex: 2,
								minWidth: 140,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 10,
							}}
						>
							<div
								style={{
									border: "1px solid grey",
									borderRadius: "88px",
									padding: "5px 10px 5px 5px",
									display: "flex",
									alignItems: "center",
									gap: "10px",
								}}
							>
								<Avatar
									sx={{ width: 32, height: 32 }}
									src={order.customer.avatar}
									alt={order.customer.name}
								/>
								<p>{order.customer.name}</p>
							</div>
						</div>
						<div style={{ flex: 2, minWidth: 140 }}>
							<p>{order.order}</p>
						</div>
						<div style={{ flex: 2, minWidth: 100 }}>
							<p>{order.date}</p>
						</div>
						<div style={{ flex: 1.5, minWidth: 60 }}>
							<p>{order.payment}</p>
						</div>
						<div style={{ flex: 2, minWidth: 120 }}>
							<p>
								<span
									style={{
										display: "inline-block",
										padding: "4px 12px",
										borderRadius: 16,
										border: "1px solid #ccc",
										background: order.status === "Completed" ? "#f5f5f5" : "#fdfdfd",
										color: "#333",
									}}
								>
									{order.status}
								</span>
							</p>
						</div>
						<div style={{ flex: 1.5, minWidth: 80 }}>
							<p style={{ fontWeight: 600 }}>{order.price}</p>
						</div>
						<div style={{ flex: 1, minWidth: 50 }}>
							<div className={style.view}>
								<p>View</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className={style.pagination}>
				<p>
					Showing {page * ROWS_PER_PAGE + 1}-
					{Math.min((page + 1) * ROWS_PER_PAGE, orders.length)} of {orders.length}{" "}
					entries
				</p>
				<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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

export default PopularOrders;
