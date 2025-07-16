import style from "./W-Admin-Services-Catalog.module.sass";
import Sidebar from "../../../../components/common/sidebar/Sidebar.tsx";
import ClientProfileTop from "../../../../components/common/clientProfileTop/ClientProfileTop.tsx";
import Search from "../Search/Search.tsx";
import Filters from "../Filters/Filters.tsx";
import TabPanel from "../TabPanel/TabPanel.tsx";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";

function W_Admin_Services_Catalog() {
	const [isOpen, setIsOpen] = useState(false); // ← замість open

	return (
		<div className={style.profileSettingContainer}>
			<Sidebar />
			<div className={style.profileSettingContainer__container}>
				<div className={style.profileSettingContainer__block}>
					<div className={style.profileSettingContainer__catalog}>
						<ClientProfileTop
							classNameTitle={style.responsive__fontSize}
							classNameMargin={style.responsive__margin}
						>
							Services - Catalog
						</ClientProfileTop>
						<div className={style.profileSettingContainer__button}>
							<IconButton onClick={(_e) => setIsOpen(!isOpen)}>
								<FilterListIcon fontSize="large" />
							</IconButton>
						</div>
					</div>

					<section className={style.profileSettingContainer__section}>
						<div className={style.profileSettingContainer__components}>
							<div className={style.profileSettingContainer__search}>
								<Search />
							</div>

							<Filters state={isOpen} setState={setIsOpen} />
						</div>
						<div className={style.profileSettingContainer__tabPanel}>
							<div className={style.profileSettingContainer__responce}>
								<Search />
							</div>
							<TabPanel />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default W_Admin_Services_Catalog;
