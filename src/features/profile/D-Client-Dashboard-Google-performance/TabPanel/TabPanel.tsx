import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import style from "./TabPanel.module.sass";
import CallsChart from "../CallsChart/CallsChart.tsx";
import BusinessProfileStats from "../BusinessProfileStats/BusinessProfileStats.tsx";
import Searches from "../Searches/Searches.tsx";
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			className={style["tabs-content__body"]}
		>
			{value === index && (
				<div className={style["tabs-content__block"]}>{children}</div>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={style.container}>
			<div className={style.container__block}>
				<div className={style["tabs-panel"]}>
					<Tabs
						className={style["tabs-panel__block"]}
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							className={style["tabs-panel__title"]}
							label="About"
							{...a11yProps(0)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Contact"
							{...a11yProps(1)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Location"
							{...a11yProps(2)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="Hours"
							{...a11yProps(3)}
						/>
						<Tab
							className={style["tabs-panel__title"]}
							label="More"
							{...a11yProps(4)}
						/>
					</Tabs>
				</div>
				<CustomTabPanel value={value} index={0}>
					<CallsChart number={3.731} text="Business Profile interactions" />
					<div
						className={style.BusinessProfileStats}
						style={{ display: "flex", gap: "16px" }}
					>
						<BusinessProfileStats />
						<Searches />
					</div>
				</CustomTabPanel>
				<div className={style["tabs-content"]}>
					<CustomTabPanel value={value} index={1}>
						<div>
							{" "}
							<CallsChart number={469} text="Calls made from your Business Profile" />
						</div>
					</CustomTabPanel>

					{/* Вкладка Unreplied */}
					<CustomTabPanel value={value} index={2}>
						<CallsChart number={22} text="Booking made from your Business Profile " />
					</CustomTabPanel>
					<CustomTabPanel value={value} index={3}>
						<CallsChart
							number={2.376}
							text="Direction requests made from your Business Profile"
						/>
					</CustomTabPanel>
					<CustomTabPanel value={value} index={4}>
						<CallsChart
							number={886}
							text="Website clicks made from your Business Profile"
						/>
					</CustomTabPanel>
				</div>
			</div>
		</div>
	);
}
