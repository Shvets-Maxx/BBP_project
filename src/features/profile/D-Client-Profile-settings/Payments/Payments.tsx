import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Payments.module.sass";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import deleteLogo from "./assets/deleteLogo.svg";
import penLogo from "./assets/penLogo.svg";
import GooglePayLogo from "./assets/GooglePayLogo.svg";
import MasterCardLogo from "./assets/MasterCardLogo.svg";
import plusLogo from "./assets/plusLogo.svg";
// import CreateNewPasswordPopup from "@/components/common/popUp/popUp_Password/CreateNewPasswordPopup/CreateNewPasswordPopup";
import { AddPaymentMethodPopup } from "../../../../components/common/popUp/popUp_AddPaymentMethod/AddPaymentMethodPopup";
import CardPopup from "../../../../components/common/popUp/popUp_Card/CardPopup";

const PAYMENT_CARDS = [
	{
		logo: MasterCardLogo,
		name: "MasterCard",
		number: "**** **** **** 1234",
	},
	{
		logo: GooglePayLogo,
		name: "Google Pay",
		number: "**** **** **** 5678",
	},
];

export default function Payments() {
	const [isOpen, setIsOpen] = useState(false);
	const additionalCards = PAYMENT_CARDS.slice(1); // всі, крім першої
	const [showSelectPopup, setShowSelectPopup] = useState(false);
	const [showCardPopup, setShowCardPopup] = useState(false);
	const handleNext = () => {
		setShowSelectPopup(false);
		setShowCardPopup(true);

		// Інші методи — можеш додати логіку при потребі
	};

	return (
		<div className={style.container}>
			<div className={style["container__block"]}>
				<div className={style["container__title-block"]}>
					<p>Payments</p>
					<img
						src={ArrowIconSrc}
						alt="Toggle"
						className={`${style.arrow} ${isOpen ? style.open : ""}`}
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>

				<div className={style.payments}>
					<div className={style.payments__block}>
						<div className={style["payments__info-block"]}>
							<img src={PAYMENT_CARDS[0].logo} alt={PAYMENT_CARDS[0].name} />
							<div className={style["payments__info-wrapper"]}>
								<div className={style["payments__cartName-block"]}>
									<p className={style["payments__name"]}>{PAYMENT_CARDS[0].name}</p>
									<div className={style["payments__actions"]}>
										<img src={penLogo} alt="Edit" />
										<img src={deleteLogo} alt="Delete" />
									</div>
								</div>
								<div className={style["payments__cartNumber-block"]}>
									<p className={style["payments__numbers"]}>{PAYMENT_CARDS[0].number}</p>
								</div>
							</div>
						</div>
					</div>

					<AnimatePresence initial={false}>
						{isOpen && (
							<motion.div
								initial={{ maxHeight: 0, opacity: 0 }}
								animate={{ maxHeight: 1000, opacity: 1 }}
								exit={{ maxHeight: 0, opacity: 0 }}
								transition={{ duration: 0.4, ease: "easeInOut" }}
								style={{ overflow: "hidden" }}
							>
								<div className={style["payments__dropDown-block"]}>
									{additionalCards.map((card, index) => (
										<div key={index} className={style.payments__block}>
											<div className={style["payments__info-block"]}>
												<img src={card.logo} alt={card.name} />
												<div className={style["payments__info-wrapper"]}>
													<div className={style["payments__cartName-block"]}>
														<p className={style["payments__name"]}>{card.name}</p>
														<div className={style["payments__actions"]}>
															<img src={penLogo} alt="Edit" />
															<img src={deleteLogo} alt="Delete" />
														</div>
													</div>
													<div className={style["payments__cartNumber-block"]}>
														<p className={style["payments__numbers"]}>{card.number}</p>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				{showSelectPopup && (
					<div className="popup-container">
						<AddPaymentMethodPopup
							onClose={() => setShowSelectPopup(false)}
							onNext={handleNext}
						/>
					</div>
				)}
				{showCardPopup && (
					<div className="popup-container">
						<CardPopup
							mode={"add"}
							onBack={() => {
								setShowCardPopup(false);
								setShowSelectPopup(true); // ← повертаємо попередній попап
							}}
							onClose={() => setShowCardPopup(false)}
						/>
					</div>
				)}
				<button
					onClick={() => setShowSelectPopup(true)}
					className={style.addButton}
				>
					<img src={plusLogo}></img>Add{" "}
				</button>
			</div>
		</div>
	);
}
