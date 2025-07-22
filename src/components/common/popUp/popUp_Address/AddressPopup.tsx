// import React from "react";
// import "./AddressPopup.css";
// import { Select, MenuItem, FormControl } from "@mui/material";

// type AddressPopupProps = {
// 	isEdit?: boolean;
// 	onClose: () => void;
// 	onSubmit: () => void;
// 	address?: {
// 		streetNumber: string;
// 		streetName: string;
// 		city: string;
// 		state: string;
// 		postcode: string;
// 		country: string;
// 	};
// };

// const states = ["CA (California)", "CO (Colorado)", "CT (Connecticut)"];

// export const AddressPopup: React.FC<AddressPopupProps> = ({
// 	isEdit = false,
// 	onClose,
// 	onSubmit,
// 	address = {
// 		streetNumber: "",
// 		streetName: "",
// 		city: "",
// 		state: "",
// 		postcode: "",
// 		country: "",
// 	},
// }) => {
// 	const [selectedState, setSelectedState] = React.useState(address.state);
// 	React.useEffect(() => {
// 		document.body.classList.add("no-scroll");
// 		return () => {
// 			document.body.classList.remove("no-scroll");
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			<div
// 				style={{
// 					position: "fixed",
// 					width: "100vw",
// 					height: "100vh",
// 					background: "grey",
// 					zIndex: "111",
// 					opacity: "30%",
// 					top: "50%",
// 					left: "50%",
// 					transform: "translate(-50%, -50%)",
// 				}}
// 			></div>
// 			<div
// 				style={{
// 					width: "600px",
//           maxWidth:"600px !important",
// 					position: "absolute",
// 					transform: "translate(-50%, -50%)",
// 					zIndex: "1232",
// 					top: "50%",
// 					left: "50%",
// 				}}
// 				className="popup"
// 			>
// 				<div className="popup__header">
// 					<h2 style={{ font: "400 32px PT Serif" }}>
// 						{isEdit ? "Edit address" : "Add new address"}
// 					</h2>
// 					<button onClick={onClose} className="popup__close">
// 						×
// 					</button>
// 				</div>

// 				<div
// 					style={{ width: "100%", marginBottom: "24px" }}
// 					className="popup__fields-row"
// 				>
// 					<div style={{ width: "100%" }}>
// 						<div style={{ marginBottom: "16px" }}>
// 							<p
// 								style={{
// 									font: "400 18px Open Sans",
// 									color: "#000",
// 									textAlign: "start",
// 								}}
// 							>
// 								Street number
// 							</p>
// 						</div>
// 						<input
// 							style={{ height: "60px", width: "100%" }}
// 							placeholder="Street number"
// 							defaultValue={address.streetNumber}
// 						/>
// 					</div>
// 					<div style={{ width: "100%" }}>
// 						<div style={{ marginBottom: "16px" }}>
// 							<p
// 								style={{
// 									font: "400 18px Open Sans",
// 									color: "#000",
// 									textAlign: "start",
// 								}}
// 							>
// 								Street name
// 							</p>
// 						</div>
// 						<input
// 							style={{ height: "60px", width: "100%" }}
// 							placeholder="Street name"
// 							defaultValue={address.streetName}
// 						/>
// 					</div>
// 				</div>

// 				<div
// 					style={{ width: "100%", marginBottom: "24px" }}
// 					className="popup__fields-row"
// 				>
// 					<div style={{ width: "100%" }}>
// 						<div style={{ marginBottom: "16px" }}>
// 							<p
// 								style={{
// 									font: "400 18px Open Sans",
// 									color: "#000",
// 									textAlign: "start",
// 								}}
// 							>
// 								City
// 							</p>
// 						</div>
// 						<input
// 							style={{ height: "60px", width: "100%", marginBottom: "0" }}
// 							className="popup__field"
// 							placeholder="City"
// 							defaultValue={address.city}
// 						/>
// 					</div>
// 				</div>
// 				<div style={{ marginBottom: "24px" }}>
// 					<div style={{ marginBottom: "16px" }}>
// 						<p
// 							style={{ font: "400 18px Open Sans", color: "#000", textAlign: "start" }}
// 						>
// 							State
// 						</p>
// 					</div>
// 					<FormControl fullWidth className="popup__field">
// 						<Select
// 							labelId="state-label"
// 							value={selectedState}
// 							onChange={(e) => setSelectedState(e.target.value)}
// 							sx={{
// 								width: "100%",
// 								backgroundColor: "#fff",
// 								borderRadius: "6px",
// 								"& .MuiOutlinedInput-notchedOutline": {
// 									borderColor: "#ccd5db",
// 								},
// 								"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
// 									borderColor: "#f27c53",
// 								},
// 							}}
// 						>
// 							{states.map((s, i) => (
// 								<MenuItem key={i} value={s}>
// 									{s}
// 								</MenuItem>
// 							))}
// 						</Select>
// 					</FormControl>
// 				</div>
// 				<div
// 					style={{ width: "100%", marginBottom: "24px" }}
// 					className="popup__fields-row"
// 				>
// 					<div style={{ width: "100%" }}>
// 						<div style={{ marginBottom: "16px" }}>
// 							<p
// 								style={{
// 									font: "400 18px Open Sans",
// 									color: "#000",
// 									textAlign: "start",
// 								}}
// 							>
// 								Post Code
// 							</p>
// 						</div>
// 						<input
// 							style={{ height: "60px", width: "100%" }}
// 							placeholder="Postcode"
// 							defaultValue={address.postcode}
// 						/>
// 					</div>
// 					<div style={{ width: "100%" }}>
// 						<div style={{ marginBottom: "16px" }}>
// 							<p
// 								style={{
// 									font: "400 18px Open Sans",
// 									color: "#000",
// 									textAlign: "start",
// 								}}
// 							>
// 								Country
// 							</p>
// 						</div>
// 						<input
// 							style={{ height: "60px", width: "100%" }}
// 							placeholder="Country"
// 							defaultValue={address.country}
// 						/>
// 					</div>
// 				</div>

// 				<div className="popup__footer">
// 					{isEdit && (
// 						<button
// 							style={{ font: "400 18px Open Sans", flexBasis: "50%" }}
// 							className="popup__cancel"
// 							onClick={onClose}
// 						>
// 							Cancel
// 						</button>
// 					)}
// 					<button
// 						style={{ font: "400 18px Open Sans", flexBasis: "50%" }}
// 						className="popup__submit"
// 						onClick={onSubmit}
// 					>
// 						{isEdit ? "Update" : "Add"}
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
import React from "react";
import style from "./AddressPopup.module.sass";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState, useEffect } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

type AddressPopupProps = {
	isEdit?: boolean;
	onClose: () => void;
	onSubmit: (address: {
		streetNumber: string;
		streetName: string;
		city: string;
		state: string;
		postcode: string;
		country: string;
	}) => void;
	address?: {
		streetNumber: string;
		streetName: string;
		city: string;
		state: string;
		postcode: string;
		country: string;
	};
};

export const AddressPopup: React.FC<AddressPopupProps> = ({
	onClose,
	onSubmit,
	address = {
		streetNumber: "",
		streetName: "",
		city: "",
		state: "",
		postcode: "",
		country: "",
	},
}) => {
	const states = ["CA (California)", "CO (Colorado)", "CT (Connecticut)"];
	React.useEffect(() => {
		document.body.classList.add("no-scroll");
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, []);

	const [form, setForm] = useState(address);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		onSubmit(form);
		onClose();
	};
	useEffect(() => {
		document.body.classList.add("no-scroll");
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, []);

	return (
		<div className={style.address}>
			<div className={style.address__container}>
				<div className={style.address__block}>
					<div className={style.address__header}>
						<h1>Add new address</h1>
						<IconButton onClick={onClose} size="small">
							<div className={style["information__edit-icon"]}>
								<CloseOutlinedIcon fontSize="small" />
							</div>
						</IconButton>
					</div>

					<div className={style.address__info}>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>Street number</p>
							</div>
							<input
								type="number"
								name="streetNumber"
								className={style.address__input}
								placeholder="20042"
								value={form.streetNumber}
								onChange={handleChange}
							/>
						</div>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>Street name</p>
							</div>
							<input
								name="streetName"
								className={style.address__input}
								placeholder="Street name"
								value={form.streetName}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className={style.address__info}>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>City</p>
							</div>
							<input
								name="city"
								className={style.address__input}
								placeholder="Los Angeles"
								value={form.city}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className={style.address__info}>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>State</p>
							</div>
							<FormControl fullWidth className="popup__field">
								<Select
									labelId="state-label"
									value={form.state}
									onChange={(e) =>
										setForm((prev) => ({ ...prev, state: e.target.value }))
									}
									sx={{
										width: "100%",
										backgroundColor: "#fff",
										borderRadius: "6px",
										"& .MuiOutlinedInput-notchedOutline": {
											borderColor: "#ccd5db",
										},
										"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
											borderColor: "#f27c53",
										},
									}}
								>
									{states.map((s, i) => (
										<MenuItem key={i} value={s}>
											{s}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
					</div>

					<div className={style.address__info}>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>Post code</p>
							</div>
							<input
								type="number"
								name="postcode"
								className={style.address__input}
								placeholder="Post code"
								value={form.postcode}
								onChange={handleChange}
							/>
						</div>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>Country</p>
							</div>
							<input
								name="country"
								className={style.address__input}
								placeholder="City"
								value={form.country}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className={style.address__footer}>
						{/* <button className={style["address__button-cancel"]} onClick={onClose}>
							Cancel
						</button> */}
						<button
							className={style["address__button-update"]}
							onClick={handleSubmit}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
