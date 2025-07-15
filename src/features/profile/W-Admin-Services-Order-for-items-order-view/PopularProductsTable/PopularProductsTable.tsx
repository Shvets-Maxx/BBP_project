import { useState } from "react";
import { Avatar } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import style from "./PopularProductsTable.module.sass";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

const ROWS_PER_PAGE = 4;

const sizesList = ["Xs", "S", "M", "L", "XL"];

const initialOrders = Array.from({ length: 24 }, (_) => ({
	product: {
		name: "In a better word T-Shirt",
		number: `#51973`,
		avatar: "Avatar",
	},
	color: "Green",
	sizeIndex: 1, // S
	quantity: 1,
	prise: "$59",
	total: "$230",
}));

const TOTAL_PAGES = Math.ceil(initialOrders.length / ROWS_PER_PAGE);

function PopularOrders() {
	const [page, setPage] = useState(0);
	const [orders, setOrders] = useState(initialOrders);
	const [openDropdown, setOpenDropdown] = useState<number | null>(null);

	const pagedOrders = orders.slice(
		page * ROWS_PER_PAGE,
		page * ROWS_PER_PAGE + ROWS_PER_PAGE,
	);

	const handleColorChange = (index: number, newColor: string) => {
		setOrders((prev) => {
			const updated = [...prev];
			updated[page * ROWS_PER_PAGE + index].color = newColor;
			return updated;
		});
	};

	const handleSizeChange = (index: number, delta: number) => {
		setOrders((prev) => {
			const updated = [...prev];
			const globalIndex = page * ROWS_PER_PAGE + index;
			let newIndex = updated[globalIndex].sizeIndex + delta;
			newIndex = Math.max(0, Math.min(sizesList.length - 1, newIndex));
			updated[globalIndex].sizeIndex = newIndex;
			return updated;
		});
	};

	const handleQuantityChange = (index: number, delta: number) => {
		setOrders((prev) => {
			const updated = [...prev];
			const globalIndex = page * ROWS_PER_PAGE + index;
			const current = updated[globalIndex].quantity;
			const newQuantity = Math.max(1, current + delta);
			updated[globalIndex].quantity = newQuantity;
			return updated;
		});
	};

	const visiblePages = () => {
		if (TOTAL_PAGES <= 5) return Array.from({ length: TOTAL_PAGES }, (_, i) => i);
		if (page <= 1) return [0, 1, "...", TOTAL_PAGES - 1];
		if (page >= TOTAL_PAGES - 2)
			return [0, "...", TOTAL_PAGES - 2, TOTAL_PAGES - 1];
		return [0, "...", page, "...", TOTAL_PAGES - 1];
	};

	return (
		<div className={style.product}>
			<div className={style.product__header}>
				<h1>Order #51973</h1>
				<p>15 March 2025 at 09:15 am was created</p>
			</div>

			<div style={{ overflowX: "scroll" }}>
				<div style={{ minWidth: "560px" }}>
					<div className={style["product__header-table"]}>
						<div style={{ width: "220px" }}>
							<p>Product</p>
						</div>
						<div style={{ width: "50px" }}>
							<p>Color</p>
						</div>
						<div style={{ width: "50px" }}>
							<p>Prise</p>
						</div>
						<div style={{ width: "80px" }}>
							<p>Size</p>
						</div>
						<div style={{ width: "80px" }}>
							<p>Quantity</p>
						</div>
						<div style={{ width: "60px" }}>
							<p>Total</p>
						</div>
					</div>

					<div className={style["product__content-block"]}>
						{pagedOrders.map((_, idx) => {
							const globalIndex = page * ROWS_PER_PAGE + idx;
							const order = orders[globalIndex];

							return (
								<div className={style.product__content} key={globalIndex}>
									{/* Product Info */}
									<div
										style={{
											width: "220px",
											display: "flex",
											gap: 10,
										}}
									>
										<Avatar
											sx={{ width: 42, height: 42, borderRadius: "8px" }}
											src={order.product.avatar}
											alt={order.product.name}
										/>
										<div style={{ display: "flex", flexDirection: "column" }}>
											<p>{order.product.name}</p>
											<p>{order.product.number}</p>
										</div>
									</div>

									<div style={{ position: "relative" }}>
										<div
											style={{
												width: "50px",
												justifyContent: "center",
												display: "flex",
												alignItems: "center",
												cursor: "pointer",
												gap: 8,
											}}
											onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
										>
											{/* Колір як кружечок */}
											<div
												style={{
													width: 20,
													height: 20,
													borderRadius: "50%",
													backgroundColor: order.color.toLowerCase(),
													border: "1px solid #ccc",
												}}
											/>
											{/* Трохи відступ */}
											{/* Залишити текст кольору необов’язково, якщо хочеш - можна */}
											<img
												src={ArrowIconSrc}
												style={{
													width: 16,
													transform:
														openDropdown === idx ? "rotate(180deg)" : "rotate(0deg)",
													transition: "transform 0.2s",
												}}
												alt="arrow"
											/>
										</div>
										<AnimatePresence>
											{openDropdown === idx && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													transition={{ duration: 0.2 }}
													style={{
														position: "absolute",
														background: "white",
														border: "1px solid #ddd",
														borderRadius: 4,
														marginTop: 4,
														zIndex: 5,
													}}
												>
													{["Green", "Black", "White"].map((color) => (
														<div
															key={color}
															onClick={() => {
																handleColorChange(idx, color);
																setOpenDropdown(null);
															}}
															style={{
																padding: "8px 12px",
																cursor: "pointer",
																display: "flex",
																alignItems: "center",
																gap: 8,
															}}
														>
															{/* Кружечок для вибору */}
															<div
																style={{
																	width: 20,
																	height: 20,
																	borderRadius: "50%",
																	backgroundColor: color.toLowerCase(),
																	border: "1px solid #ccc",
																}}
															/>
															<span>{color}</span>
														</div>
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</div>

									{/* Prise */}
									<div style={{ width: "50px" }}>
										<p>{order.prise}</p>
									</div>

									{/* Size Change */}
									<div
										style={{
											width: "80px",
											display: "flex",
											alignItems: "center",
										}}
									>
										<button
											onClick={() => handleSizeChange(idx, -1)} // передаємо локальний індекс + -1
											style={{
												borderRadius: 4,
												cursor: "pointer",
												background: "#EBEBED",
											}}
											disabled={order.sizeIndex === 0} // тут вже локальний розмір з обʼєкту order
										>
											–
										</button>
										<p style={{ minWidth: 30, textAlign: "center" }}>
											{sizesList[order.sizeIndex]} {/* локальний розмір */}
										</p>
										<button
											onClick={() => handleSizeChange(idx, 1)} // +1
											style={{
												borderRadius: 4,
												cursor: "pointer",
												background: "#EBEBED",
											}}
											disabled={order.sizeIndex === sizesList.length - 1}
										>
											+
										</button>
									</div>

									{/* Quantity */}
									<div
										style={{
											width: "80px",
											display: "flex",
											alignItems: "center",
											gap: 8,
										}}
									>
										<button
											onClick={() => handleQuantityChange(idx, -1)}
											style={{
												borderRadius: 4,
												cursor: "pointer",
												background: "#EBEBED",
											}}
										>
											–
										</button>
										<p style={{ minWidth: 20, textAlign: "center" }}>{order.quantity}</p>
										<button
											onClick={() => handleQuantityChange(idx, 1)}
											style={{
												borderRadius: 4,
												cursor: "pointer",
												background: "#EBEBED",
											}}
										>
											+
										</button>
									</div>

									{/* Total */}
									<div style={{ width: "60px" }}>
										<p style={{ fontWeight: 600 }}>{order.total}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Pagination */}
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
