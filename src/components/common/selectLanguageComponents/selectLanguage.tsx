import styles from "./SelectLanguage.module.sass";
import GlobusIconSrc from "../clientProfileTop/assets/Small globe.svg";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";

import { useState } from "react";

import { MenuItem, Select } from "@mui/material";

const DropdownIcon = (props: { className?: string }) => (
	<img
		{...props}
		src={ArrowIconSrc}
		alt="arrow"
		style={{ width: 16, height: 16, display: "block", pointerEvents: "none" }}
	/>
);
export default function SelectLanguage() {
	const [language, setLanguage] = useState("EN");

	const Language = ["EN", "UA", "PL"];

	return (
		<div className={styles.language}>
			<Select
				className={styles.timezone__select}
				value={language}
				onChange={(e) => setLanguage(e.target.value)}
				IconComponent={DropdownIcon}
				renderValue={(selected) => (
					<div className={styles["timezone__select-value"]}>
						<img
							className={styles.timezone__globus}
							src={GlobusIconSrc}
							alt="language icon"
						/>
						<p className={styles.timezone__value}>{selected}</p>
					</div>
				)}
			>
				{Language.map((value) => (
					<MenuItem key={value} value={value}>
						<div className={styles["timezone__select-value"]}>
							<p className={styles.timezone__value}>{value}</p>
						</div>
					</MenuItem>
				))}
			</Select>
		</div>
	);
}
