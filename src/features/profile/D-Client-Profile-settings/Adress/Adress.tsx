import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Adress.module.sass";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import deleteLogo from "./assets/deleteLogo.svg";
import penLogo from "./assets/penLogo.svg";
import plusLogo from "../Payments/assets/plusLogo.svg";
import { AddressPopup } from "@/components/common/popUp/popUp_Address/AddressPopup";

const TIME_ZONES = [
	"2400, Arbutus, Los Angeles, CA 90049-1209, USA",
	"2200, Las Flores, Los Angeles, CA 90041-1132, USA",
	"1000, Main Street, Toronto, Canada",
];

export default function TimeZoneSelect() {
	const [isOpen, setIsOpen] = useState(false);

	const additionalAddresses = TIME_ZONES.slice(1); // усі окрім першої

	const [isEditMode, setIsEditMode] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [selectedAddress, _setSelectedAddress] = useState({
		streetNumber: "2400",
		streetName: "Arbutus",
		city: "Los Angeles",
		state: "CA (California)",
		postcode: "90001",
		country: "USA",
	});
	const handleAddClick = () => {
		setIsEditMode(false);
		setIsPopupOpen(true);
	};
	const handleSubmit = () => {
		setIsPopupOpen(false);
	};
	const handleClose = () => {
		setIsPopupOpen(false);
	};

	return (
		<div className={style["address-container"]}>
			<div className={style["address-container__block"]}>
				<div className={style["address-container__title"]}>
					<p>Addresses</p>
					<img
						src={ArrowIconSrc}
						alt="Toggle"
						className={`${style["address-container__arrow"]} ${
							isOpen ? style["address-container__arrow--open"] : ""
						}`}
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>

				<div className={style.adress}>
					<div className={style.adress__block}>
						<span>{TIME_ZONES[0]}</span>
						<div className={style.adress__actions}>
							<img src={penLogo} alt="Edit" />
							<img src={deleteLogo} alt="Delete" />
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
								<div className={style.adress__dropdown}>
									{additionalAddresses.map((address, index) => (
										<div key={index} className={style.adress__block}>
											<span>{address}</span>
											<div className={style.adress__actions}>
												<img src={penLogo} alt="Edit" />
												<img src={deleteLogo} alt="Delete" />
											</div>
										</div>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				{isPopupOpen && (
					<AddressPopup
						isEdit={isEditMode}
						onClose={handleClose}
						onSubmit={handleSubmit}
						address={isEditMode ? selectedAddress : undefined}
					/>
				)}
				<button
					onClick={handleAddClick}
					className={style["address-container__add-button"]}
				>
					<img src={plusLogo} alt="Add" />
					Add
				</button>
			</div>
		</div>
	);
}
