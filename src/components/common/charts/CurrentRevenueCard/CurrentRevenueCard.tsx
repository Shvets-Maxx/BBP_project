import { FC, useState } from "react";
import { Select, MenuItem, SelectChangeEvent, Tooltip } from "@mui/material";
import { Period } from "@/features/profile/types.ts";
import { revenueData } from "@/features/profile/constants.ts";
import style from "./CurrentRevenueCard.module.sass";

const CurrentRevenueCard: FC = () => {
	const [period, setPeriod] = useState<Period>("This month");
	const [, setHovered] = useState<string | null>(null);

	const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
		setPeriod(event.target.value as Period);
	};

	return (
		<div className={style.revenue}>
			{/* Header */}
			<div className={style.revenue__header}>
				<h3>Current revenue</h3>
				<Select
					MenuProps={{
						disablePortal: true,
						disableScrollLock: true, // ← це головне
					}}
					value={period}
					onChange={handlePeriodChange}
					size="small"
					variant="standard"
					disableUnderline
					sx={{ fontSize: 14 }}
				>
					<MenuItem value="This month">This month</MenuItem>
					<MenuItem value="Last month">Last month</MenuItem>
				</Select>
			</div>

			<div className={style.revenue__total}>
				<h2>${revenueData.total / 1000}k</h2>
				<p>Total revenue</p>
			</div>

			{/* Progress Bar with Tooltip */}
			<div className={style.revenue__progress}>
				{revenueData.segments.map((segment) => (
					<Tooltip
						key={segment.label}
						title={`${segment.label} — $${segment.value / 1000}k (${
							segment.percent
						}%)`}
						placement="top"
						arrow
					>
						<div
							style={{
								flex: segment.percent,
								backgroundColor: segment.color,
								cursor: "pointer",
							}}
							onMouseEnter={() => setHovered(segment.label)}
							onMouseLeave={() => setHovered(null)}
						/>
					</Tooltip>
				))}
			</div>

			{/* Labels */}
			<div className={style.revenue__labels}>
				{revenueData.segments.map((segment) => (
					<div key={segment.label} className={style["revenue__labels-block"]}>
						<div className={style["revenue__labels-circle"]} />
						<div className={style["revenue__labels-label"]}>{segment.label}</div>
						<div>
							${segment.value / 1000}k{" "}
							<span style={{ color: "black" }}>({segment.percent}%)</span>
						</div>
					</div>
				))}

				{/* Nested Items */}

				<div className={style.revenue__nested}>
					{revenueData.segments[0].children?.map((child) => (
						<div key={child.label} className={style["revenue__nested-block"]}>
							<div className={style["revenue__nested-circle"]} />
							<div className={style["revenue__nested-label"]}>{child.label}</div>
							<div>
								${child.value / 1000}k{" "}
								<span style={{ color: "#777" }}>({child.percent}%)</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CurrentRevenueCard;
