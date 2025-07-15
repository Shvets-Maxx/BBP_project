import React, { useState } from "react";
import { AddressPopup } from "./AddressPopup";

export const AddressPage: React.FC = () => {
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

	const handleEditClick = () => {
		setIsEditMode(true);
		setIsPopupOpen(true);
	};

	const handleClose = () => {
		setIsPopupOpen(false);
	};

	const handleSubmit = () => {
		setIsPopupOpen(false);
	};

	return (
		<div style={{ padding: "2rem" }}>
			<h1>Manage Addresses</h1>
			<div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
				<button onClick={handleAddClick}>Add new address</button>
				<button onClick={handleEditClick}>Edit address</button>
			</div>

			{isPopupOpen && (
				<AddressPopup
					isEdit={isEditMode}
					onClose={handleClose}
					onSubmit={handleSubmit}
					address={isEditMode ? selectedAddress : undefined}
				/>
			)}
		</div>
	);
};
