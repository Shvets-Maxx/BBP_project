// import style from "./OrderInformation.module.sass";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { IconButton } from "@mui/material";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
// import { useState } from "react";
// import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// import { DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { AddressPopup } from "../PopUpEditAdress/AddressPopup";
// function OrderInformation() {
// 	const [changeOpen, setShangeOpen] = useState(true);

// 	const [isEditMode, _setIsEditMode] = useState(false);
// 	const [addressOpen, setAddressOpen] = useState(false);
// 	const [_isPopupOpen, setIsPopupOpen] = useState(false);
// 	const [selectedAddress, _setSelectedAddress] = useState({
// 		streetNumber: "2400",
// 		streetName: "Arbutus",
// 		city: "Los Angeles",
// 		state: "CA (California)",
// 		postcode: "90001",
// 		country: "USA",
// 	});

// 	const handleClose = () => {
// 		setAddressOpen(false);
// 	};

// 	const handleSubmit = (newAddress: typeof selectedAddress) => {
// 		_setSelectedAddress(newAddress);
// 		// alert(isEditMode ? "Address updated!" : "Address added!");
// 		setIsPopupOpen(false);
// 	};

// 	return (
// 		<div className={style.information}>
// 			{addressOpen && (
// 				<AddressPopup
// 					isEdit={isEditMode}
// 					onClose={handleClose}
// 					onSubmit={handleSubmit}
// 					address={isEditMode ? selectedAddress : undefined}
// 				/>
// 			)}

// 			<div className={style.information__container}>
// 				<div className={style.information__header}>
// 					<h1>Order information</h1>
// 				</div>
// 				<div className={style["information__info"]}>
// 					<div className={style["information__info-block"]}>
// 						<div className={style["information__avatar-block"]}>
// 							<AccountCircleOutlinedIcon />
// 							<p>Username:</p>
// 						</div>
// 						<p>Anna Adame</p>
// 					</div>
// 					<div className={style["information__info-block"]}>
// 						<div className={style["information__avatar-block"]}>
// 							<AccountCircleOutlinedIcon />
// 							<p>Email:</p>
// 						</div>
// 						<p>anna.adame@gmail.com</p>
// 					</div>
// 					<div className={style["information__info-block"]}>
// 						<div className={style["information__avatar-block"]}>
// 							<AccountCircleOutlinedIcon />
// 							<p>Total payment:</p>
// 						</div>
// 						<p>$578</p>
// 					</div>
// 					<div className={style["information__info-block"]}>
// 						<div className={style["information__avatar-block"]}>
// 							<AccountCircleOutlinedIcon />
// 							<p>Order date:</p>
// 						</div>
// 						<p>15.05.2025</p>
// 					</div>
// 					<div className={style["information__info-block"]}>
// 						<div className={style["information__avatar-block"]}>
// 							<AccountCircleOutlinedIcon />
// 							<p>Delivery date:</p>
// 						</div>
// 						<div className={style.information__edit}>
// 							<LocalizationProvider dateAdapter={AdapterDayjs}>
// 								<div className={style["information__time-block"]}>
// 									<div className={style.information__time}>
// 										<DemoItem>
// 											<DatePicker disabled={false} defaultValue={dayjs("2022-04-17")} />
// 										</DemoItem>{" "}
// 									</div>
// 								</div>
// 								<div className={style["information__change-block"]}>
// 									{changeOpen ? (
// 										<div className={style["information__change-active"]}>
// 											<IconButton
// 												onClick={(_e) => setShangeOpen(false)}
// 												sx={{ display: changeOpen ? "block" : "none" }}
// 												size="small"
// 											>
// 												<div className={style["information__edit-icon"]}>
// 													<CloseOutlinedIcon />
// 												</div>
// 											</IconButton>
// 											<IconButton
// 												onClick={(_e) => setShangeOpen(false)}
// 												sx={{ display: changeOpen ? "block" : "none" }}
// 												size="small"
// 											>
// 												<div className={style["information__edit-icon"]}>
// 													<CheckOutlinedIcon />
// 												</div>
// 											</IconButton>
// 										</div>
// 									) : (
// 										<IconButton
// 											sx={{ display: changeOpen ? "none" : "block" }}
// 											onClick={(_e) => setShangeOpen(true)}
// 											size="small"
// 										>
// 											<ModeEditOutlineOutlinedIcon />
// 										</IconButton>
// 									)}
// 								</div>
// 							</LocalizationProvider>
// 						</div>
// 					</div>
// 					<div className={style["information__info-block"]}>
// 						<div className={style["information__avatar-block"]}>
// 							<AccountCircleOutlinedIcon />
// 							<p>Courier:</p>
// 						</div>
// 						<div className={style.information__edit}>
// 							<LocalizationProvider dateAdapter={AdapterDayjs}>
// 								<div className={style["information__time-block"]}>
// 									<div className={style.information__time}>
// 										<DemoItem>
// 											<DatePicker disabled={false} defaultValue={dayjs("2022-04-17")} />
// 										</DemoItem>{" "}
// 									</div>
// 								</div>
// 								<div className={style["information__change-block"]}>
// 									{changeOpen ? (
// 										<div className={style["information__change-active"]}>
// 											<IconButton
// 												onClick={(_e) => setShangeOpen(false)}
// 												sx={{ display: changeOpen ? "block" : "none" }}
// 												size="small"
// 											>
// 												<div className={style["information__edit-icon"]}>
// 													<CloseOutlinedIcon />
// 												</div>
// 											</IconButton>
// 											<IconButton
// 												onClick={(_e) => setShangeOpen(false)}
// 												sx={{ display: changeOpen ? "block" : "none" }}
// 												size="small"
// 											>
// 												<div className={style["information__edit-icon"]}>
// 													<CheckOutlinedIcon />
// 												</div>
// 											</IconButton>
// 										</div>
// 									) : (
// 										<IconButton
// 											sx={{ display: changeOpen ? "none" : "block" }}
// 											onClick={(_e) => setShangeOpen(true)}
// 											size="small"
// 										>
// 											<ModeEditOutlineOutlinedIcon />
// 										</IconButton>
// 									)}
// 								</div>
// 							</LocalizationProvider>
// 						</div>
// 					</div>
// 					<div className={style["information__info-block"]}>
// 						<div className={style["information__avatar-block"]}>
// 							<AccountCircleOutlinedIcon />
// 							<p>Address:</p>
// 						</div>
// 						<div className={style.information__edit}>
// 							<div className={style.information__adress}>
// 								<p>
// 									{selectedAddress.streetNumber}, {selectedAddress.streetName},{" "}
// 									{selectedAddress.city}, {selectedAddress.state}{" "}
// 									{selectedAddress.postcode}, {selectedAddress.country}
// 								</p>
// 							</div>

// 							<div className={style["information__change-block"]}>
// 								<IconButton
// 									sx={{ display: changeOpen ? "none" : "block" }}
// 									onClick={(_e) => setAddressOpen(true)}
// 									size="small"
// 								>
// 									<ModeEditOutlineOutlinedIcon />
// 								</IconButton>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default OrderInformation;

import style from "./OrderInformation.module.sass";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useState } from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AddressPopup } from "../PopUpEditAdress/AddressPopup";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function OrderInformation() {
	const [changeOpen, setShangeOpen] = useState(true);

	const [deliveryDate, setDeliveryDate] = useState<Date | null>(new Date());
	const [courierDate, setCourierDate] = useState<Date | null>(new Date());

	const [isEditMode, _setIsEditMode] = useState(false);
	const [addressOpen, setAddressOpen] = useState(false);
	const [_isPopupOpen, setIsPopupOpen] = useState(false);
	const [selectedAddress, _setSelectedAddress] = useState({
		streetNumber: "2400",
		streetName: "Arbutus",
		city: "Los Angeles",
		state: "CA (California)",
		postcode: "90001",
		country: "USA",
	});

	const handleClose = () => {
		setAddressOpen(false);
	};

	const handleSubmit = (newAddress: typeof selectedAddress) => {
		_setSelectedAddress(newAddress);
		// alert(isEditMode ? "Address updated!" : "Address added!");
		setIsPopupOpen(false);
	};

	return (
		<div className={style.information}>
			{addressOpen && (
				<AddressPopup
					isEdit={isEditMode}
					onClose={handleClose}
					onSubmit={handleSubmit}
					address={isEditMode ? selectedAddress : undefined}
				/>
			)}

			<div className={style.information__container}>
				<div className={style.information__header}>
					<h1>Order information</h1>
				</div>
				<div className={style["information__info"]}>
					<div className={style["information__info-block"]}>
						<div className={style["information__avatar-block"]}>
							<AccountCircleOutlinedIcon />
							<p>Username:</p>
						</div>
						<p>Anna Adame</p>
					</div>
					<div className={style["information__info-block"]}>
						<div className={style["information__avatar-block"]}>
							<AccountCircleOutlinedIcon />
							<p>Email:</p>
						</div>
						<p>anna.adame@gmail.com</p>
					</div>
					<div className={style["information__info-block"]}>
						<div className={style["information__avatar-block"]}>
							<AccountCircleOutlinedIcon />
							<p>Total payment:</p>
						</div>
						<p>$578</p>
					</div>
					<div className={style["information__info-block"]}>
						<div className={style["information__avatar-block"]}>
							<AccountCircleOutlinedIcon />
							<p>Order date:</p>
						</div>
						<p>15.05.2025</p>
					</div>
					<div className={style["information__info-block"]}>
						<div className={style["information__avatar-block"]}>
							<AccountCircleOutlinedIcon />
							<p>Delivery date:</p>
						</div>
						<div className={style.information__edit}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<div className={style["information__time-block"]}>
									<div className={style.information__time}>
										<DemoItem>
											<DatePicker
												value={deliveryDate}
												onChange={(newDate) => setDeliveryDate(newDate)}
												disabled={!changeOpen}
											/>
										</DemoItem>{" "}
									</div>
								</div>
								<div className={style["information__change-block"]}>
									{changeOpen ? (
										<div className={style["information__change-active"]}>
											<IconButton
												onClick={(_e) => setShangeOpen(false)}
												sx={{ display: changeOpen ? "block" : "none" }}
												size="small"
											>
												<div className={style["information__edit-icon"]}>
													<CloseOutlinedIcon />
												</div>
											</IconButton>
											<IconButton
												onClick={(_e) => setShangeOpen(false)}
												sx={{ display: changeOpen ? "block" : "none" }}
												size="small"
											>
												<div className={style["information__edit-icon"]}>
													<CheckOutlinedIcon />
												</div>
											</IconButton>
										</div>
									) : (
										<IconButton
											sx={{ display: changeOpen ? "none" : "block" }}
											onClick={(_e) => setShangeOpen(true)}
											size="small"
										>
											<ModeEditOutlineOutlinedIcon />
										</IconButton>
									)}
								</div>
							</LocalizationProvider>
						</div>
					</div>
					<div className={style["information__info-block"]}>
						<div className={style["information__avatar-block"]}>
							<AccountCircleOutlinedIcon />
							<p>Courier:</p>
						</div>
						<div className={style.information__edit}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<div className={style["information__time-block"]}>
									<div className={style.information__time}>
										<DemoItem>
											<DatePicker
												value={courierDate}
												onChange={(newDate) => setCourierDate(newDate)}
												disabled={!changeOpen}
											/>
										</DemoItem>{" "}
									</div>
								</div>
								<div className={style["information__change-block"]}>
									{changeOpen ? (
										<div className={style["information__change-active"]}>
											<IconButton
												onClick={(_e) => setShangeOpen(false)}
												sx={{ display: changeOpen ? "block" : "none" }}
												size="small"
											>
												<div className={style["information__edit-icon"]}>
													<CloseOutlinedIcon />
												</div>
											</IconButton>
											<IconButton
												onClick={(_e) => setShangeOpen(false)}
												sx={{ display: changeOpen ? "block" : "none" }}
												size="small"
											>
												<div className={style["information__edit-icon"]}>
													<CheckOutlinedIcon />
												</div>
											</IconButton>
										</div>
									) : (
										<IconButton
											sx={{ display: changeOpen ? "none" : "block" }}
											onClick={(_e) => setShangeOpen(true)}
											size="small"
										>
											<ModeEditOutlineOutlinedIcon />
										</IconButton>
									)}
								</div>
							</LocalizationProvider>
						</div>
					</div>
					<div className={style["information__info-block"]}>
						<div className={style["information__avatar-block"]}>
							<AccountCircleOutlinedIcon />
							<p>Address:</p>
						</div>
						<div className={style.information__edit}>
							<div className={style.information__adress}>
								<p>
									{selectedAddress.streetNumber}, {selectedAddress.streetName},{" "}
									{selectedAddress.city}, {selectedAddress.state}{" "}
									{selectedAddress.postcode}, {selectedAddress.country}
								</p>
							</div>

							<div className={style["information__change-block"]}>
								<IconButton
									sx={{ display: changeOpen ? "none" : "block" }}
									onClick={(_e) => setAddressOpen(true)}
									size="small"
								>
									<ModeEditOutlineOutlinedIcon />
								</IconButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderInformation;
