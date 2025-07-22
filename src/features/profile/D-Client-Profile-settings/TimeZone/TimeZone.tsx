import {
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps,
} from "@mui/material";
import { useState } from "react";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import style from "./TimeZone.module.sass";

// Тип часової зони
type TimeZoneOption =
	| "(UTC -08:00) Los Angeles, California, USA"
	| "(UTC -11:00) Kyiv, Ukraine"
	| "(UTC -03:00) Toronto, Canada";

// Варіанти часових зон
const TIME_ZONES: Array<{ value: TimeZoneOption; label: string }> = [
	{
		value: "(UTC -08:00) Los Angeles, California, USA",
		label: "Pacific Time (Los Angeles)",
	},
	{ value: "(UTC -11:00) Kyiv, Ukraine", label: "Eastern Europe Time (Kyiv)" },
	{ value: "(UTC -03:00) Toronto, Canada", label: "Canada Time (Toronto)" },
];

// Іконка стрілки
const DropdownIcon = (props: { className?: string }) => (
	<img
		{...props}
		src={ArrowIconSrc}
		alt="arrow"
		style={{ width: 24, height: 24, display: "block", pointerEvents: "none" }}
	/>
);

export default function TimeZoneSelect() {
	const [timeZone, setTimeZone] = useState<TimeZoneOption>(
		"(UTC -08:00) Los Angeles, California, USA",
	);

	const handleTimeZoneChange: SelectProps["onChange"] = (
		event: SelectChangeEvent<unknown>,
	) => {
		setTimeZone(event.target.value as TimeZoneOption);
	};

	return (
		<div className={style.timezone}>
			<div className={style.timezone__wrapper}>
				<div className={style.timezone__title}>
					<p>Time zone</p>
				</div>
				<div className={style.timezone__selectWrapper}>
					<Select
						className={style.timezone__select}
						value={timeZone}
						onChange={handleTimeZoneChange}
						IconComponent={DropdownIcon}
					>
						{TIME_ZONES.map(({ value }) => (
							<MenuItem key={value} value={value}>
								<p className={style.timezone__value}>{value}</p>
							</MenuItem>
						))}
					</Select>
				</div>
			</div>
		</div>
	);
}
