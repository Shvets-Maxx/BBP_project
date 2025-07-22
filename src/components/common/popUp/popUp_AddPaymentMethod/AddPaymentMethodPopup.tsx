import React, { useState } from "react";
import style from "./AddPaymentMethodPopup.module.sass";
import Google_Pay_Logo from "./Google_Pay_Logo.svg";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
type PaymentMethod = "credit-card" | "google-pay" | "paypal";

type AddPaymentMethodPopupProps = {
	onClose: () => void;
	onNext: (method: PaymentMethod) => void;
};

export const AddPaymentMethodPopup: React.FC<AddPaymentMethodPopupProps> = ({
	onClose,
	onNext,
}) => {
	const [selected, setSelected] = useState<PaymentMethod>("credit-card");

	return (
		<div className={style.payment}>
			<div className={style.payment__container}>
				<div className={style.payment__block}>
					<div className={style.payment__header}>
						<h1>Add payment method</h1>
						<IconButton onClick={onClose} size="small">
							<div className={style["information__edit-icon"]}>
								<CloseOutlinedIcon fontSize="small" />
							</div>
						</IconButton>
					</div>
					<div className={style.popup__block}>
						<div
							className={`${style.popup__method} ${selected === "credit-card" ? style["active"] : ""}`}
							onClick={() => setSelected("credit-card")}
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
								alt="Mastercard"
							/>
							<span>Credit card</span>
						</div>
						<div
							className={`${style.popup__method} ${selected === "google-pay" ? style["active"] : ""}`}
							onClick={() => setSelected("google-pay")}
						>
							<img src={Google_Pay_Logo} alt="Google Pay" />
							<span>Google Pay</span>
						</div>
						<div
							className={`${style.popup__method} ${selected === "paypal" ? style["active"] : ""}`}
							onClick={() => setSelected("paypal")}
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
								alt="Paypal"
							/>
							<span>Paypal</span>
						</div>
					</div>
					<div className={style.payment__button}>
						<button className={style.popup__submit} onClick={() => onNext(selected)}>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
