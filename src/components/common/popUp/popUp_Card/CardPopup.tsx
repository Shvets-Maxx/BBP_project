import React, { useState } from "react";
import style from "./CardPopup.module.sass";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

type CardPopupProps = {
	mode: "add" | "edit";

	onClose: () => void;
	onBack?: () => void;
};

const formatCardNumber = (value: string) =>
	value
		.replace(/\D/g, "")
		.replace(/(.{4})/g, "$1 ")
		.trim();

const formatExpiration = (value: string) => {
	const cleaned = value.replace(/\D/g, "");
	if (cleaned.length >= 3) {
		return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
	}
	return cleaned;
};

const CardPopup: React.FC<CardPopupProps> = ({ mode, onClose, onBack }) => {
	const [number, setNumber] = useState("1234 5678 9012 3456");
	const [expiration, setExpiration] = useState("06/25");
	const [cvc, setCvc] = useState("123");
	const [zip, setZip] = useState("54321");
	const [country, setCountry] = useState("Country");
	const [showCVC, setShowCVC] = useState(false);

	const handleSubmit = () => {
		const data = { number, expiration, cvc, zip, country };
		console.log(`${mode === "add" ? "Adding" : "Updating"} card:`, data);
		onClose();
	};

	return (
		<div>
			<div className={style.card}>
				<div className={style.card__container}>
					<div className={style.card__block}>
						<div className={style.card__header}>
							{mode === "edit" ? (
								<h1>Edit card</h1>
							) : (
								<div onClick={() => onClose()} className={style["card__header-block"]}>
									<div
										onClick={() => mode === "add" && onBack?.()}
										className={style["card__header-back"]}
									>
										<img src={ArrowIconSrc} alt="Toggle" />
										<p>Back</p>
									</div>

									<h1>Add new card</h1>
								</div>
							)}

							<IconButton onClick={onClose} size="small">
								<div className={style["information__edit-icon"]}>
									<CloseOutlinedIcon fontSize="small" />
								</div>
							</IconButton>
						</div>
						<div className={style["card__main-footer"]}>
							<div className={style.card__main}>
								<div className={style.card__info}>
									<div style={{ width: "100%" }}>
										<div className={style["card__info-block"]}>
											<p>Card number</p>
										</div>
										<input
											type="text"
											name="number"
											className={style.card__input}
											placeholder="1234 5678 9012 3456"
											value={number}
											onChange={(e) => setNumber(formatCardNumber(e.target.value))}
											maxLength={19}
										/>
									</div>
								</div>

								<div className={style.card__info}>
									<div style={{ width: "100%" }}>
										<div className={style["card__info-block"]}>
											<p>Expiration</p>
										</div>
										<input
											type="text"
											name="expiration"
											className={style.card__input}
											placeholder="MM/YY"
											value={expiration}
											onChange={(e) => setExpiration(formatExpiration(e.target.value))}
											maxLength={5}
										/>
									</div>
									<div style={{ width: "100%" }}>
										<div className={style["card__info-block"]}>
											<p>CVC</p>
										</div>
										<div className={style["card__input-icon"]}>
											<input
												type={showCVC ? "text" : "password"}
												name="cvc"
												placeholder="***"
												value={cvc}
												onChange={(e) => setCvc(e.target.value)}
												maxLength={4}
											/>
											<span onClick={() => setShowCVC(!showCVC)}>
												{showCVC ? (
													<VisibilityOffOutlinedIcon fontSize="small" />
												) : (
													<VisibilityOutlinedIcon fontSize="small" />
												)}
											</span>
										</div>
									</div>
								</div>

								<div className={style.card__info}>
									<div style={{ width: "100%" }}>
										<div className={style["card__info-block"]}>
											<p>ZIP</p>
										</div>
										<input
											type="text"
											name="zip"
											className={style.card__input}
											placeholder="Post code"
											value={zip}
											onChange={(e) => setZip(e.target.value)}
										/>
									</div>
									<div style={{ width: "100%" }}>
										<div className={style["card__info-block"]}>
											<p>Country</p>
										</div>
										<input
											type="text"
											name="country"
											className={style.card__input}
											placeholder="Country"
											value={country}
											onChange={(e) => setCountry(e.target.value)}
										/>
									</div>
								</div>
							</div>

							<div className={style.card__footer}>
								{mode === "edit" && (
									<button
										className={`${style.btn} ${style["btn--cancel"]}`}
										onClick={onClose}
									>
										Cancel
									</button>
								)}
								<button
									className={`${style.btn} ${style["btn--primary"]}`}
									onClick={handleSubmit}
								>
									{mode === "edit" ? "Update" : "Add"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardPopup;
