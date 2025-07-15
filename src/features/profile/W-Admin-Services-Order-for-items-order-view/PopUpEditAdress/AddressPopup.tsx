import React from "react";
import style from "./AddressPopup.module.sass";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState, useEffect } from "react";
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
								<p>Country</p>
							</div>
							<input
								name="country"
								className={style.address__input}
								placeholder="Country"
								value={form.country}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className={style.address__info}>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>Address</p>
							</div>
							<input
								name="streetName"
								className={style.address__input}
								placeholder="Address"
								value={form.streetName}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className={style.address__info}>
						<div style={{ width: "100%" }}>
							<div className={style["address__info-block"]}>
								<p>Postcode</p>
							</div>
							<input
								type="number"
								name="postcode"
								className={style.address__input}
								placeholder="Postcode"
								value={form.postcode}
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
								placeholder="City"
								value={form.city}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className={style.address__footer}>
						<button className={style["address__button-cancel"]} onClick={onClose}>
							Cancel
						</button>
						<button
							className={style["address__button-update"]}
							onClick={handleSubmit}
						>
							Update
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
