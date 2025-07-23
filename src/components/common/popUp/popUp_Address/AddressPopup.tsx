import React from "react";
import style from "./AddressPopup.module.sass";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState, useEffect } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

type AddressPopupProps = {
	mode?: string;
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
	mode,
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
					<div className={style.address__main}>
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
					</div>
					<div className={style.address__footer}>
						{mode === "edit" && (
							<button className={style["address__button-cancel"]} onClick={onClose}>
								Cancel
							</button>
						)}
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
