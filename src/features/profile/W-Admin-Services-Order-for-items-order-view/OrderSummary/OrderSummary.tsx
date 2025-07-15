import style from "./OrderSummary.module.sass";

function OrderSummary() {
	return (
		<div className={style.summary}>
			<div className={style.summary__container}>
				<div className={style.summary__header}>
					<h1>Order summary</h1>
				</div>
				<div className={style.summary__price}>
					<div className={style["summary__price-block"]}>
						<p>12 items price:</p>
						<p>$708</p>
					</div>
					<div className={style["summary__price-block"]}>
						<p>Discount: </p>
						<p className={style.summary__discount}>- $130</p>
					</div>
				</div>
				<div className={style.summary__total}>
					<p>Total:</p>
					<p>$578</p>
				</div>
			</div>
		</div>
	);
}

export default OrderSummary;
